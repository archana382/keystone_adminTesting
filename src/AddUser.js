import React, { Fragment, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { clearErrors, addUser } from "./action/userAction";
import { ADD_USER_RESET } from "./constants/userConstants";


const AddUser = () => {

    const dispatch = useDispatch();
    const alert = useAlert();
    const navigate = useNavigate();
    
    const {error, success } = useSelector((state) => state.userDetails);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [department, setDepartment] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        if (success) {
          alert.success("User Added Successfully");
          navigate("/dashboard");
          dispatch({ type: ADD_USER_RESET });
        }
      }, [dispatch, alert, error, navigate, success]);

    const addUserSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("name", name);
        myForm.set("username", username);
        myForm.set("department", department);
        myForm.set("password", password);

        
        dispatch(addUser(myForm));
        };
    return (
        <Fragment>
            <div className="addUserContainer">
                <h1>Add User</h1>
                
                <form className="addForm" encType="multipart/form-data" onSubmit={addUserSubmitHandler} >
                    <div className="Name">
                        <input
                            type="name"
                            placeholder="Employee Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </div>
                    <div className="UserName">
                        <input
                            type="username"
                            placeholder="Userame"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            />
                    </div>
                    <div className="Department">
                        <input
                            type="department"
                            placeholder="Department"
                            required
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)}
                            />
                    </div>
                    <div className="Password">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                    </div>
                    <Button
                        id="addUserBtn"
                        type="submit"
                        // disabled={loading ? true : false}
                        >
                        Create
                    </Button>


                </form>
                
                <input type="submit" value="Add User" className="addBtn"/>
                

            </div>
        </Fragment>
    )
};

export default AddUser;