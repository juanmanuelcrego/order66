import React from 'react'

const Contact = () => (
    <section className='contact'>
        <h2>Contacto</h2>
        <p>¿Te gustaría contratar mis servicios? Podés contactarme por el formulario de contacto
            que verás debajo, o utilizar las redes sociales. Podés consultar acá lo referido a las
            formas de pago de los servicios que brindo. 
        </p>
        <form action="https://getform.io/f/c5768c19-ee19-4c46-8fec-f3af88ce6639" method="POST">
            <div>
            <label for='name'>Nombre y Apellido</label>
            <input type="text" name="name" />
            </div>
            <div>
            <label for='email'>e-mail</label>
            <input type="email" name="email" />
            </div>
            <div>
            <label for='message'>Mensaje</label>
            <input type="text" name="message" />
            </div>
            <button className='jc-btn' type="submit">Enviar</button>
        </form>
    </section>
)

export default Contact 