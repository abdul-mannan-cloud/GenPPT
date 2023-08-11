import {useState} from "react";
import {createUserWithEmailAndPassword} from "@firebase/auth";
import {auth} from "../services/firebase";
import {Link, useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export const Signup = () => {

    const navigate = useNavigate()

    const [inputs, setInputs] = useState({
        name: '',
        password: ''
    })

    const handleInputChange = (event) => {
        setInputs(values => ({...values, [event.target.name]: event.target.value}))
    }

    function mapAuthCodeToMessage(authCode) {
        switch (authCode) {
            case "auth/weak-password":
                return "Password provided is less than 6 characters";

            case "auth/email-already-in-use":
                return "Email provided is already in use";

            default:
                return "Some Error is Occured Please Try Again";
        }
    }

    const signUpWithCredentials = () => {
        createUserWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then((userCredential) => {
                toast.success("Signed Up Successfully")
                navigate('/signin')
            })
            .catch((error) => {
                const message = mapAuthCodeToMessage(error.code)
                toast.error(message)
            });
    }

    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
                <div className='d-flex flex-column border p-4 gap-2 rounded bg-white shadow'>
                    <h1>Signup</h1>
                    <form className='d-flex flex-column justify-content-center align-items-center gap-2 signin-form '>
                        <div className="form-outline custom-form-input">
                            <label className="form-label" htmlFor="email-input">Email</label>
                            <input onChange={handleInputChange} name="email" type="text" id="email-input"
                                   className="form-control form-control-lg "/>
                        </div>
                        <div className="form-outline custom-form-input">
                            <label className="form-label" htmlFor="pass-input">Password</label>
                            <input onChange={handleInputChange} name="password" type="password" id="pass-input"
                                   className="form-control form-control-lg"/>
                        </div>
                        <p className="align-self-start">Already have an account <Link to="/signin"
                                                                                      className="text-primary">Sign
                            in</Link></p>
                        <button type='button' onClick={signUpWithCredentials}
                                className='w-100 btn btn-lg btn-primary mt-2'>Sign up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
