import "./leftSide.scss";
import perfil from "../../../imagens/DSC09920.jpg"
import { Link } from "react-router-dom";

function LeftSide() {
  return (
    <section className='leftSide_container'>
       <div className="photo_section">
          <div className="top">
            <div className="image">
              <img src={perfil} alt="" />
            </div>
          </div>
          <div className="bottom">
              <h3 className="name">Andre Yamba</h3>
              <h6 className="carg">Web develloper</h6>
          </div>
       </div>

        <div className="line"></div>

       <div className="follow_section">
        <div className="following">
            <h4>Seguindo</h4>
            <p>55</p>
        </div>
        <div className="line"></div>
        <div className="followers">
            <h4>Seguidores</h4>
            <p>195</p>
        </div>
        <div className="line"></div>
        <div className="link">
            <Link to={"/profile"}>Ver Perfil</Link>
        </div>
       </div>

    </section>
  )
}

export default LeftSide