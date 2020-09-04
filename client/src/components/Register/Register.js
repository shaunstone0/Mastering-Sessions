import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/session";
const mapStateToProps = ({ errors }) => ({
  errors,
});
const mapDispatchToProps = (dispatch) => ({
  register: (user) => dispatch(register(user)),
});
const Signup = ({ errors, register }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };
    register(user);
  };
  return (
    <>
      <h1>Signup</h1>
      <p>{errors}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Firstname:
          <input type="text" name="firstname" />
        </label>
        <label>
          Lastname:
          <input type="text" name="lastname" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login</Link>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
