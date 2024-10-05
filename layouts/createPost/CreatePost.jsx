import "./createPost.scss";
import image from "../../imagens/aaa.jpg";
import camera from "../../imagens/icons/camera.png";
import video from "../../imagens/icons/video.png";
import event from "../../imagens/icons/event.png";
import send from "../../imagens/icons/send.png";
import icon from "../../imagens/loader.gif";

import { useContext, useState } from "react";
import { Context } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreatePost({name}) {

  const [data, setData]= useState({
    context: '',
    private: "1"
  });

  const [load, setLoad]= useState(false);
  const [response, setResponse]= useState({});
  const {user}= useContext(Context);

  //const navigate= useNavigate()

  const  hendleSubmit= async (e)=>{
    setLoad(true)
    //e.preventDefault()
    const allData= {
      id_user: user.id_user,
      private: parseInt(data.private),
      url_midia: "image_1.jpg",
      context: data.context
    }
    
    axios.post("http://localhost:3300/createpost", allData )
    .then((res) => {
      setResponse(res.data)
      setData({context: '', private: ''});
      setLoad(false)
        
      })
      .catch((err) => console.log(err))
    }
    
    const handleChange= (e)=>{
      setData({...data, [e.target.id]: e.target.value})
         
  }
 
  return (
    <section className='createPost_container'>
      <div className="top_section">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <form onSubmit={hendleSubmit} className="field">
          <textarea
          id="context"
          onChange={handleChange}
          value={data.context}
          placeholder={`Share what's on your mind, ${name}...`}
          ></textarea>
          <button type="submit" className={data.context.trim()===""?'disabled':""} >
            <img src={load? icon : send} alt="send icon" />
          </button>
        </form>
      </div>
      <div className="bottom_section">
        <button>
          <img src={camera} alt="" />
        </button>
        <button>
          <img src={video} alt="" />
        </button>
        <button>
          <img src={event} alt="" />
        </button>

        <select
          onChange={handleChange}
          id="private"
          value={ data.private }
          >
          <option value="1">Público</option>
          <option value="0">Apenas eu</option>
        </select>
      </div>
    </section>
  )
}

export default CreatePost