import React, { useState } from 'react'
import Avatar from './avatar'
import Skills from './skills'
import Contact from './contact'
import Footer from './footer'
import Portfolio from './portfolio'

const Article = () => {

    const [leerMas, setLeerMas] = useState(false)

    const textoCompleto =
        <div>
            <p>
                En la actualidad internet, las redes sociales, las páginas webs y las aplicaciones
                tanto webs como nativas nos han brindado no solo una socialización a nivel global nunca
                antes vista, sino también la oportunidad para generar negocios y emprendimientos
                mucho más fácil, rápido y eficiente que en décadas anteriores. Es por dicha razón que
                te ofrezo servicios que te brinden
                a vos la posibilidad de dar un paso más y darte a conocer al mundo, desde una idea pensada
                desde el punto de vista del usuario (ui/ux) hasta la codificación, desarrollo y
                producción de tu página web o tu aplicación en lenguajes de vanguardia en el mercado actual.
            </p>
            <p>
                Figma es -para mí- el mejor software para la realización de diseños de interfaces de usuario
                aunque dependiendo las necesidades y el contexto, utilizo también Adobe Xd.
            </p>
            <p>
                El desarrollo de páginas webs es algo que me apasiona, llevar a cabo un proyecto de un
                e-commerce con herramientas como Wordpress y Woocommerce te brinda la posibilidad de tener
                una web sólida y segura.
                Por otro lado si lo que buscas es velocidad para tu Portfolio o emprendimiento, te
                ofrezco páginas desarrolladas en GatsyJS o NextJS, también con la posibilidad de contar
                con una plataforma e-commerce sólida, eficaz y segura.
            </p>
            <p>
                Está comprobado que en la actualidad es más la gente que navega por internet con su
                smartphone que con una computadora, esto obliga a cualquier diseñador/desarrollador
                a contar con un responsive design, un diseño adaptable a cualquier pantalla. Para
                dicha tarea trabajo con CSS-SASS puro y herramientas como Bootstrap o Materialize.
            </p>
            <p>
                Las aplicaciones se hicieron cada vez más populares, y la clave está en la facilidad
                que tenemos para utilizarlas desde prácticamente cualquier dispositivo celular,
                tablet o equipo informático, por eso necesitamos contar con herramientas que nos
                den solidez, velocidad y eficiencia.
                Frameworks como Angular o librerías como React y VUE son las que utilizo
                para desarrollar aplicaciones modernas, funcionales y seguras.
            </p>
            <p>
                Por último y para finalizar esta presentación, me gustaría mencionar un plus que
                tengo a la hora de trabajar, y es el haber pasado por una universidad de Diseño, lo que
                me brindó el conocimiento necesario para dominar en su totalidad softwares como
                Illustrator, Photoshop, After Effects, Premiere o Adobe Xd, este plus me da una
                autonomía que no todos poseen a la hora de realizar los proyectos
                y no depender de diseños, animaciones y/o audiovisuales externos.
            </p>
            <p>
                Debajo podrás ver mis <a href="#skills">Skills. </a>
                Pero, también me gustaría que conocieras mi <a href="#portfolio">portfolio</a>,
                además podés seguirme en mis <a href="#social">redes sociales, </a> para conocer más
                sobre mi trabajo o <a href="#contac">contactarme </a> para contar con alguno de mis
                servicios.
            </p>
        </div>

    const linkMas = leerMas ? 'Leer menos <<' : 'Continuar leyendo >>'

    return (
        <article className='about-content'>
            <div className='about-text'>

                <h2>About</h2>

                <Avatar></Avatar>

                <p>
                    Hola! mi nombre es Juan Manuel Crego Risso, tengo 29 años y soy de Buenos Aires, Argentina.
                    Trabajo como front end developer y me gustaría contarte porqué elegí el Front End no solo
                    como profesión, sino también como medio por el que expreso mi pasión, el diseño.
                    Desde chico siempre me gustó el arte y la tecnología, por lo que conseguir llevar a
                    cabo mis ideas a través de una computadora era cuestión de tiempo, de aprendizaje y por
                    sobre todas las cosas, mucha dedicación, trabajo, horas de estudio, pruebas y errores.
                </p>
                {/* LEER MAS  */}
                {leerMas && textoCompleto}
                <a onClick={
                    () => {
                        setLeerMas(!leerMas)
                    }
                }>
                    <button className='jc-btn'>
                        {linkMas}
                    </button>
                </a>

                <Skills></Skills>


                <Portfolio></Portfolio>

                <Contact></Contact>

                <Footer></Footer>
            </div>
        </article>
    )
}

export default Article