import React from "react";
import './mid.css'
import phone2 from '../../assets/phone-2.png'

export default function Mid() {
    return (
        <section className="mid">

            <div className="site-phone">
                <h2>Foco na excelência da criação de cada site</h2>

                <img width={350} src={phone2} alt="" />
            </div>

            

            <div className="text-mid">
                <p>
                Meu objetivo é usar as habilidades que possuo, na área em que sou apaixonado, para desenvolver utilidade; utilidade para as pessoas, para a sociedade, para o mundo! É nesse contexto que insiro a programação, uma das poucas áreas onde você pode transportar o mundo digital para o físico - e é essa particularidade que me encanta; com ela, sei que posso construir aplicações que impactem, diretamente e de forma positiva, as pessoas ao meu redor.
                </p> 
            </div>

        </section>
    )
}