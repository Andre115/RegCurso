import "./login.scss"

export default function Login(){

    return(
        <div className="container_login">
            <h2>Login</h2>

            <form action="">
                <div>
                    <label htmlFor="name">Seu nome...</label>
                    <input id="name" name="name" type="text" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <label htmlFor="password">Sua senha...</label>
                    <input id="password" name="password" type="password" placeholder="Digite sua senha..." />
                    
                </div>

                <div className="links">
                    <a href="register">Não tens conta?</a>
                    <a href="#">Esqueceu-se da senha?</a>
                </div>
                
                <div>
                   <button>Entrar</button>
                    
                </div>
            </form>

        </div>
    )

}