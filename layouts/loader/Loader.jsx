import "./loader.scss"
import loader_icon from "../../imagens/loader.gif"

function Loader() {
  return (
    <section className='loader_container'>
        <div className="global">
            <img src={loader_icon} alt="" />
        </div>
    </section>
  )
}

export default Loader