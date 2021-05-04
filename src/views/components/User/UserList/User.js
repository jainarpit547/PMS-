import React, { Component } from "react";
import SVG from "react-inlinesvg";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import './User.css';
import '../../../../Table.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import store from "../../../../store";
import jwt_decode from "jwt-decode";
import { logoutUser } from "../../../../actions/authActions";
import { listUsers } from "../../../../actions/usersActions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

var usersData = [];
var skillData = [];

// function StatusColumnFormatter() {
//     //const CustomerStatusCssClasses = ["danger", "success", "warning", "info"];
//     //const CustomerStatusTitles = ["Suspended", "Active", "Pending", "Inactive"];
//     const getLabelCssClasses = () => {
//         return `status-label status-light-${'info'}`;
//     };
//     return (
//         <span className={getLabelCssClasses()}>
//             Inactive
//         </span>
//     );
// }


// function SelectionCheckbox({ isSelected, onChange }) {
//     return (
//         <>
//             <input type="checkbox" style={{ display: "none" }} />
//             <label className="checkbox checkbox-single">
//                 <input type="checkbox" checked={isSelected} onChange={onChange} />
//                 <span />
//             </label>
//         </>
//     );
// }

class UserList extends Component {
    constructor() {
        super();
        this.state = {
            token: "",
            projectItem: "",
            filter: "",  
        };
    }

    componentDidMount(){
        if(localStorage.jwtToken)
        { 
          const token = localStorage.jwtToken;
          const decoded = jwt_decode(token);
    
          this.setState({ token: decoded.token });
    
          const userData = {
            user_type: 1,
            token: decoded.token
          };
    
          this.listUser(userData);
        }else{
          store.dispatch(logoutUser());
          this.props.history.push("/login");
        }
      };

