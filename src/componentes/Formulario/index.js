import Banner from '../Banner/Banner';
import './Formulario.css';
import CampoTexto from '../CampoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]
    return (
         <section className='formulario'>
             <form >
                <h2>Preencha os dados para criar o card do colaborador</h2>
          <CampoTexto label="Nome" placeholder="Digite teu nome"/>
          <CampoTexto label="Cargo"  placeholder="Digite teu cargo"/>
          <CampoTexto label="Imagem"  placeholder="Digite o endereço da imagem "/>
          <ListaSuspensa   label='Time' itens={times}/>
             </form> 
        </section> 
  );
}
    

export default Formulario;