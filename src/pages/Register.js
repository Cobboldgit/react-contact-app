import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithGoogle,
} from "../action/authActions";

function Register(props) {
  if (!props.auth.isLoaded) return null;
  if (!props.auth.isEmpty) props.history.push("/");

  const handleSubmit = (event) => {
    event.preventDefault();

    let email = event.target.elements.email.value;
    let password = event.target.elements.password.value;

    props.createUser(email, password);
  };

  return (
    <div>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your Email" />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <input type="submit" value="sign In" />
        <Link to="/login">Already have an account? Sign in</Link>
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
  createUser: createUserWithEmailAndPassword,
  signInWithGoogle,
};

export default connect(mapState, mapDispatch)(Register);
