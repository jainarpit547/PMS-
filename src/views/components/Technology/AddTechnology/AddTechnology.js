import React, { Component } from "react";
import SVG from "react-inlinesvg";
import '../TechnologyList/Technology.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../../../store";
import jwt_decode from "jwt-decode";
import { logoutUser } from "../../../../actions/authActions";
import { addTechnologies } from "../../../../actions/technologiesActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddTechnology extends Component {

  constructor() {
    super();
    this.state = {
      token: "",
      name: "",
      submitStatus: false
    };
    
  }
  
  
  componentDidMount() {
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
    this.props.history.push("/technology-list");
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
};

onSubmit = e => {
  this.setState({submitStatus:true});

  e.preventDefault(); 
  this.state.name.replaceAll(' ',"");
  if(this.state.name === ""){ 
    toast.error('Please enter technology name', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
   
  }else{ 
    const technoData = {
      name: this.state.name,
      token: this.state.token
    };
    console.log('technodata is',technoData) 
    this.props.addTechnologies(technoData);
  } 
};

    render() {
        const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
        const { name, submitStatus } = this.state;
          return (
            <div className="d-flex flex-column flex-row-fluid wrapper">
                 <div className="container">
                    <div className="table-card">
                       <div className="table-card-body">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group">
                                    <label htmlFor="">Technology Name</label>
                                    <input type="text" className="form-control" placeholder="Technology Name" onChange={this.onChange} name="name" value={name}/>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group">
                                    <label htmlFor="">Technology Icon</label>
                                    <input type="file" className="form-control" placeholder="Name"/>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group">
                                    <label htmlFor="">Technology Color</label>
                                    <input type="color" className="form-control" placeholder="Email"/>
                                  </div>
                              </div>
                          </div>
                          <div className="add-user-btn">
                            <button type="button" className="btn btn-primary" disabled={submitStatus} onClick={this.onSubmit}>Submit</button>
                          </div>
                       </div>
                    </div>
                 </div>
           </div>
          );
      }
  }
  
  AddTechnology.propTypes = {
    addTechnologies: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    apiRes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    apiRes: state.apiRes
  });
  
  export default connect(
    mapStateToProps,
    { addTechnologies }
  )(AddTechnology);