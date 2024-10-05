import "./post.scss";
import more from "../../imagens/icons/more.png"
import liked_icon from "../../imagens/icons/heart_liked.png"
import unliked_icon from "../../imagens/icons/heart_unliked.png"
import down_sort from "../../imagens/icons/down_sort.png"
import public_icon from "../../imagens/icons/public.png"
import private_icon from "../../imagens/icons/private.png"
import comment_color from "../../imagens/icons/comment_green.png"
import send from "../../imagens/icons/send.png"
import Comment from "../comment/Comment";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import user_default from "../../imagens/icons/user.png"
import axios from "axios";
import { useContext } from "react";
import { Context } from "../../context/AuthContext";


function Post({name, image_profile, url_midia, time, privat, context, ids, qnt_like,qnt_comment, deletePost}) {

    const [liked, setLiked]= useState(false)
    const [showComments, setShowComments]= useState(false)
    const [showOption, setShowOption]= useState(false)
    const [response, setResponse]= useState({})
    
    const { user } = useContext(Context);
    const [context_comment, setContext_comment]= useState('')


    const handleLike= ()=>{
        setLiked(!liked)
    }

    const handleComment= ()=>{
        setShowComments((comm)=> !comm)
    }
    
    const sendComment= (e)=>{
        
        e.preventDefault()
        axios.post("http://localhost:3300/createcomment", {id_post: ids.id_post, id_user: user.id_user, context: context_comment})
        .then((res) => {
            setResponse(res.data)
            setContext_comment('');
        })
        .catch((err)=> console.error(err) )

    }

    const handleOption= ()=>{
        setShowOption(!showOption)

    }
    
    //console.log( {id_post: ids.id_post, id_user: user.id_user, context: context_comment})
    //console.log()

    const editPost= ()=>{
        console.log('Editeiiii')


    }


    const timeFormated= ()=>{
        return [time.split("T")[0], time.split("T")[1].split('.')[0]];
    }



  return (
    <section className='post_container'>
        <div className="creat_post">
            <div className="image">
             <img src={image_profile? image_profile: user_default} alt="" />
                
            </div>
            <div className="desc">
                <p className="name_post">
                    {name}
                </p>
                <div className="time">
                    <p>{timeFormated()[0]} {timeFormated()[1]}</p>
                    <span>
                        <img src={privat?public_icon : private_icon} alt="" />
                        <img src={ down_sort} alt="down sort" />
                    </span>
                </div>
            </div>

            {(user.id_user===ids.id_user)&&
            <div className="point">
                <button
                className="btn_point"
                onClick={handleOption}
                >
                    <img src={more} alt="more icon" />
                </button>

                {showOption&&
                <ul>
                    <li>
                        <button
                        onClick={editPost}
                        >Editar</button>
                    </li>
                    <li>
                        <form onSubmit={()=>deletePost(user.id_user, ids.id_post)}>
                            <button
                            type="submit"
                            >Excluir</button>
                        </form>
                    </li>
                </ul>
                }
                
            </div>
}
        </div>

        <div className="post_text">
            <p className="text">
                {context}
            </p>

        </div>
        <div className={url_midia? 'post_midia': 'hide'}>
            <img src={url_midia} alt="" />

        </div>

        <div className="coment_like">
            <p className="desc_liked">
            {qnt_like?`You and ${qnt_like} gostaram disso`: ''}
            </p>
            <span className="separed"></span>
            <p className="desc_commented">
                {qnt_comment?`${qnt_comment} comentário(os)`: 'Nenhum comentário'}
            </p>
        </div>

        <div className="icon_coment_like">
            <button
            onClick={handleLike}
            className="like_icon">
                <img src={liked? liked_icon : unliked_icon} alt="like icon" /> Like
            </button>
            <button 
                onClick={handleComment}
            className="comment_icon">
                <img src={comment_color} alt="comment icon" /> Comment
            </button>
        </div>

        {/* Campo de comentar */}
        <div className="form_comment">
            <form onSubmit={sendComment}>
                <textarea
                    placeholder="Comment..."
                    name="comment"
                    id="comment"
                    value={context_comment}
                    onChange={(e)=> setContext_comment(e.target.value)}
                ></textarea>
                <button
                 type="submit"
                 >
                    <img src={send} alt="send icon" />
                </button>
            </form>
        </div>

        {showComments &&
        <>
            <div className="comments">
                {
                    [1,2].map((v,i)=>(
                        <div key={i}>
                        <Comment
                        key={i}
                        id_user={ids}
                        />
                    </div>
                    ))
                }
            </div>

            <div className="links"> 
                <Link>See more</Link>
            </div>
        </>
}

            

    </section>
  )
}

export default Post;