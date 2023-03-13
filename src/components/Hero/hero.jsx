import Navbar from "../navbar/navbar"
import './hero.scss';

export default function Hero({props}){
    return(
        <section className='heroSection'>
            <Navbar logo={props.navbar.logoImg} button={props.navbar.button}/>
            <div className="heroSectionHeading">
                <h1>{props.hero.heroHeading}</h1>
                <button>{props.hero.heroButton}</button>
            </div>
            <div className="heroImgContainer">
                <img class='heroSectionImg' src={props.hero.heroImg} alt='phone img' />
            </div>
        </section>
    )
}