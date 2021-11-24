import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { loginUser, signInWithGoogle } from "../action/authActions";

function Login(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;

    props.loginUser(email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your Email" />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <input type="submit" value="sign In" />
        <Link to="/register">Don't have an account? Sign up</Link>
      </form>

      <button onClick={props.signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}

const mapState = (state) => {
  return {
    auth: state.firebaseReducer.auth,
  };
};

const mapDispatch = {
  loginUser,
  signInWithGoogle,
};

export default connect(mapState, mapDispatch)(Login);
