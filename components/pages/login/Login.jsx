import { useEffect, useState } from "react";
import Input from "../../../layouts/input/Input"
import "./login.scss"
import validForm from "../../../auth/validForm";
import Message from "../../../layouts/message/Message";
import { useNavigate } from "react-router-dom";
import authService from '../../../services/authService';

//context
import React, { useContext } from 'react';
import { Context } from "../../../context/AuthContext";


export default function Login(){

    const { setAuthenticated }= useContext(Context)

    const navigate= useNavigate();

    const [formData, setFormData]= useState({email:'', password:'123456'})
    const [data, setData]= useState({});
    const [alternal, setAlternal]= useState(true);

    const handleChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit= async (e)=>{
        e.preventDefault();
        
        if(validForm(formData)){
            alert("Campos obrigatórios!")
        }else{

           const user= await authService.login(formData);
           
           setAlternal(!alternal)

            if(user.error){

                setData(user) 

            }else{

                const myObj = { id_user: user.id_user, token: user.token };
                localStorage.setItem("dataUser", JSON.stringify(myObj));
                setData(user) 
                await setAuthenticated(true);

                navigate('/')
                
            }
        } 
        
        }

    return(
        <div className="container_login">
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <Input
                    label={'Seu E-mail'}
                    id={'email'}
                    name={'email'}
                    type={'email'}
                    placeholder={'Digite seu email...'}
                    handleChange={handleChange}
                />

                <Input
                    label={'Sua senha'}
                    id={'password'}
                    name={'password'}
                    type={'password'}
                    placeholder={'Digite sua senha...'}
                    handleChange={handleChange}
                />

                <Message
                    message={data.msg}
                    status={data.error}
                    alternal={alternal}
                    setAlternal={setAlternal}
                />

                <div className="links">
                    <a href="register">Não tens conta?</a>
                    <a href="#">Esqueceu-se da senha?</a>
                </div>
                
                <div>
                   <button type='submit'>Entrar</button>
                    
                </div>
            </form>

        </div>
    )

}