import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Dashboard = () => {



    return (
        <Fragment>
            <div className="dashboardContainer">
                <h1>Welcome to Keystone!!!</h1>
                {/* <input type="submit" value="Add User" className="addBtn"/> */}
                <Link to="/add">
                    <p>Add User</p>
                </Link>

            </div>
        </Fragment>
    )
};

export default Dashboard;