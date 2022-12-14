import { useState } from 'react'
import { ApiService } from '../../../services/ApiService'
import { AxiosError } from 'axios'

export function useCadastro(){
    const [nome, setNome] = useState(''),
    [historia, setHistoria] = useState(''),
    [foto, setFoto] = useState(''),
    [mensagem, setMensagem] = useState('')

    function cadastrar(){
        if (validarFormulario()){
            ApiService.post('/pets', {
                nome,
                historia,
                foto}).then(() => {
                    limpar()
                    setMensagem('Cadastro realizado com sucesso! S2')
                }).catch((error: AxiosError) => {
                    setMensagem(error.response?.data.menssage)
                })
        } else {
            setMensagem('Preencha todos os campos corretamente!')
        }
    }

    function validarFormulario(){
        return nome.length > 0 && historia.length > 20 && foto.length > 5
    }

    function limpar(){
        setNome('');
        setHistoria('');
        setFoto('');
    }

    return{
        nome,
        setNome,
        historia,
        setHistoria,
        foto,
        setFoto,
        mensagem,
        setMensagem,
        cadastrar
    }
}