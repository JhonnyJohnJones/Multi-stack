import { AxiosError } from 'axios'
import { useState, useEffect } from 'react'
import { Pet } from '../../@types/Pet'
import { ApiService } from '../../services/ApiService'


export function useIndex(){
    const [listaPets, setListaPets] = useState<Pet[]>([]), 
        [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
        [email, setEmail] = useState(''),
        [valor, setValor] = useState(''),
        [mensagem, setMensagem] = useState('')

    useEffect(() => {
        ApiService.get('/pets').then((resposta) => {setListaPets(resposta.data)})
    },[]) //array vazio é pra só executar uma vez

    //useEffect funciona toda vez que uma parada muda
    //useEffect(() => {
    //    if(petSelecionado === null){
    //        limparFormulario();
    //    }
    //},[petSelecionado])

    function adotar(){
        if(petSelecionado !== null){
            if(validarDadosAdocao()){
                ApiService.post('/adocoes', {
                    pet_id: petSelecionado.id,
                    email: email,
                    valor,

                })
                    .then(() => {
                        setPetSelecionado(null);
                        setMensagem('Pet adotado com    sucesso!');
                        limparFormulario()
                    })
                    .catch((error: AxiosError) => {
                        setMensagem(error.response?.data.message)
                    }) // o ? serve pra falar "se tiver o data, ent acessa, se n vida que segue"
            } else {
                setMensagem('Preencha os campos corretamente!')
            }
        }
    }

    function validarDadosAdocao(){
        return email.length > 0 && valor.length > 0
    }

    function limparFormulario(){
        setEmail('');
        setValor('');
    }

    return {
        listaPets,
        petSelecionado,
        setPetSelecionado,
        email,
        setEmail,
        valor,
        setValor,
        mensagem,
        setMensagem,
        adotar
    }
}