      componentWillReceiveProps(nextProps) {
          console.log('next prop',nextProps)
        skillData = [];
        if (nextProps.apiRes) {
          if(nextProps.apiRes.status === 200)
          {
            if(nextProps.apiRes.data.message == null)
            {
              usersData = [];
             
              var data = nextProps.apiRes.data;
              //console.log(data)
              for (var i = 0; i < data.length; i++) {
                data[i].skills.map((item)=>{
                  //console.log('data skill',item)
                 
                    var skillArr = {
                      proficiency: item.proficiency,
                      skillname: item.technology.name
                    }
                    skillData.push(skillArr)   
                })
                var j = i+1;
                var dataArr = {
                  s_no : j,
                  name : data[i].name,
                  user_id : data[i].id,
                  emp_id : data[i].employee_code === null ? '-' : data[i].employee_code,
                  email : data[i].email,
                  skill : this.skillCond(data[i].skills),
                  user_type: data[i].user_type,  
                  action: this.ActionsColumnFormatter(data[i])
                }
                
                usersData.push(dataArr);
              
              }
             console.log('user data is',usersData)
             //console.log('skill',skillData)
              
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

      listUser(userData)
      {
        this.props.listUsers(userData);
      }


     skillCond = (item) =>{
        //console.log('item is',item)
        if(item.length > 0){ 
          return item.map((val)=>{
             return <p>{val.technology.name} - <span>{val.proficiency}</span></p>;
           })
         }
          else{
            return <p>-</p>
          } 
        }

        ActionsColumnFormatter = (item) => {
          //console.log('obj is ',item)
            const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
            return (
                <>
                    <Button type="button" title="view" className="btn btn-icon symbol-success btn-sm"
                       onClick={() => 
                        this.setState({
                          redirect: true,
                          redirectPath: '/user-detail/' + item.id ,
                          redirectData: { name: item.name,email: item.email,phone: item.phone, skill: item.skills, employee_code: item.employee_code, dob:item.dob, doj:item.doj, user_type:item.user_type, id:item.id }
                        })
                      }
                    >
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG width="20px" height="20px" src={toAbsoluteUrl("/assets/svg/icons/Human/eye.svg")} />
                        </span>
                    </Button>
                    {/* <Link to="/add-user" title="Edit" className="btn btn-icon symbol-warning btn-sm">
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                        <SVG width="20px" height="20px" src={toAbsoluteUrl("/assets/svg/icons/General/Edit.svg")} />
                        </span>
                    </Link>
                    <Link to="" title="Delete" className="btn btn-icon symbol-danger btn-hover-danger btn-sm" >
                        <span className="svg-icon svg-icon-md svg-icon-danger">
                            <SVG width="20px" height="20px" src={toAbsoluteUrl("/assets/svg/icons/General/Trash.svg")} />
                        </span>
                    </Link> */}
                </>
            );
        }


    render() {

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

        const columns = [
            { dataField: "s_no", text: "S.No", headerClasses: "data-sno", sort: true },
            { dataField: "emp_id", text: "Emp ID", sort: true },
            { dataField: "name", text: "Name", sort: true },
            { dataField: "email", text: "Email", classes:"text-truncate", sort: false },
            { dataField: "skill", text: "Skill", sort: false },
            { dataField: "user_type", text: "User Type", headerClasses: "data-userType", sort: true },
            // { dataField: "userType", text: "User Type", classes: "list-status-td", sort: true, formatter: StatusColumnFormatter },
            { dataField: "action", text: "Actions", classes: "text-right table-card-action", headerClasses: "text-right", style: { minWidth: "100px", } },
        ];

        const defaultSorted = [{
            dataField: 'id',
            order: 'asc'
        }];

        const customTotal = (from, to, size) => (
            <span className="react-bootstrap-table-pagination-total">
                Showing rows { from} to { to} of { size}
            </span>
        );

        // Table pagination properties
        const paginationOptions = {
            paginationSize: 10,
            pageStartIndex: 0,
            //custom: true,
            firstPageText: 'First',
            prePageText: 'Back',
            nextPageText: 'Next',
            lastPageText: 'Last',
            nextPageTitle: 'First page',
            prePageTitle: 'Pre page',
            firstPageTitle: 'Next page',
            lastPageTitle: 'Last page',
            showTotal: true,
            paginationTotalRenderer: customTotal,
            sizePerPageList: [{
                text: '10', value: 10
            }, {
                text: '20', value: 20
            }, {
                text: 'All', value: usersData.length
            }],
        };

        // const selectRow = {
        //     mode: 'checkbox',
        //     clickToSelect: true,
        //     clickToEdit: true,
        //     hideSelectAll: false,

        //     // selectionHeaderRenderer: () => {
        //     //     return (
        //     //         <SelectionCheckbox />
        //     //     );
        //     // },
        // };

        return (
            <>
                <div className="d-flex flex-column flex-row-fluid wrapper">
                    <div class="container">
                        <div className="table-card">
                            {/* <div class="table-card-header"><div class="table-card-title"><h3 class="card-label">Users list</h3></div>
                                <div class="table-card-toolbar">
                                    <a href="/add-user" class="btn btn-primary">Add User</a>
                                </div>
                            </div> */}
                            <div className="table-card-body">
                                {/* {console.log( products)} */}
                                <BootstrapTable	
                                    // selectRow={selectRow}	
                                    bordered={false}	
                                    classes="table table-head-custom table-vertical-center overflow-hidden"	
                                    bootstrap4	
                                    keyField='id'	
                                    data={usersData}	
                                    columns={columns}	
                                    defaultSorted={defaultSorted}	
                                    pagination={paginationFactory(paginationOptions)}	
                                    // scopedSlots = {{	
                                    //         'skill':	
                                    //         (item, index)=>{	
                                    //           //console.log('item is',item.skill);	
                                    //         return (	
                                    //                 <div>	
                                    //                     {this.skillCond(item)} 	
                                    //                 </div>	
                                    //           ) 	
                                    //         } 	
                      	
                                    //   }}	
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}


UserList.propTypes = {
    listUsers: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    apiRes: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    apiRes: state.apiRes
  });
  
  export default connect(
    mapStateToProps,
    { listUsers }
  )(UserList);