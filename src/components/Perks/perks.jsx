import './perks.scss';


export default function Perks({props}){

    return(
        <div className="container perksContainer">
            {props.map((prop, index) => {
                return <div key={index} className="perk">
                    <div class="perkNumberContainer">
                        <p className='perkNumber'>{prop.number}</p>
                    </div>
                    <div className="perkDetails">
                        <p className='perkTitle'>{prop.title}</p>
                        <p className='perkDesc'>{prop.description}</p>
                    </div>
                </div>
            })}
        </div>
    )
}