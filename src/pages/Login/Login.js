import './Login.css';
import {useState} from "react";
import FormInput from "../../components/FormInput/FormInput";

function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <div className="login-form">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 justify-content-center">
                            <form>
                                <h1>Login</h1>
                                <br/><br/>
                                <div className="row">
                                    <label>Email</label>
                                    <FormInput type="email" placeholder="Email" value={email} onChange={(e)=> {setEmail(e.target.value)}} />
                                    <label>Email</label>
                                    <FormInput type="password" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}} />
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>
                                <br/><br/>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;