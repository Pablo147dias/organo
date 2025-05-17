import './Colaborador.css';

const Colaborador = (props) => {
    
    return (
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src='https://github.com/pablo147dias.png' alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>Pablo Dias</h4>
                <h5>Junior developer</h5>
            </div>
        </div>
    )
}

export default Colaborador;