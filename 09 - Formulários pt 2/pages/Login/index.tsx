import { ChangeEvent, FormEvent, useState } from "react";

class InputObject{
    username: string = "";
    password: string = "";

    public InputObject(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}

const Login = () => {

    const [inputState, setInputState] = useState({
        username: "",
        password: ""
    } as InputObject);

    const setInput = (event: ChangeEvent) => {
        let currentState: InputObject = inputState;
        let propertieName: string = (event.target as HTMLInputElement).name;
        if(propertieName === "username" || propertieName === "password"){
            currentState[propertieName] = (event.target as HTMLInputElement).value;
        }
    };

    const showInputData = (event: FormEvent) =>{
        alert(`${inputState.username} ${inputState.password}`)
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={(event) => showInputData(event)}>
                <label>Usuário:</label>
                <input type="text" name="username" onChange={(event) => setInput(event)} />

                <label>Senha:</label>
                <input type="password" name="password" onChange={(event) => setInput(event)} />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;