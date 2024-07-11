import "./home.scss"

export default function Home(){

    return(
        <div className="container_home">
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
                    <a href="#">Go to profle</a>
                    
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