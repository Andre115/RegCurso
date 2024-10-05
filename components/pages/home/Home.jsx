import "./home.scss"

import Post from "../../../layouts/post/Post";
import CreatePost from "../../../layouts/createPost/CreatePost"
import { Context } from "../../../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import TopProfile from "../../../layouts/topProfile/TopProfile";

import axios from "axios";

export default function Home(){

    const {user}= useContext(Context);
    const [nameUser, setNameUser]= useState('');
    const [posts, setPosts]= useState([]);
    const [users, setusers]= useState([]);

    useEffect(()=>{
        setNameUser(user.name.split(' ')[0]);

        //posts
        axios.get('http://localhost:3300/posts')
        .then((res) => setPosts(res.data))
        .catch((err)=>console.log(err))

        //Users
        axios.get('http://localhost:3300/users')
        .then((res) => setusers(res.data))
        .catch((err)=>console.log(err))

    },[users.length])

    const deletePost= (id_user, id_post)=>{
        axios.delete(`http://localhost:3300/deletepost/${id_user}/${id_post}`)
        .then((res) => {

            setPosts(res.data)
            setShowOption(!showOption)
        })
        .catch((err)=>console.log("EROOO: " +err));
    }

    //console.log(users)

    //name, image_profile, url_midia, time, privat, context, qnt_like,qnt_comment
    return(
        <div className="container_home">
            <h2>Activity Feed</h2>


        <CreatePost name={nameUser}/>
        
        {posts.length>0 && (
            posts.map((post, i)=>(     
                <Post
                    key={i}
                    name={post.name}
                    context={post.context}
                    privat={post.private}
                    time={post.created_at}
                    ids={{id_user: post.id_user, id_post: post.id_post}}
                    id_post={post.id_user}
                    id_user={post.id_user} 
                    deletePost={deletePost}  
                />
            ))
        )}
            
            <TopProfile
            users={users}
            />

            <div className="display home">
                <h2>My Home</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates consectetur eaque tenetur, commodi sed nesciunt, assumenda quibusdam, enim quo iste repudiandae. Iste incidunt facilis aperiam repellendus cum porro facere esse.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates consectetur eaque tenetur, commodi sed nesciunt, assumenda quibusdam, enim quo iste repudiandae. Iste incidunt facilis aperiam repellendus cum porro facere esse.
                </p>
            </div>

            <div className="display orientacao">
                <h3>Orietação</h3>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas perspiciatis quia neque deserunt molestias numquam maxime omnis recusandae voluptates. Non repellat minima quae totam eligendi iste iure sint error maiores!
                </p>
                <div className="links">
                    <a className="logout" href="/login">Logout</a>
                    <a href="/profile">Go to profle</a>
                    
                </div>
            </div>

            <div className="display cards">
                <div className="pictures">
                    <div className="card">
                        <div className="img"><img src="" alt="" /></div>
                        <div className="kwon_more">
                            <a href="#">More</a>
                            <a href="#">Like</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )

}