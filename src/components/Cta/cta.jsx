import './cta.scss';



export default function Cta({props}){
    return(
        <section className='cta container'>
            <div className='founderImgContainer'>
                <img className='founderImg' src={props.founderImg} alt='founder image' />
                <img className='bgPattern' src='./images/bg-pattern-3.svg' alt="background pattern" />
            </div>
            <div className='ctaDetails'>
                <h2>{props.ctaTitle}</h2>
                <p>{props.ctaDescription}</p>
                <button>{props.ctaButton}</button>
            </div>
        </section>
    )
}