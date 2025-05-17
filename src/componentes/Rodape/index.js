import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='redes' >
                <a href="https://www.facebook.com/"><img src="/imagens/fb.png" alt="Facebook" /></a>
                <a href="https://www.instagram.com/"><img src="/imagens/ig.png" alt="Instagram" /></a>
                <a href="https://www.twitter.com/"><img src="/imagens/tw.png" alt="Twitter" /></a>
            </div>
            <img src="/imagens/logo.png" alt="Logo da Organo" />
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape;