
import './rodape.css'
import imgIg from './instagram.png'
import imgtw from './twitter.png'
import imgfb from './facebook.png'
import logo from './logo.png'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src={imgfb} alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src={imgtw} alt="" />
                </a>
            </li>
            <li>
                <a href="instagram.com" target="_blank">
                    <img src={imgIg} alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src={logo} alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Pablo Dias.
        </p>
       </section>
    </footer>)
}

export default Rodape