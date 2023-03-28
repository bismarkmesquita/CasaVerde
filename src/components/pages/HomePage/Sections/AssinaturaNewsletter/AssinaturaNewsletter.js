import { HiOutlineMail } from "react-icons/hi";
import Planta from "../../../../../assets/img/Planta.png"
import "./AssinaturaNewsletter.css"

function AssinaturaNewsletter() {
    return(
        <section className="AssinaturaNewsletter">
            <div className="container">
                <div className="AssinaturaNewsletter-content">
                    <div className="cta">
                        <p>Sua casa com as</p>
                        <h2>melhores<br/>plantas</h2>
                        <span>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</span>
                        <div className="cta-email">
                            <input type='text' placeholder="Insira seu e-mail"></input>
                            <button>Assinatura Newsletter</button>
                        </div>
                    </div>
                    <div className="img">
                        <img src={Planta}></img>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AssinaturaNewsletter;