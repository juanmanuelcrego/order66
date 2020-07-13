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
        // <h2>Portfolio</h2>
    <section className='portfolio'>
        <div className='portfolio-card'>
            <div className='card-header'>
                <h3>Custosol</h3>
            </div>
            <div className='card-description'>
                <p>
                Custosol es una web diseñada con Wordpress y Elementor, ¿Te gustaría visitar el sitio?
                </p>
            </div>
            <button className='jc-btn'>
                Visitar!
            </button>
            <div className='card-codes'>
            <Img className='skill-box' title='Wordpress' fixed={data.wordpress.childImageSharp.fixed} alt="wordpress Skill" />
            <Img className='skill-box' title='Elementor' fixed={data.elementor.childImageSharp.fixed} alt="elementor Skill" />
            </div>
        </div>
        <div className='screen'>
        <Img className='skill-box' fixed={data.custosol.childImageSharp.fixed} alt="elementor Skill" />
        </div>
    </section>
    )}
    />
)

export default Portfolio