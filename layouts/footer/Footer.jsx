import "./footer.scss"
import minhaImage from "../../imagens/aaa.jpg"

export default function Footer(){

    return(
        <div className="container">
            <h1>Ola Footer estou aqui</h1>

            <p>Esta é a minha pagina de FOOTER!!</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem aspernatur labore est, odio dignissimos incidunt unde quo blanditiis inventore voluptatibus, dicta eligendi tempora voluptatem ad debitis consequatur sint, minima totam.
            </p>

            <div className="imagens">

                <img src={minhaImage} alt="" />

            </div>

           
            
        </div>
    )

}