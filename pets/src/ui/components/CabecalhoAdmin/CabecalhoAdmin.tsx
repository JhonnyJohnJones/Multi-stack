import { Link, Box } from '@mui/material'
import NextLink from 'next/link' //faz com que tenha que carregar menos coisa, deixando mais rapido

import { CabecalhoContainer, Logo, LinksContainer } from "./CabecalhoAdmin.style"

//o component serve pra falar o comportamento

//sm = tela super pequena, xs = || extremamente pequena

export default function CabecalhoAdmin(){
    return (
        <CabecalhoContainer>
            <div>
                <Logo src={'/imagens/logo.svg'} alt={'Adote um Pet'} />
                <LinksContainer>
                    <Link component={NextLink} href={'/pets/cadastro'}>
                        <a>Cadastrar Pet</a>
                    </Link>
                    <Link component={NextLink} href={'/pets/relatorio'}>
                        <a>
                            Relatório
                            <Box 
                            component={'span'}
                            sx={{display: {sm:'initial', xs: 'none'}}}
                            > de Adoção</Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </CabecalhoContainer>
    )
}