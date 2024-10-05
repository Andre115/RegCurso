import "./popUp_image.scss"

function PopUp_image({url, handleChange}) {
  return (
    <section className='popUp_image_container'>
        <div className="image">
            <img src={url} alt="" />
        </div>
        <div
            className="close"
            onClick={handleChange}
            >
            <span className="top"></span>
            <span className="botton"></span>
        </div>

    </section>
  )
}

export default PopUp_image;