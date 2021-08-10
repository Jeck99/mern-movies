import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { registerUser } from "../redux/actions/authActions";
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
const Register = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState({});
    useEffect(()=> {
        if (props.auth.isAuthenticated) {
          props.history.push("/home");
        }
      },
      []
    )
    const onNameChange = e => {
        setName(e.target.value);
    };
    const onEmailChange = e => {
        setEmail(e.target.value);
    };
    const onPasswordChange = e => {
        setPassword(e.target.value);
    };
    const onPassword2Change = e => {
        setPassword2(e.target.value);
    };
    const onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            password: password,
            password2: password2
        };
        props.registerUser(newUser,props.history);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col s8 offset-s2">
                    <Link to="/" className="btn-flat waves-effect"> Back to home</Link>
                    <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                        <h4><b>Register</b> below</h4>
                        <p className="grey-text text-darken-1">
                            Already have an account? <Link to="/">Log in</Link>
                        </p>
                    </div>
                    <form noValidate onSubmit={onSubmit}>
                        <div className="input-field col s12">
                            <input
                                onChange={onNameChange}
                                value={name}
                                error={errors.name}
                                id="name"
                                type="text"
                            />
                            <label htmlFor="name">Name</label>
                        </div>
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
                        <div className="input-field col s12">
                            <input
                                onChange={onPassword2Change}
                                value={password2}
                                error={errors.password2}
                                id="password2"
                                type="password"
                            />
                            <label htmlFor="password2">Confirm Password</label>
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
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                            >
                                Sign up
                </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default withRouter(connect( mapStateToProps,{ registerUser })(Register));