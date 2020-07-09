import React from 'react'
import Avatar from './avatar'

const Article = () => (
    <article className='about-content'>
        <div className='about-text'>
            <h2>About</h2>
            <Avatar></Avatar>
            <p>
                Hola! mi nombre es Juan Manuel Crego Risso, tengo 29 años y soy de Buenos Aires, Argentina.
                Trabajo como front end developer y 
                me gustaría que conocieras mi <a href="#portfolio">portfolio</a>, además podés seguirme en mis redes sociales
                y conocer más sobre mi trabajo!
            </p>
            <h2>
                Social
            </h2>
            
        </div>
        <div className='about-skills'>
        <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>SCSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Javascript (ES6)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>VUE</li>
                <li>GatsbyJS</li>
                <li>NextJS</li>
                <li>NodeJS</li>
                <li>Wordpress</li>
                <li>Adobe Illustrator</li>
                <li>Adobe Xd</li>
                <li>Adobe Photoshop</li>
                <li>Adobe After Effects</li>
                <li>Adobe Premiere</li>
                <li>FIGMA</li>
            </ul>
        </div>
    </article>
)

export default Article