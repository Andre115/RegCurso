import "./comment.scss"
import image from "../../imagens/aaa.jpg";
import {Link} from "react-router-dom";


export default function Comment({ids}) {


  return (
    <section className='comment_container'>
        <div className="creater_comment">
            <div className="image">
             <img src={image} alt="" />
            </div>

            <div className="desc">
                <div className="name_section">
                    <p className="name_comment">
                        André Yamba
                    </p>
                    <div className="time">
                        <p>1 minutos ago</p>
                    </div>
                </div>

                <div className="comment">
                    <p>
                        Lorem ipsum dolor sit amet consectetu...
                    </p>
                </div>
                <div className="options_comment">
                <Link>Reply</Link>
                <Link>Like</Link>
                </div>
            </div>

            <div className="point">
                <p>...</p>
            </div>
        </div>

    </section>
  )
}
