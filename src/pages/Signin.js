import './styles.css'
import {signInWithEmailAndPassword, signInWithPopup} from "@firebase/auth";
import {auth, googleAuthProvider} from "../services/firebase";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

export const Signin = () => {

    const navigate = useNavigate();

    const [inputs,setInputs] = useState({
        name:'',
        password:''
    })

    const handleInputChange = (event) => {
        setInputs(values=>({...values,[event.target.name]:event.target.value}))
    }

    const signInWithGoogle = async () => {
        await signInWithPopup(auth, googleAuthProvider).catch(
            err => console.log(err)
        )
    }

    const signInWithCredentials = () => {
        signInWithEmailAndPassword(auth, inputs.email, inputs.password)
        .then((userCredential) => {
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error)
        });
    }

    return (
        <>
            <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"80vh"}}>
                <div className='d-flex flex-column border p-4 gap-2 rounded bg-white shadow'>
                    <h1>Signin</h1>
                    <form className='d-flex flex-column justify-content-center align-items-center gap-2 signin-form '>
                        <div className="form-outline custom-form-input">
                            <label className="form-label" htmlFor="email-input" >Email</label>
                            <input onChange={handleInputChange} name="email" type="text" id="email-input" className="form-control form-control-lg "/>
                        </div>
                        <div className="form-outline custom-form-input">
                            <label className="form-label" htmlFor="pass-input">Password</label>
                            <input onChange={handleInputChange} name="password" type="password" id="pass-input" className="form-control form-control-lg"/>
                        </div>
                        <p className="align-self-start">Don't have an account <Link to="/signup" className="text-primary">Sign up</Link></p>
                        <button
                            onClick={signInWithGoogle}
                            type='button' className='w-100 btn btn-lg btn-light mt-2 d-flex gap-2 justify-content-center align-items-centerg'>
                            <img className="google-img" src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" width="30" alt="google logo png suite everything you need know about google newest"  />
                                Sign in with Google
                            </button>
                        <button type='button' onClick={signInWithCredentials} className='w-100 btn btn-lg btn-primary mt-2'>Sign in</button>
                    </form>
                </div>
            </div>
        </>
    )
}
