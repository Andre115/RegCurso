import { Link } from "react-router-dom"
import "./navbar.scss"
export default function NavBar(){

    return(
        <nav className="container_navbar">
            <div className="logo">
                <Link to={"/"}>
                    Reg<span>Curso</span>
                </Link>
                
            </div>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/profile"}>Perfil</Link>
                </li>
                <li>
                    <Link to={"/contact"}>
                    Contactos
                    </Link>
                </li>
            </ul>

        </nav>
    )

}