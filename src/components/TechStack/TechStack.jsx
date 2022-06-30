import React from "react";
import './techStack.css'
import Cards from "../Cards/Cards";
import html5 from '../../assets/html5.svg'
import css3 from '../../assets/css3.svg'
import js from '../../assets/javascript.svg'
import reactIcon from '../../assets/react.svg'
import next from '../../assets/nextdotjs.svg'
import git from '../../assets/git.svg'

export default function TechStack() {
    return (
        <section>
            <h1 className="title-stack">Tech Stack</h1>

            <div className="techStack">

                <Cards 
                    icon={html5}
                    title='HTML5'
                    desc='Linguagem de marcação de hipertexto'
                />

                <Cards 
                    icon={css3}
                    title='CSS3'
                    desc='Folha de estilo em cascatas utilizada na estilização de componentes.'
                />

                <Cards 
                    icon={js}
                    title='JavaScript'
                    desc='Linguagem de programação JavaScript ES6 em diante'
                />

                <Cards 
                    icon={reactIcon}
                    title='React'
                    desc='Biblioteca JavaScript para desenvolvimento de interfaces'
                />

                <Cards 
                    icon={next}
                    title='Next JS'
                    desc='Framework React'
                />

                <Cards 
                    icon={git}
                    title='Git'
                    desc='Controle de versionamento de código'
                />
            </div>

        </section>
    )
}