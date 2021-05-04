import React, { Component } from "react";
import SVG from "react-inlinesvg";
import './AddUser.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../../../store";
import jwt_decode from "jwt-decode";
import { logoutUser } from "../../../../actions/authActions";
import { addUsers } from "../../../../actions/usersActions";
import { ToastContainer, toast } from 'react-toastify';
//import '../../User/UserList/node_modules/react-toastify/dist/ReactToastify.css';


class AddUser extends Component {
  constructor (){
    super();
    this.state={
        token: "",
        name: "",
        email: "",
        password: "",
        phone:"",
        employee_code:"",
        dob:"",
        doj:"",
        user_type:"",
        // name: this.props.location.state ? this.props.location.state.name: '',
        // employee_code: this.props.location.state ? this.props.location.state.employee_code : '',
        // phone: this.props.location.state ? this.props.location.state.phone : '',
        // email: this.props.location.state ? this.props.location.state.email : '',
        // dob: this.props.location.state ? this.props.location.state.dob : '',
        // doj: this.props.location.state ? this.props.location.state.doj : '',
        // user_type: this.props.location.state ? this.props.location.state.user_type : '',
        submitStatus: false
    };
  }
  
  componentDidMount() {
    console.log('data from add page', this.state.redirect)
    if(localStorage.jwtToken)
    { 
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);

      this.setState({ token: decoded.token });
    }else{
      store.dispatch(logoutUser());
      this.props.history.push("/login");
    }
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.apiRes) {
      if(nextProps.apiRes.status === 200)
      {
        toast.success(nextProps.apiRes.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        this.setState({ name: "" });
        this.setState({ email: "" });
        this.setState({ password: "" });
        this.setState({ phone: "" });
        this.setState({ employee_code:"" });
        this.setState({ dob:"" });
        this.setState({ doj:"" });
        this.setState({ user_type:""});
      }else{
        toast.error(nextProps.apiRes.errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }

      this.setState({submitStatus:false});
    }
    this.props.history.push("/user-list");
  }

  onChange = e => {
     //console.log(e.target.name);
      this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    this.setState({submitStatus:true});
    //this.setState({ projects: this.state.projects.concat(e.target.value) })
    
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
      employee_code: this.state.employee_code,
      dob: this.state.dob,
      doj: this.state.doj,
      user_type: this.state.user_type,
      token: this.state.token
    };  
    console.log('data is ', userData)
    this.props.addUsers(userData);
   
  };

  render() {
      const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
      const { name, email, password, phone, employee_code, dob, doj, user_type, submitStatus } = this.state;
        return (
          <div className="d-flex flex-column flex-row-fluid wrapper">
               <div className="container">
                  <div className="table-card">
                     <div className="table-card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Employee Code</label>
                                  <input type="text" className="form-control" placeholder="Employee Code" onChange={this.onChange}  name="employee_code" value={employee_code}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Name</label>
                                  <input type="text" className="form-control" placeholder="Name" onChange={this.onChange} name="name" value={name} required/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Email</label>
                                  <input type="email" className="form-control" placeholder="Email" onChange={this.onChange} name="email" value={email}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Password</label>
                                  <input type="password" className="form-control" placeholder="Password" onChange={this.onChange} name="password" value={password}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Phone Number</label>
                                  <input type="text" className="form-control" placeholder="Phone Number" onChange={this.onChange} name="phone" value={phone}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="row">
                              {/* <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Skill</label>
                                  <input type="text" className="form-control" placeholder="Skill"/>
                                </div>
                              </div> */}
                                <div className="col-lg-6">
                                  <div className="form-group">
                                    <label htmlFor="">User Type</label>
                                    <div className="form-group-icon">
                                      <select name="" id="" className="form-control" onChange={this.onChange} name="user_type" value={user_type}>
                                          <option value="" disabled selected hidden>Select a user type</option>
                                          <option value="admin">Admin</option>
                                          <option value="sales">Sales</option>
                                          <option value="manager">Manager</option>
                                          <option value="user">User</option>
                                      </select>
                                                   <span className="form-icon"><SVG src={toAbsoluteUrl("/assets/svg/icons/Navigation/Angle-down.svg")} /></span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Date of birth</label>
                                  <input type="text" className="form-control" placeholder="YYYY-MM-DD" onChange={this.onChange} name="dob" value={dob}/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Date of joining</label>
                                  <input type="text" className="form-control" placeholder="YYYY-MM-DD" onChange={this.onChange} name="doj" value={doj}/>
                                </div>
                            </div>
                        </div>
                        <div className="add-user-btn">
                          <button className="btn btn-primary" disabled={submitStatus} onClick={this.onSubmit}>Submit</button>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        );
    }
}

AddUser.propTypes = {
  addUsers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  apiRes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  apiRes: state.apiRes
});

export default connect(
  mapStateToProps,
  { addUsers }
)(AddUser);