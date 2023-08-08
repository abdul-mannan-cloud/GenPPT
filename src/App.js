import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/Dashboard";
import {Signin} from "./pages/Signin";
import {Signup} from "./pages/Signup";
import {AuthProvider} from "./components/AuthProvider";

function App() {

    return (
        <div style={{height: '100vh'}}>
            <BrowserRouter>
                <AuthProvider>
                    <header>
                    </header>
                    <main className="d-flex flex-column h-100 justify-content-center align-items-center">
                        <Routes>
                            <Route path='/' element={<Dashboard/>}/>
                            <Route path='/signin' element={<Signin/>}/>
                            <Route path='/signup' element={<Signup/>}/>
                        </Routes>
                    </main>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
