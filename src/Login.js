import React, { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate, useLocation} from "react-router-dom";
import { clearErrors, login, register} from "./action/userAction";


const Login = () => {

    const dispatch = useDispatch();
    
    const navigate = useNavigate();
    const {error, loading, isAuthenticated} = useSelector((state) => state.user);

    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginUsername, loginPassword));
    };

    const location = useLocation();
    // const redirect = location.search ? location.search.split("=")[1] : "/dasboard";
    
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        if(isAuthenticated){
            navigate("/dashboard")
            // navigate(redirect);
        }
    }, [dispatch, error, alert, navigate, isAuthenticated]);
    return (
        <Fragment>
            <div className="LoginContainer">
                <form className="loginForm" onSubmit={loginSubmit} >
                    <div className="loginUsername">
                        <input
                            type="username"
                            placeholder="Username"
                            required
                            value={loginUsername} 
                            onChange={(e) => setLoginUsername(e.target.value)}
                        />
                    </div>

                    <div className="loginPassword">
                        <input
                            type="password"
                            placeholder="Password"
                            required    
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                        />
                    </div>
                    <input type="submit" value="Login" className="loginBtn"/>
                </form>

            </div>
        </Fragment>
    )
};

export default Login;