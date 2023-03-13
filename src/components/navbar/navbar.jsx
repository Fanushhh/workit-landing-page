import './navbar.scss';


export default function Navbar({logo, button}){
    return(
        <nav className="container navbar">
            <div>
                <img src={logo} alt='logo img' />
            </div>
            <button className="applyBtn">{button}</button>
        </nav>
    )
}