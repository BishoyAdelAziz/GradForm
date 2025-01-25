import { useFormik } from "formik";
import "./signin.css";

export default function SigninForm() {
  //used Formik for form handling State/Submission/Error/
  // use YUP for validation
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      remember: false,
    },
    onSubmit: (values) => {
      console.log(values);
      // use Redux or Direct API call to handle the form submission
    },
  });

  return (
    <div className="SignIn-Page">
      <div className="Head-Content">
        <h1>Welcome Back!</h1>
        <p>Log in to continue</p>
      </div>
      <form className="Form-Container" onSubmit={formik.handleSubmit}>
        <label htmlFor="username">User Name</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="Form-Options">
          <div className="rememeber-me">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              onChange={formik.handleChange}
              checked={formik.values.remember}
            />
            <label htmlFor="remember">Remember Me</label>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button type="submit">Submit</button>
        <p className="nav-message">
          Don&#39;t have an account? <span>Sign Up</span>
        </p>
      </form>
    </div>
  );
}
