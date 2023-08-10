import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Signin} from "./pages/Signin";
import {Signup} from "./pages/Signup";
import {AuthProvider} from "./components/AuthProvider";
import {Header, Home} from "./pages/Home";
import {Converter} from "./pages/Converter";

function App() {

    return (
        <div style={{height: '100vh'}}>
            <BrowserRouter>
                <AuthProvider>
                    <Header/>
                    {/*<main className="d-flex flex-column h-100 justify-content-center align-items-center">*/}
                    <main>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/signin' element={<Signin/>}/>
                            <Route path='/signup' element={<Signup/>}/>
                            <Route path='/converter' element={<Converter/>}/>
                        </Routes>
                    </main>
                </AuthProvider>
            </BrowserRouter>
            <footer style={{position:"relative",bottom:0,width:"100vw"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>Copyright © 2022 GemPPt Co., Ltd. All Rights Reserved.
                                </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
