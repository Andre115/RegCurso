import "./register.scss"

export default function Register(){

    return(
        <div className="container_register">
            <h2>Create account</h2>

            <form action="">
                <div>
                    <label htmlFor="name">Seu nome...</label>
                    <input id="name" name="name" type="text" placeholder="Digite seu nome..." />
                </div>
                <div>
                    <label htmlFor="email">Seu email...</label>
                    <input id="email" name="email" type="email" placeholder="Digite seu email..." />
                </div>
                <div>
                    <label htmlFor="password">Sua senha...</label>
                    <input id="password" name="password" type="password" placeholder="Digite sua senha..." />
                    
                </div>
                <div>
                    <a href="login">Já tens uma conta?</a>
                </div>
                <div>
                   <button>Cadastrar</button>
                    
                </div>
            </form>

        </div>
    )

}