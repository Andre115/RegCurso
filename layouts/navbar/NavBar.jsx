import "./navbar.scss";
import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { Context } from "../../context/AuthContext";
import axios from "axios";
import perfil from "../../imagens/DSC09920.jpg";

//Icons
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { TfiEmail } from "react-icons/tfi";
import { CgProfile } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";


export default function NavBar(){
    const navigate= useNavigate();

    const {user, setAuthenticated}= useContext(Context);
    const [nameUser, setNameUser]= useState('');
    const [show, setShow]= useState(false);

    
    const handleLogOut= ()=>{
        localStorage.removeItem('dataUser');
        axios.defaults.authorization= undefined;
        setAuthenticated(false);
        navigate('/login');    
    }
    
    const handleSow= ()=>{
        setShow(!show);    
    }

    useEffect(()=>{
        setNameUser(user.name.split(' ')[0]);
        setShow(false);

    },[])
 

    return(
        <nav className="container_navbar">
            <div className="inclu_nav">

            <div className="logo">
                <Link to={"/"}>
                    Reg<span>Curso</span>
                </Link>
                
            </div>

            <div className="itens">
                <ul>
                    <li>
                        <Link to="/">
                            <IoHomeOutline />
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <CgProfile />
                            <span>Profile</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <TfiEmail />
                            <span>Message</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <HiOutlineBellAlert />
                            <span>Notication</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <GrProjects />
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                        <IoSettingsOutline  />
                            <span>Setting</span>
                        </Link>
                    </li>
                </ul>
            </div>

            

            <div className="person">
                <div className="photo">
                    <img src={perfil} alt="Photo perfil" />
                </div>
                {nameUser&&
                    <button
                    onClick={handleSow}
                    className="descript">
                        <div><span>Olá</span> <span className="name">{nameUser? nameUser: ''}</span></div>
                        <span className="drop"></span>
                    </button>
                }

                {show&&

                <div className="itensShow">
                    <div className="logout">
                        <button
                        className="out"
                        onClick={handleLogOut}
                        >Sair</button>
                    </div>
                    <span className="line"></span>
                    <ul>
                        <li>
                            <Link to="/">
                                
                                <span>Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/profile">
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Message</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Notification</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <span>Setting</span>
                            </Link>
                        </li>
                    </ul>
                </div>
             }        
                
            </div>

        </div>
        </nav>
    )

}