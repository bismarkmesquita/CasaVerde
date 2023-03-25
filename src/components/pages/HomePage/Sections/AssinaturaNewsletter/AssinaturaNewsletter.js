import { HiOutlineMail } from "react-icons/hi";


function AssinaturaNewsletter() {
    return(
        <section className="AssinaturaNewsletter">
            <div className="container">
                <div className="cta">
                    <p>Sua casa com as</p>
                    <h2>melhores<br/>plantas</h2>
                    <span>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</span>
                    <div className="cta-email">
                        <input type='text' placeholder = {<img src={HiOutlineMail}></img>} ></input>
                        <button>Assinatura Newsletter</button>
                        <img src={HiOutlineMail}></img>

                    </div>
                </div>
                <div className="img">

                </div>
            </div>
        </section>
    )
}

export default AssinaturaNewsletter;