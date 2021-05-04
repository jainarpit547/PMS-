import React, { Component } from "react";
import './AddProject.css';
import Select from 'react-select';

const TeamMembers = [
  { value: 'Designer', label: 'Vijay Kumawat' },
  { value: 'Developer', label: 'Tarun Jain' },
  { value: 'React Developer', label: 'Pankaj Sharma' },
  { value: '.net', label: 'Rohan' },
  { value: 'IOS', label: 'Praveen' },
  { value: 'PHP', label: 'Akhil' }
]

const managers = [
  { value: 'PM1', label: 'Vineet Jain' },
  { value: 'PM2', label: 'Vishal Sharma' },
]

class AddProject extends Component {
  render() {
        return (
          <div className="d-flex flex-column flex-row-fluid wrapper">
               <div className="container">
                  <div className="table-card">
                     <div className="table-card-body">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Client Name</label>
                                  <input type="text" className="form-control" placeholder="Client Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Client Email</label>
                                  <input type="text" className="form-control" placeholder="Client Email"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Client Country</label>
                                  <input type="text" className="form-control" placeholder="Location "/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Project Name</label>
                                  <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Project Code</label>
                                  <input type="text" className="form-control" placeholder="Project Code"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                      <label htmlFor="">Project Earnings <small>($)</small></label>
                                      <input type="text" className="form-control" placeholder="Project Earnings"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                      <label htmlFor="">Project Expenses <small>($)</small></label>
                                      <input type="text" className="form-control" placeholder="Project Expenses"/>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="form-group">
                                  <label htmlFor="">Select Team Members</label>
                                  <Select isMulti name="Team Members" options={TeamMembers} className="basic-multi-select" classNamePrefix="select" />
                                </div>
                            </div>
                            
                            <div className="col-lg-6">
                              <div className="form-group">
                                <label htmlFor="">Select Project Manager</label>
                                <Select name="Manager" options={managers} classNamePrefix="select" />
                                {/* <div className="form-group-icon">
                                  <select name="" id="" className="form-control">
                                    <option value="">Select Manager</option>
                                    <option value="">Vineet Jain</option>
                                    <option value="">Vishal Sharma</option>
                                  </select>
                                  <span className="form-icon"><SVG src={toAbsoluteUrl("/assets/svg/icons/Navigation/Angle-down.svg")} /></span>
                                </div> */}
                              </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                  <label htmlFor="">Project Description</label>
                                  <textarea className="form-control" placeholder="Project Description"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="add-user-btn">
                          <button className="btn btn-primary">Submit</button>
                        </div>
                     </div>
                  </div>
               </div>
         </div>
        );
    }
}

export default AddProject;