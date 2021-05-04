import React, { Component } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import SVG from "react-inlinesvg";
import './Technology.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../../../store";
import jwt_decode from "jwt-decode";
import { logoutUser } from "../../../../actions/authActions";
import { listTechnologies } from "../../../../actions/technologiesActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var techData = [];
class TechnologyList extends Component {
    constructor() {
        super();
        this.state = {
          token: "",
          techData: "",
        };
      }
    
      componentDidMount() {
        if(localStorage.jwtToken)
        { 
          const token = localStorage.jwtToken;
          const decoded = jwt_decode(token);
    
          this.setState({ token: decoded.token });
    
          this.listTechno(decoded.token);
        }else{
          store.dispatch(logoutUser());
          this.props.history.push("/login");
        }
      };

      componentWillReceiveProps(nextProps) {
          console.log('next prop from techno',nextProps.apiRes.data)
        if (nextProps.apiRes) {
          if(nextProps.apiRes.status === 200)
          {
            if(nextProps.apiRes.data.message == null)
            {
              techData = [];
              var data = nextProps.apiRes.data;
    
              for (var i = 0; i < data.length; i++) {
                var j = i+1;
                var dataArr = {
                  s_no : j,
                  name : data[i].name,
                  tech_id : data[i].id
                }
                
                techData.push(dataArr);
              }
           // this.setState({techData : data})
              console.log('techdata ',techData)
            }else{
              toast.success(nextProps.apiRes.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
    
              this.listTechno(this.state.token);
            }
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
        }
      }

      listTechno(token)
      {
        const techData = {
          token: token
        };
    
        this.props.listTechnologies(techData);
      }

    render() {
        const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
        return (
            <>
                <div className="d-flex flex-column flex-row-fluid wrapper">
                    <div className="container">
                        <Row>
                            {techData.map((item)=>{
                                return( 
                                <Col xl={3} lg={4}>
                                    <Card className="technology-card">
                                        <div className="technology-icon" style={{ background: "#ffe2e5" }}>
                                            <SVG src={toAbsoluteUrl("/assets/svg/logos/angular-icon.svg")} width="50" height="50" />
                                        </div>
                                        <h5>{item.name}</h5>
    
                                        <div className="technology-action">
                                            <Link to="/add-technology" class="btn btn-icon symbol-warning">
                                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                                    <SVG src={toAbsoluteUrl("/assets/svg/icons/Communication/Write.svg")} />
                                                </span>
                                            </Link>
                                            <Link to="/" class="btn btn-icon symbol-danger">
                                                <span className="svg-icon svg-icon-md svg-icon-danger">
                                                    <SVG width="20px" height="20px" src={toAbsoluteUrl("/assets/svg/icons/General/Trash.svg")} />
                                                </span>
                                            </Link>
                                        </div>
                                    </Card>
                                </Col>
                                )
                            })}
                        </Row>
                    </div>
                </div>
            </>

        );
    }
}

TechnologyList.propTypes = {
    listTechnologies: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    apiRes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    apiRes: state.apiRes
  });
  
  export default connect(
    mapStateToProps,
    { listTechnologies }
  )(TechnologyList);