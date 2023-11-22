import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomInput from "../FormComponents/CustomInput";
import FormBtn from '../FormComponents/FormButton';
import { Form } from "../FormComponents/AuthForm.styled";
import { registerUser } from '../../store/auth/authOperations';

const RegisterForm = () => {
  const [user, setUser] = useState({ email: "", password: "", name: "" });
  const [errors, setErrors] = useState({ email: "", password: "", name: "" });
  const dispatch = useDispatch();

  const handleChange = e => {
      const { id, value } = e.currentTarget;
      setUser(prevUser => ({
      ...prevUser,
      [id]: value,
      }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password || !user.name) {
      setErrors({
        name: !user.name ? "Name is required" : "",
        email: !user.email ? "Email is required" : "",
        password: !user.password ? "Password is required" : "",
      });
    } else {
      dispatch(registerUser(user))
      setUser({ email: "", password: "", name: "" });
    }
  };
    
    return <Form autoComplete="off" onSubmit={handleSubmit}>
      <h1>Register</h1>
          <CustomInput
            label="Name"
            id="name"
            value={user.name}
            handleChange={handleChange}
            error={errors.name}
            type="name"
            required={true}
          />
          <CustomInput
            label="Email"
            id="email"
            value={user.email}
            handleChange={handleChange}
            error={errors.email}
            type="email"
            required={true}
          />
          <CustomInput
            label="Password"
            id="password"
            value={user.password}
            handleChange={handleChange}
            error={errors.password}
            type="password"
            required={true}
          />

          <FormBtn name="Register" type="submit" />
          <Link to="/login">Already have an account?</Link>
        </Form>
}
export default RegisterForm;