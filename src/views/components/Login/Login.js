import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import './Login.css';
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            submitStatus: false,
          };
    }

    componentDidMount() {
         if (this.props.auth.isAuthenticated) {
            this.props.history.push("/dashboard");
         }
      }
    
      componentWillReceiveProps(nextProps) {
        console.log('next props', nextProps)
        if (nextProps.auth.isAuthenticated === true) {
          this.props.history.push("/dashboard");
         }
    
        if (nextProps.apiRes) {
          if (nextProps.apiRes.status === 200) {
            //
          } else {
            toast.error(nextProps.apiRes.errorMessage, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
    
            this.setState({ submitStatus: false });
          }
        }
      }
    
      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        //console.log('target value is',e.target.value)
      };
    
      onSubmit = (e) => {
        this.setState({ submitStatus: true });
    
        e.preventDefault();
        const userData = {
          email: this.state.email,
          password: this.state.password,
        };
        this.props.loginUser(userData);
        console.log('submit value is',userData)
      };


    render() {
        const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
        const { email, password, submitStatus } = this.state;

        return (
                <div className="auth-wrapper" style={{ backgroundImage: `url(${toAbsoluteUrl("./assets/media/bg/bg-3.jpg")})`, }}>
                    <div class="container">
                        <div class="login-form-block">
                            <Link to="/" className="login-brand">
                                <img alt="Logo" src="./assets/logo/logo.png" />
                            </Link>

                            <div className="auth-form">
                                <div className="auth-head">
                                    <h3> Sign In Admin </h3>
                                    <p> Enter your details to login to your account:  </p>
                                </div>

                                <div className="auth-body">
                                    <form class="form">
                                        <div class="form-group">
                                            <input class="form-control" type="text" placeholder="Email" name="email" onChange={this.onChange} value={email}/>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control" type="password" placeholder="Password" name="password" onChange={this.onChange} value={password}/>
                                        </div>


                                        <div class="form-group authTwo-link-block">
                                            <div class="checkbox-inline">
                                                <label class="checkbox">
                                                    <input type="checkbox" className="d-none" name="remember" />
                                                    <span></span>
                                                        Remember me
                                                </label>
                                            </div>
                                            <Link
                                                to="/auth/forgot-password"
                                                className="forgotPass-link"
                                                id="kt_login_forgot">
                                                Forget Password ?
                                            </Link>
                                        </div>
                                        <div className="form-group mb-0 auth-submit-block text-center">
                                            <button
                                                type="submit"
                                                className="btn btn-primary" onClick={this.onSubmit} disabled={submitStatus}
                                            > Sign In
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>

        );
    }
}


Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    apiRes: PropTypes.object.isRequired,
  };
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
    apiRes: state.apiRes,
  });
  
  export default connect(mapStateToProps, { loginUser })(Login);