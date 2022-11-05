import { useState } from "react"
function Logar(props){

    const [ usuario, setUsuario ] = useState('')

    const [ login, setLogin ] = useState('')

    

    return(
        <div>
            <h1>Login</h1>

            <div>

                <input type="text" id="usuario" value={usuario} 
                name="usuario" placeholder="Login" 
                onChange={e => setUsuario(e.target.value)} 
                autoFocus={true} />

                <div>
                    <h3>a quantidade de caracteres do usuário é: {usuario.length}{props.texto}</h3>
                
                </div>

                <input type="password" id="login" name="login" value={login} placeholder="Senha"
                    onChange={e => setLogin(e.target.value) } />
                
                <div>
                    <h3>a quantidade de caracteres da senha é: {login.length}{props.texto}</h3>
                </div>
                    

                <button type="button" onClick="" >Entrar</button>

            </div>

            
           

        </div>
    )
}
export default Logar