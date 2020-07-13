import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Skills = () => (
  <StaticQuery
    query={
      graphql`
        query {
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
      <section className='skills'>
        <h2>
            Skills
        </h2>
        <div className='skills-div'>
          <Img className='skill-box' title='HTML' fixed={data.html.childImageSharp.fixed} alt="HTML Skill" />
          <Img className='skill-box' title='CSS' fixed={data.css.childImageSharp.fixed} alt="CSS Skill" />
          <Img className='skill-box' title='Bootstrap' fixed={data.bootstrap.childImageSharp.fixed} alt="Bootstrap Skill" />
          <Img className='skill-box' title='SASS' fixed={data.sass.childImageSharp.fixed} alt="SASS Skill" />
          <Img className='skill-box' title='Javascript' fixed={data.javascript.childImageSharp.fixed} alt="Javascript Skill" />
          <Img className='skill-box' title='Typescript' fixed={data.typescript.childImageSharp.fixed} alt="Typescript Skill" />
        
          <Img className='skill-box' title='React' fixed={data.react.childImageSharp.fixed} alt="React Skill" />
          <Img className='skill-box' title='Angular' fixed={data.angular.childImageSharp.fixed} alt="Angular Skill" />
          <Img className='skill-box' title='VUE' fixed={data.vue.childImageSharp.fixed} alt="VUE Skill" />
          <Img className='skill-box' title='GatsbyJS' fixed={data.gatsby.childImageSharp.fixed} alt="GatsbyJS Skill" />
          <Img className='skill-box' title='NextJS' fixed={data.next.childImageSharp.fixed} alt="NextJS Skill" />
          <Img className='skill-box' title='NodeJS' fixed={data.nodejs.childImageSharp.fixed} alt="NodeJS Skill" />

          <Img className='skill-box' title='Wordpress' fixed={data.wordpress.childImageSharp.fixed} alt="wordpress Skill" />
          <Img className='skill-box' title='Elementor' fixed={data.elementor.childImageSharp.fixed} alt="elementor Skill" />
          <Img className='skill-box' title='Woocommerce' fixed={data.woocommerce.childImageSharp.fixed} alt="woocommerce Skill" />

          <Img className='skill-box' title='Illustrator' fixed={data.illustrator.childImageSharp.fixed} alt="Illustrator Skill" />
          <Img className='skill-box' title='Photoshop' fixed={data.photoshop.childImageSharp.fixed} alt="Photoshop Skill" />
          <Img className='skill-box' title='Premiere' fixed={data.premiere.childImageSharp.fixed} alt="Premiere Skill" />
          <Img className='skill-box' title='After Effects' fixed={data.aftereffects.childImageSharp.fixed} alt="After Effects Skill" />
          <Img className='skill-box' title='Xd' fixed={data.xd.childImageSharp.fixed} alt="Xd Skill" />
          <Img className='skill-box' title='Figma' fixed={data.figma.childImageSharp.fixed} alt="Figma Skill" />

        </div>
      </section>
    )}
  />
)

export default Skills