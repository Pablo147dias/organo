import Banner from '../Banner/Banner';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = (props) => {


  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    console.log('Formulário foi enviado', nome, cargo, imagem, time);
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time

    })
  }
    return (
         <section className='formulario'>
             <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto
            obrigatorio={true}
            label="Nome"
            placeholder="Digite teu nome"
            valor={nome}
            aoAlterado={valor => setNome(valor)}
          />
          <CampoTexto 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
          obrigatorio={true} label="Cargo"  placeholder="Digite teu cargo"/>
          <CampoTexto 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
          label="Imagem"  placeholder="Digite o endereço da imagem "/>
          <ListaSuspensa 
          valor={time}
          aoAlterado={valor => setTime(valor)}
          obrigatorio={true} label='Time' itens={props.times}/>
           <Botao>
             Criar Card
           </Botao>
             </form> 
        </section> 
  );
}
    

export default Formulario;