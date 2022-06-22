import React from "react";
import './caracteristicas.css'
import Cards from "../Cards/Cards";

import phone from '../../assets/phone.svg'
import desktop from '../../assets/desktop.svg'
import seo from '../../assets/seo.svg'

export default function Caracteristicas() {
    return (
        <section className="caracteristicas">
           <div className="title-carac">
                <h1>Sua presença digital com um brandir do meu teclado</h1>
            </div>

            <div className="caracs">
    
                <Cards 
                    icon={phone} 
                    title='Responsividade' 
                    desc='Responsividade configurada para garantir a boa aparência do seu site em qualquer dispositivo, seja ele computador, tablet ou smartphone.' 
                />

                <Cards 
                    icon={desktop} 
                    title='Mordernidade' 
                    desc='Aparência moderna e profissional focando sempre nas boas práticas de desing mantendo um visual elegante e agradável aos olhos.' 
                />

                <Cards 
                    icon={seo} 
                    title='SEO Otimizado' 
                    desc='Otimização de SEO para que seu site fique em uma ótima colocação nas maiores ferramentas de busca da internet.' 
                />

            </div>

            <a className="sobre-carac" href="">Sobre</a>
        </section>
    )
}