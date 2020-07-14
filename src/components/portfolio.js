import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Portfolio = (props) => (
    <StaticQuery
        query={
            graphql`
        query {
            custosol: file(relativePath: {eq: "portfolio/custsol.png"}) {
                childImageSharp {
                  fixed(width: 400, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              power: file(relativePath: {eq: "portfolio/power.png"}) {
                childImageSharp {
                  fixed(width: 400, height: 455) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              dashboard: file(relativePath: {eq: "portfolio/dashboard.png"}) {
                childImageSharp {
                  fixed(width: 400, height: 600) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              teslapp: file(relativePath: {eq: "portfolio/teslapp.png"}) {
                childImageSharp {
                  fixed(width: 400, height: 500) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              hamburguer: file(relativePath: {eq: "portfolio/hamburguer.png"}) {
                childImageSharp {
                  fixed(width: 300, height: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              sorteo: file(relativePath: {eq: "portfolio/sorteo.png"}) {
                childImageSharp {
                  fixed(width: 350, height: 315) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              jackpot: file(relativePath: {eq: "portfolio/jackpot.png"}) {
                childImageSharp {
                  fixed(width: 400, height: 316) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              html: file(relativePath: {eq: "html.png"}) {
                childImageSharp {
                  fixed(width: 60, height: 60) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            css: file(relativePath: {eq: "css.png"}) {
                childImageSharp {
                  fixed(width: 60, height: 60) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            sass: file(relativePath: {eq: "sass.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            bootstrap: file(relativePath: {eq: "bootstrap.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            javascript: file(relativePath: {eq: "javascript.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            typescript: file(relativePath: {eq: "typescript.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            react: file(relativePath: {eq: "react.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            angular: file(relativePath: {eq: "angular.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            vue: file(relativePath: {eq: "vue.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            gatsby: file(relativePath: {eq: "gatsby.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            next: file(relativePath: {eq: "next.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            nodejs: file(relativePath: {eq: "nodejs.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            wordpress: file(relativePath: {eq: "wordpress.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            elementor: file(relativePath: {eq: "elementor.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            woocommerce: file(relativePath: {eq: "woocommerce.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            illustrator: file(relativePath: {eq: "illustrator.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            photoshop: file(relativePath: {eq: "photoshop.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            premiere: file(relativePath: {eq: "premiere.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            aftereffects: file(relativePath: {eq: "aftereffects.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            xd: file(relativePath: {eq: "xd.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            figma: file(relativePath: {eq: "figma.png"}) {
                childImageSharp {
                    fixed(width: 60, height: 60) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            }
        `
        }
        render={data => (
            <section className='portfolio' id='portfolio'>

                <h2 className='title-portfolio'>Portfolio</h2>
                <div className='about-text'>
                <p>
                    A continuación podrás ver algunos de los trabajos realizados como Freelance,
                    los diseños y desarrollos hechos en la empresa donde me encuentro trabajando
                    actualmente son privados y no puedo compartirlos en la web.
                </p>
                </div>
                {/* CUSTOSOL */}
                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Custosol</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Custosol es una web diseñada con Wordpress y Elementor, ¿Te gustaría visitar el sitio?
                            </p>
                        </div>
                        <a href='https://www.custosol.com' target='_blank'>
                            <button className='jc-btn'>
                                Visitar!
                        </button>
                        </a>
                        <div className='card-codes'>
                            <Img className='skill-box' title='Wordpress' fixed={data.wordpress.childImageSharp.fixed} alt="wordpress Skill" />
                            <Img className='skill-box' title='Elementor' fixed={data.elementor.childImageSharp.fixed} alt="elementor Skill" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.custosol.childImageSharp.fixed} alt="Custosol - Portfolio" />
                    </div>
                </div>

                {/* MEGA MILLON  */}

                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Mega Millon</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Mega Millon es el prototipo de un home para sorteos del tipo "Power Ball"
                                por cuestiones legales no puedo compartir el código pero si un demo.
                            </p>
                            <p>
                                Fue diseñado en primera instancia en FIGMA, posteriormente desarrollado en
                                ReactJS y maquetado en SASS
                            </p>
                        </div>
                        <a href='https://juanmanuelcrego.github.io/power/' target='_blank'>
                        <button className='jc-btn'>
                            Demo
                        </button>
                        </a>
                        <div className='card-codes'>
                            <Img className='skill-box' title='Figma' fixed={data.figma.childImageSharp.fixed} alt="Figma" />
                            <Img className='skill-box' title='ReactJS' fixed={data.react.childImageSharp.fixed} alt="ReactJS" />
                            <Img className='skill-box' title='SASS' fixed={data.sass.childImageSharp.fixed} alt="SASS" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.power.childImageSharp.fixed} alt="Mega Millon - Portfolio" />
                    </div>
                </div>

                {/* MEGA MILLON DASHBOARD */}

                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Dashboard</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Para este proyecto también del mismo cliente del Mega Millon, utilicé en primera instancia
                                FIGMA para el diseño, Angular para el desarrollo, y SASS para el maquetado
                                para crear un dashboard con datos que posteriormente serían consultados a través
                                de NodeJS.
                            </p>
                            <p>
                                Por cuestiones legales, no puedo compartir los datos del dashboard, por lo que
                                en el demo solo verán el Front sin datos.
                            </p>
                            <p>
                                User: admin | Password: admin
                            </p>
                        </div>
                        <a href='https://juanmanuelcrego.github.io/dashboard/' target='_blank'>
                        <button className='jc-btn'>
                            Demo
                        </button>
                        </a>
                        <div className='card-codes'>
                            <Img className='skill-box' title='Figma' fixed={data.figma.childImageSharp.fixed} alt="Figma" />
                            <Img className='skill-box' title='Angular' fixed={data.angular.childImageSharp.fixed} alt="Angular" />
                            <Img className='skill-box' title='SASS' fixed={data.sass.childImageSharp.fixed} alt="SASS" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.dashboard.childImageSharp.fixed} alt="Dashboard - Portfolio" />
                    </div>
                </div>

                {/* TESLAPP */}

                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Teslapp</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Teslapp es una aplicación para el monitoreo de baterías y corriente, se realizó
                                el diseño en FIGMA y posteriormente se desarrolló en Angular y se maquetó en SASS.
                            </p>
                            <p>
                                Los datos se trabajaron en NodeJS aunque en este demo solo verán los datos en el front.
                            </p>
                            <p>
                                Para entrar deberán hacer un registro muy básico.
                            </p>
                        </div>
                        <a href='https://juanmanuelcrego.github.io/teslappv1/' target='_blank'>
                        <button className='jc-btn'>
                            Demo
                        </button>
                        </a>
                        <div className='card-codes'>
                            <Img className='skill-box' title='Figma' fixed={data.figma.childImageSharp.fixed} alt="Figma" />
                            <Img className='skill-box' title='Angular' fixed={data.angular.childImageSharp.fixed} alt="Angular" />
                            <Img className='skill-box' title='SASS' fixed={data.sass.childImageSharp.fixed} alt="SASS" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.teslapp.childImageSharp.fixed} alt="Teslapp - Portfolio" />
                    </div>
                </div>

                {/* Hamburger */}

                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Hamburger</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Hamburger es un diseño que aun no está desarrollado, se trabajó con FIGMA para
                                el diseño de la interfaz del home.
                            </p>
                        </div>
                        <button className='jc-btn disabled' disabled>
                            Demo
                        </button>
                        <div className='card-codes'>
                            <Img className='skill-box' title='Figma' fixed={data.figma.childImageSharp.fixed} alt="Figma" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.hamburguer.childImageSharp.fixed} alt="Hamburger - Portfolio" />
                    </div>
                </div>

                {/* Sorteo */}

                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Animation</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Esta es una animación realizada con CSS y Angular, se utilizó como prototipo
                                pero finalmente no quedó en producción.
                            </p>
                        </div>
                        <a href='https://www.instagram.com/jcrego.css/' target='_blank'>
                        <button className='jc-btn' disabled>
                            Ver animacion
                        </button>
                        </a>
                        <div className='card-codes'>
                            <Img className='skill-box' title='CSS' fixed={data.css.childImageSharp.fixed} alt="CSS" />
                            <Img className='skill-box' title='Angular' fixed={data.angular.childImageSharp.fixed} alt="Angular" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.sorteo.childImageSharp.fixed} alt="Sorteo - Portfolio" />
                    </div>
                </div>

                {/* Jackpot */}

                <div className='card-div'>
                    <div className='portfolio-card'>
                        <div className='card-header'>
                            <h3>Animation</h3>
                        </div>
                        <div className='card-description'>
                            <p>
                                Esta es una animación realizada solo con CSS, se utilizó como prototipo
                                pero finalmente no quedó en producción.
                            </p>
                        </div>
                        <a href='https://www.instagram.com/jcrego.css/' target='_blank'>
                        <button className='jc-btn' disabled>
                            Ver animacion
                        </button>
                        </a>
                        <div className='card-codes'>
                            <Img className='skill-box' title='CSS' fixed={data.css.childImageSharp.fixed} alt="CSS" />
                        </div>
                    </div>
                    <div className='screen'>
                        <Img className='skill-box' fixed={data.jackpot.childImageSharp.fixed} alt="Jackpot - Portfolio" />
                    </div>
                </div>


            </section>
        )}
    />
)

export default Portfolio