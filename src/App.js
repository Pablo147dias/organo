import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CampoTexto/CampoTexto';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      nome: 'Frontend',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    }
  ])

  const [colaboradores, setColaboradores] = useState([
    // Programação
    {
      nome: "Ana Silva",
      cargo: "Desenvolvedora Back-end",
      imagem: "https://randomuser.me/api/portraits/women/44.jpg",
      time: "Programação"
    },
    {
      nome: "Carlos Souza",
      cargo: "Desenvolvedor Full Stack",
      imagem: "https://randomuser.me/api/portraits/men/45.jpg",
      time: "Programação"
    },
    {
      nome: "Fernanda Lima",
      cargo: "Desenvolvedora Java",
      imagem: "https://randomuser.me/api/portraits/women/46.jpg",
      time: "Programação"
    },
    // Frontend
    {
      nome: "Lucas Pereira",
      cargo: "Desenvolvedor React",
      imagem: "https://randomuser.me/api/portraits/men/47.jpg",
      time: "Frontend"
    },
    {
      nome: "Marina Costa",
      cargo: "UI Developer",
      imagem: "https://randomuser.me/api/portraits/women/48.jpg",
      time: "Frontend"
    },
    {
      nome: "João Mendes",
      cargo: "Desenvolvedor Angular",
      imagem: "https://randomuser.me/api/portraits/men/49.jpg",
      time: "Frontend"
    },
    // Data Science
    {
      nome: "Paula Torres",
      cargo: "Cientista de Dados",
      imagem: "https://randomuser.me/api/portraits/women/50.jpg",
      time: "Data Science"
    },
    {
      nome: "Rafael Dias",
      cargo: "Analista de Dados",
      imagem: "https://randomuser.me/api/portraits/men/51.jpg",
      time: "Data Science"
    },
    {
      nome: "Juliana Alves",
      cargo: "Engenheira de Dados",
      imagem: "https://randomuser.me/api/portraits/women/52.jpg",
      time: "Data Science"
    },
    // Devops
    {
      nome: "Bruno Martins",
      cargo: "DevOps Engineer",
      imagem: "https://randomuser.me/api/portraits/men/53.jpg",
      time: "Devops"
    },
    {
      nome: "Gabriela Rocha",
      cargo: "SRE",
      imagem: "https://randomuser.me/api/portraits/women/54.jpg",
      time: "Devops"
    },
    {
      nome: "Eduardo Lima",
      cargo: "Cloud Architect",
      imagem: "https://randomuser.me/api/portraits/men/55.jpg",
      time: "Devops"
    },
    // UX e Design
    {
      nome: "Patrícia Souza",
      cargo: "UX Designer",
      imagem: "https://randomuser.me/api/portraits/women/56.jpg",
      time: "UX e Design"
    },
    {
      nome: "Thiago Ramos",
      cargo: "UI Designer",
      imagem: "https://randomuser.me/api/portraits/men/57.jpg",
      time: "UX e Design"
    },
    {
      nome: "Larissa Gomes",
      cargo: "Product Designer",
      imagem: "https://randomuser.me/api/portraits/women/58.jpg",
      time: "UX e Design"
    },
    // Mobile
    {
      nome: "Vinícius Oliveira",
      cargo: "Mobile Developer",
      imagem: "https://randomuser.me/api/portraits/men/59.jpg",
      time: "Mobile"
    },
    {
      nome: "Amanda Fernandes",
      cargo: "iOS Developer",
      imagem: "https://randomuser.me/api/portraits/women/60.jpg",
      time: "Mobile"
    },
    {
      nome: "Felipe Castro",
      cargo: "Android Developer",
      imagem: "https://randomuser.me/api/portraits/men/61.jpg",
      time: "Mobile"
    },
    // Inovação e Gestão
    {
      nome: "Renata Barros",
      cargo: "Product Owner",
      imagem: "https://randomuser.me/api/portraits/women/62.jpg",
      time: "Inovação e Gestão"
    },
    {
      nome: "Marcelo Pinto",
      cargo: "Scrum Master",
      imagem: "https://randomuser.me/api/portraits/men/63.jpg",
      time: "Inovação e Gestão"
    },
    {
      nome: "Sofia Martins",
      cargo: "Agile Coach",
      imagem: "https://randomuser.me/api/portraits/women/64.jpg",
      time: "Inovação e Gestão"
    }
  ]);

  const aoNovocolaborardorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  function deletarColaborador() {
    console.log("Deletar colaborador: ");
  }
  function mudarCorTime(cor, nome) {
    setTimes(times.map(time => {
      if (time.nome === nome) {
        time.cor = cor; 
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)}  aoColaboradorCadastrado={aoNovocolaborardorAdicionado}/>
      
    {times.map((time, indice) => 
      <Time 
        time={time}
        mudarCor={mudarCorTime}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        key={indice} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria} 
        aoDeletar={deletarColaborador}
        />)
        
    }

    <Rodape />

    </div>
  );
}

export default App;
