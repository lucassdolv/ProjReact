import { useState } from "react";
import "./form.css"
const Form = () => {

    const initilForm = {
        nome: "",
    }
    const [formState, setFormState] = useState(initilForm);

    const handleINput = (event) => {
        const target = event.currentTarget;

        const {value, name} = target;

        setFormState({...formState, [name]: value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome)

        setFormState({...initilForm});
    }

    return (
        <div className="containerForm">
            <div> 
                <h1 className="titleForm">Cadastro de Cliente</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" value={formState.nome} onChange={handleINput}/>
                    </div>
                    <div className="form-control">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
                </div>
        </div>
    )
}
export default Form;