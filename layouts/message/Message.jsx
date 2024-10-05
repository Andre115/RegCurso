import React, { useEffect, useState } from 'react'
import "./message.scss"

function Message({message, status, alternal}) {
    const [visible, setVisible]= useState(false)
    useEffect(()=>{

        if(!message){
            setVisible(false);
            return;
        }
        
        setVisible(true);
        let timer= setTimeout(() => {
            setVisible(false);
        }, 7000);

        return ()=> clearTimeout(timer)

    },[message, alternal])

  return (
    <>
    {visible&&
 
        <div className="container_message">
            <span className={!status?'sucess goout':'error goout'}>{message}</span>
        </div>
        }
    </>

    )
}

export default Message