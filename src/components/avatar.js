import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Avatar = () => (
    <StaticQuery
        query={
            graphql`
        query {
            profile: file(relativePath: {eq: "profile.jpg"}) {
                childImageSharp {
                  fixed(width: 120, height: 120, fit: COVER) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
        }
        `
        }
        render={data => (
            <section className='avatar'>
                <div className='line'></div>
                <Img className='pic' fixed={data.profile.childImageSharp.fixed} alt="Profile image" />
                <div className='line'></div>
            </section>
        )}
    />
)

export default Avatar
