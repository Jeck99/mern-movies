import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions/authActions";
import { withRouter } from 'react-router';

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.history.push("/home");
        }
    })
    const onEmailChange = e => {
        setEmail(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        props.loginUser(userData, props.history);
    };
    return (
        <div className="container">
            <div style={{ marginTop: "4rem" }} className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect">
                        Back to home
                        </Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4><b>Login</b> below</h4>
                        <p className="grey-text text-darken-1">
                            Don't have an account?
                            <Link to="/register">Register</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onEmailChange}
                                value={email}
                                error={errors.email}
                                id="email"
                                type="email"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input
                                onChange={onPasswordChange}
                                value={password}
                                error={errors.password}
                                id="password"
                                type="password"
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                            <button
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                type="submit"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default withRouter(connect(mapStateToProps, { loginUser })(Login));