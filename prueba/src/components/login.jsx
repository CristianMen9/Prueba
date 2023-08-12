import { useState } from "react"

const LoginForm = () => {}
    const [values, setValues] = useState({
        email: "",
        password:""
    });


    const [error, setError] = useState(undefined);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        

        try{
            const response = await axios.post("/login", values);
            console.log(response.data);
        }catch(error){
            console.error(error);
            setError("Ha ocurrido un error, intente otra vez");
        }
    };
{/*
        return(
            <form  onSubmit={handleSubmit}>
            <><div className="field">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e) => setValues({ ...values, email: e.target.value })}
                        value={values.email}
                        type="text"
                        name="email" />
                </div><div className="field">
                        <label htmlFor="password">Contraseña</label>
                        <input onChange={(e) => setValues({ ...values, password: e.target.value })}
                            value={values.password}
                            type="password"
                            name="password" 
                            />
                            </div>

                            (error ? <p className="error">{error}</p> : <></>)
                            <button type="submit">Submit</button>
                        </form>
        );
};
      
*/}


