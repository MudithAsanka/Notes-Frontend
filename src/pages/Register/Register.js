import FormInput from "../../components/FormInput/FormInput";
import './Register.css';
import {useRef, useState} from "react";

function Register(){

    const [values, setValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        dateOfBirth:"",
        mobile:"",
        password:"",
        confirmPassword:""
    });
    const [accountType, setAccountType] = useState("");

    const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder: "First Name",
            label: "First Name",
            errorMessage: "First name should be more than 3-16 characters and shouldn't include any special characters",
            pattern:"^[A-Za-z]{3,16}$"
        },
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder: "Last Name",
            label: "Last Name",
            errorMessage: "Last name should be more than 3 characters and shouldn't include any special characters",
            pattern:"^[A-Za-z]{3,16}$"
        },
        {
            id:3,
            name:"email",
            type:"email",
            placeholder: "Email",
            label: "Email",
            errorMessage: "Enter valid email address",
            required: true,

        },
        {
            id:4,
            name:"dateOfBirth",
            type:"date",
            placeholder: "Date of Birth",
            label: "Date of Birth",
            errorMessage: ""
        },
        {
            id:5,
            name:"mobile",
            type:"text",
            placeholder: "Mobile No",
            label: "Mobile No",
            errorMessage: "Enter valid mobile number",
            pattern:"^[0-9]+$"
        },
        {
            id:6,
            name:"password",
            type:"password",
            placeholder: "Password",
            label: "Password",
            errorMessage: "Password should be 8-20 characters, 1 letter, 1 number and 1 special character",
            required: true,
            pattern:`^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`
        },
        {
            id:7,
            name:"confirmPassword",
            type:"password",
            placeholder: "Confirm Password",
            label: "Confirm Password",
            errorMessage: "Password don't match",
            required: true,
            pattern:values.password
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const onChange = (e)=> {
        setValues({...values, [e.target.name]: e.target.value})
    }

    console.log(values);

    return (
        <div>
            <div className="register">
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>

                    {inputs.map((input) => (
                        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                    ))}

                    <div className="col-12">
                        <label>Account Type</label>
                        <select className="custom-select my-1 mr-sm-2 col-md-12 form-select border-dark" value={accountType} onChange={e=>setAccountType(e.target.value)}>
                            <option value="STUDENT">Student</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>
                    <button className="btn btn-primary" type="submit">Register</button>

                </form>
            </div>
        </div>
    );
}

export default Register;