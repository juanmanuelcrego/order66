import React, { Profiler } from 'react'

const Avatar = () => (
    <section className='avatar'>
        <div className='line'></div>
        <img className='pic' src={`profile.jpg`} />
        <div className='line'></div>
    </section>
)

export default Avatar