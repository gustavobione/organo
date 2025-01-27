import { useState } from 'react';
import CampoTexto from '../CampoTexto';
import './Formulario.css';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Formulario = (props) => {
    
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const aoSalvar = (evento) => { 
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        });
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
               <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times} // Array de opções
                    valor={time} // Estado do valor selecionado
                    aoAlterado={(valor) => setTime(valor)} // Função para atualizar o estado
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario