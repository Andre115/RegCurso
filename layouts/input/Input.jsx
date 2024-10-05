import "./input.scss"

function Input({label, id, name, type, placeholder, handleChange, alert}) {
  return (
    <div className="container_input">
        <label htmlFor={id}>{label}</label>
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder} 
            onChange={handleChange}
            style={{border: alert?'1px solid red':''}}
        />
    </div>
  )
}

export default Input