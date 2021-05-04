import React, { Component } from "react";
import SVG from "react-inlinesvg";
import { Link } from "react-router-dom";
import './UserDetail.css';
import '../../../../Table.css';
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';


class UserDetail extends Component {

  constructor(props){
    super(props);
    this.state={
      id: this.props.location.state ? this.props.location.state.id: '',
      name: this.props.location.state ? this.props.location.state.name: '',
			employee_code: this.props.location.state ? this.props.location.state.employee_code : '',
			phone: this.props.location.state ? this.props.location.state.phone : '',
      email: this.props.location.state ? this.props.location.state.email : '',
      dob: this.props.location.state ? this.props.location.state.dob : '',
      doj: this.props.location.state ? this.props.location.state.doj : '',
      user_type: this.props.location.state ? this.props.location.state.user_type : '',
      skill: this.props.location.state ? this.props.location.state.skill : '',
    };
  }
 
  EditClick= () => {
    this.setState({
      redirect: true,
      redirectPath: '/add-user/' + this.state.id ,
      redirectData: { name: this.state.name,email: this.state.email,phone: this.state.phone, employee_code: this.state.employee_code, dob:this.state.dob, doj:this.state.doj, user_type:this.state.user_type, update: true}
    })
    console.log('redirect data is ',this.state.redirect );
  }

  // EditClick = () => {
  //   this.props.history.push({
  //     pathname: '/add-user/',
  //     state: {
  //         update: true,
  //         name: this.state.name,
  //         email: this.state.image,
  //         employee_code: this.state.employee_code,
          
  //     }
  // })
  // }


  render() {
      const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
      if (this.state.redirect) {
        return (
          <Redirect
            to={{
              pathname: this.state.redirectPath,
              state: this.state.redirectData
            }}
          />
        );
      }

        return (
          <div className="d-flex flex-column flex-row-fluid wrapper">
               <div className="container">
                  <div className="table-card">
                     <div className="table-card-body">
                        <div className="row">
                          <div className="col user-view-outer">
                            <div className="user-view-img">
                              <SVG src={toAbsoluteUrl("/assets/svg/avatars/007-boy-2.svg")} />
                            </div>
                          </div>
                          <div className="col">
                            <div className="user-view-detail">
                              <h2>{this.state.name} 
                                <Button type="button" className="btn symbol-primary" onClick={this.EditClick}>Edit</Button>
                              </h2>
                              {/* <p className="post-name">Product Designer</p> */}
                              <div className="user-view-col">
                                <strong>Employee Code</strong>
                                {this.state.employee_code === null ? <span> - </span> : <span>{this.state.employee_code}</span>}
                              </div>
                              <div className="user-view-col">
                                <strong>Name</strong>
                                {this.state.name === null ? <span> - </span> : <span>{this.state.name}</span>}
                              </div>
                              {/* <div className="user-view-col">
                                <strong>Total Experience</strong>
                                <span>8 Years</span>
                              </div> */}
                              <div className="user-view-col">
                                <strong>Phone Number</strong>
                                {this.state.phone === null ? <span> - </span> : <span>{this.state.phone}</span>}
                              </div>
                              <div className="user-view-col">
                                <strong>Email</strong>
                                {this.state.email === null ? <span> - </span> : <span>{this.state.email}</span>}
                              </div>
                              <div className="user-view-col">
                                <strong>Date of joining</strong>
                                {this.state.doj === null ? <span> - </span> : <span>{this.state.doj}</span>}
                              </div>
                              <div className="user-view-col">
                                <strong>User Type</strong>
                                {this.state.user_type === null ? <span> - </span> : <span>{this.state.user_type}</span>}
                              </div>
                              <div className="user-view-col">
                                <strong>Date of birth</strong>
                                {this.state.dob === null ? <span> - </span> : <span>{this.state.dob}</span>}
                              </div>
                            </div>
                          </div>
                        </div>
                     </div>
                  </div>

                  <div className="table-card mt-3">
                      <div className="table-card-header">
                        <div className="table-card-title"><h3 className="card-label">User Skills</h3></div>
                        <div className="table-card-toolbar"> <Link to="/add-project" className="btn symbol-primary">Add New Skill</Link> </div>
                      </div>
                      <div className="table-card-body">
                        <div className="react-bootstrap-table">
                          <table className="table table table-head-custom table-vertical-center overflow-hidden">
                            <thead>
                              <tr>
                                <th tabIndex={0} aria-label="S.No sortable" className="sortable data-sno">S.No<span className="order-4" /></th>
                                <th tabIndex={0} aria-label="Name sortable" className="sortable">Skill Name<span className="order-4" /></th>
                                <th tabIndex={0} aria-label="Name sortable" className="sortable">Proficiency <span className="order-4" /></th>
                                <th tabIndex={0} className="text-right">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.skill.length === 0 ? "no data" : this.state.skill.map((item,i) => {
                                console.log('item is ',item)
                                  return(
                                    <tr>
                                    <td>{i+1}</td>
                                    <td>{item.technology.name}</td>
                                    <td>{item.proficiency}</td>
                                    <td className="text-right table-card-action" style={{minWidth: '100px'}}>
                                      <Link to="/add-user" title="Edit" className="btn btn-icon symbol-warning btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-primary">
                                          <SVG width="20px" height="20px" src={toAbsoluteUrl("/assets/svg/icons/General/Edit.svg")} />
                                        </span>
                                      </Link>
                                      <Link to="/" title="Delete" className="btn btn-icon symbol-danger btn-hover-danger btn-sm">
                                        <span className="svg-icon svg-icon-md svg-icon-danger">
                                          <SVG width="20px" height="20px" src={toAbsoluteUrl("/assets/svg/icons/General/Trash.svg")} />
                                        </span>
                                      </Link>
                                    </td>
                                  </tr>
                                  );
                              })}
                             
                            </tbody>
                          </table>
                        </div>
                      </div>
                  </div>
               </div>
         </div>
        );
    }
}

export default UserDetail;