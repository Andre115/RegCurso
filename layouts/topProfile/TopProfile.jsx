import { Link } from "react-router-dom"
import "./topProfile.scss"
import gmailIcon from "../../imagens/icons/gmail.png";
import next from "../../imagens/icons/next.png";
import prev from "../../imagens/icons/prev.png";
import photo_default from "../../imagens/icons/user.png"


function TopProfile({users}) {
  return (
    <section className='topProfile'>
        <div className="top">
        <h3>Top Profiles</h3>
        <span className="point">
            ...
        </span>
        </div>
        <div className="carrossel">
            <button className="prev">
                <img src={prev} alt="" />
            </button>
            <button className="next">
                <img src={next} alt="" />
            </button>
            <div className="all">

            {users.map((user, index)=>(
                
                <div className="user" key={index}>
                <div className="photo">
                    <img src={user.url_photo? user.url_photo : photo_default} alt="" />
                </div>
                <div className="desc_user">
                    <h4>{user.name}</h4>
                    <p>{user.carg}</p>
                </div>
                <div className="btns">
                    <button className="follow">Seguir</button>
                    <button className="email">
                        <img src={gmailIcon} alt="" />
                    </button>
                    <button className="hire">Ocultar</button>
                </div>
                <span className="line"></span>
                <div className="links">
                    <Link>View Profile</Link>
                </div>
            </div>
    ))}
    </div>
        </div>
    </section>
  )
}

export default TopProfile