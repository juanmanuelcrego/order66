import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Social = () => (
  <StaticQuery
    query={
      graphql`
        query {
            facebooklogo: file(relativePath: {eq: "facebooklogo.png"}) {
                childImageSharp {
                  fixed(width: 30, height: 30) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            instalogo: file(relativePath: {eq: "instagram.png"}) {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            twlogo: file(relativePath: {eq: "twitter.png"}) {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            linkedinlogo: file(relativePath: {eq: "linkedin.png"}) {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }      
            githublogo: file(relativePath: {eq: "github.png"}) {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            codepenlogo: file(relativePath: {eq: "codepen.png"}) {
              childImageSharp {
                fixed(width: 30, height: 30) {
                  ...GatsbyImageSharpFixed
                }
              }
            }       
        }
        `
    }
    render={data => (
      <section className='social' id='social'>
        <a href='https://www.facebook.com/juanmcrego' target='_blank'>
          <Img className='social-card' fixed={data.facebooklogo.childImageSharp.fixed} alt="Facebook profile" />
        </a>
        <a href='https://www.instagram.com/jcrego.css' target='_blank'>
          <Img className='social-card' fixed={data.instalogo.childImageSharp.fixed} alt="Instagram profile" />
        </a>
        <a href='https://www.twitter.com/jcrego_css' target='_blank'>
          <Img className='social-card' fixed={data.twlogo.childImageSharp.fixed} alt="Twitter profile" />
        </a>
        <a href='https://www.linkedin.com/in/juanmanuelcrego/' target='_blank'>
          <Img className='social-card' fixed={data.linkedinlogo.childImageSharp.fixed} alt="Linkedin profile" />
        </a>
        <a href='https://www.github.com/juanmanuelcrego/' target='_blank'>
          <Img className='social-card' fixed={data.githublogo.childImageSharp.fixed} alt="Github profile" />
        </a>
        <a href='https://codepen.io/juanmanuelcrego' target='_blank'>
          <Img className='social-card' fixed={data.codepenlogo.childImageSharp.fixed} alt="codepen profile" />
        </a>
      </section>
    )}
  />
)

export default Social