import { useState } from "react"
import "./register.scss";
import Input from "../../../layouts/input/Input";
import axios from "axios"
import Message from "../../../layouts/message/Message";
import validForm from "../../../auth/validForm";


export default function Register(){

    const [data, setData]= useState(
        {name: '', email: '', password: ''}
    );
    
    const [alertError, setAlertError]= useState(false)
    const [response, setResponse]= useState({})
    const [alternal, setAlternal]= useState(true)

    const handleChange= (e)=>{
        setData({...data, [e.target.name]: e.target.value})
           
    }

    
    const handleSubmit= (e)=>{
        e.preventDefault()
        if(validForm(data)){
            alert('Campos obrigatórios!')
        }else{
            axios.post("http://localhost:3300/create", {
                name: data.name,
                email: data.email,
                password: data.password
            })
            .then((res) => {
                setResponse(res.data)
                setAlternal(!alternal)
            })
            .catch(error =>console.log(error))
                        
        }
    }
    

    return(
        <div className="container_register">
            <h2>Create account</h2>

            <form onSubmit={handleSubmit}>
                <Input
                    label={'Seu nome'}
                    id={'name'}
                    name={'name'}
                    type={'text'}
                    placeholder={'Digite seu nome...'}
                    handleChange={handleChange}
                    alert={alertError}
                    />
                <Input
                    label={'Seu Seu E-mail'}
                    id={'email'}
                    name={'email'}
                    type={'email'}
                    placeholder={'Digite seu email...'}
                    handleChange={handleChange}
                    alert={alertError}
                    />

                <Input
                    label={'Sua senha'}
                    id={'password'}
                    name={'password'}
                    type={'password'}
                    placeholder={'Digite sua senha...'}
                    handleChange={handleChange}
                    alert={alertError}
                />

                <Message
                    message={response.msg}
                    status={response.error}
                    alternal={alternal}
                    setAlternal={setAlternal}
                
                />

                <div className="links">
                    <a href="login">Já tens uma conta?</a>
                </div>
                <div>
                   <button type="submit">Cadastrar</button>   
                </div>
            </form>

        </div>
    )

}