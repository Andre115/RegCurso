import "./profile.scss"
import seta from "../../../imagens/left_seta.png"
import img1 from "../../../imagens/DSC09920.jpg"
import img2 from "../../../imagens/aaa.jpg"
import calendary from "../../../imagens/calendar.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import Post from "../../../layouts/post/Post"
import PopUp_image from "../../../layouts/popup_image/PopUp_image"


export default function Profile(){

    const [active, setActive]= useState(true)
    const [shoPopup, setShoPopup]= useState(false)
    const [url, setUrl]= useState('')

    const handleStatus= (e)=>{

        if(e.target.value === "posts"){
            setActive(true)
        }else{
            setActive(false)
        }
        
    }

    const handleChange= ()=>{

        setShoPopup(false)
        
    }

    const showImage= (e)=>{
        setUrl(e.target.src)

       setShoPopup(true)
        
    }


    return(
        <section className="container_profile">
            {shoPopup&&
                <PopUp_image handleChange={handleChange} url={url}/>

            }
           <div className="top_area">
               <div className="top">
                <Link to={"/"} className="set">
                    <img src={seta} alt="" />
                </Link>
                <span>Home Page</span>
               </div>
               <div className="picture_area">
                <div className="cover">
                <img
                    onClick={showImage} src={img1} alt="" />
                </div>
                <div className="picture_setting">
                   <div className="picture">
                    <img
                    onClick={showImage} 
                    src={img2} alt="" />
                   </div>
                   <button>Profile settings</button>
                </div>
               </div>
               <div className="section_user">
                <h3>André Yamba</h3>
                <div className="ident">
                    <span className="calendary">
                        <img src={calendary} alt="" />
                    </span>
                    <span>@Jerry02</span>
                </div>
                <div className="follow_area">
                    <div className="following">
                        <p>55</p>
                        <h4>Seguindo</h4>
                    </div>
                    <div className="followers">
                        <p>195</p>
                        <h4>Seguidores</h4>
                    </div>
                </div>
               </div>
           </div>

           <div className="options">
            <ul>
                <li className={active? "active" : ''}>
                    <button
                        onClick={handleStatus}
                        value={'posts'}
                    >
                        Posts</button>
                </li>
                <li className={!active? "active" : ''}>
                 <button
                 onClick={handleStatus}
                 value={'others'}
                 >Others</button>
                </li>
            </ul>
           </div>

           {active ? (
           <div className="posts">
            
           </div>

           ):(
            
           <div className="others">
           <h2>Outros</h2>
           </div>
           )

           }


            <p>Esta é a minha pagina de PerfilOTER!!</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur labore est, odio dignissimos incidunt unde quo blanditiis inventore voluptatibus, dicta eligendi tempora voluptatem ad debitis consequatur sint, minima totam.
            </p>         
            
        </section>
    )

}