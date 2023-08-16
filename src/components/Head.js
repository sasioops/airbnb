import  '../App.css';
import grid from '../images/photo-grid.png'

export default function Head(){
    return(

        <section className='hero'>
            <img className='hero-photo'  src = {grid}  /> 
            <h1 className='hero--h1' > Online Experiences</h1>
            <p className='hero-para'>
             Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
            </p>
        </section>

    )
}