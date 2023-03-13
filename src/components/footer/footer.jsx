import './footer.scss';


export default function Footer({props}){
    return(
        <footer>
            <div>
                <img src={props.logoImgDark} alt='logo image'/>
            </div>
            <div className='socialsContainer'>
                <img src={props.fbImage} alt='social icon' />
                <img src={props.fbInsta} alt='social icon' />
                <img src={props.fbTwitter} alt='social icon' />
            </div>
        </footer>
    )
}