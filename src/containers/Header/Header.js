import React, { Component } from "react";
import './Header.css';
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
class Header extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    };

    render() {
        const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
        return (
            <>
                <div className="header header-fixed" id="kt_header">
                    <div className="container-fluid d-flex align-items-stretch justify-content-between">
                        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                            <div id="kt_header_menu" className="header-menu header-menu-mobile header-menu-layout-default">
                                <ul className="menu-nav">
                                    <li className="menu-item menu-item-rel">
                                        <NavLink className="menu-link" to="/">
                                            <span className="menu-text"> Page </span>
                                        </NavLink>
                                    </li>

                                    <li className="menu-item menu-item-rel">
                                        <NavLink className="menu-link" to="/">
                                            <span className="menu-text"> Features </span>
                                        </NavLink>
                                    </li>

                                    <li className="menu-item menu-item-rel">
                                        <NavLink className="menu-link" to="/">
                                            <span className="menu-text"> Apps </span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <Dropdown drop="down" className="userProfile-menu-block" alignRight>
                            <Dropdown.Toggle
                                id="dropdown-toggle-user-profile"
                                className="userMenu-toggle-btn"
                            >
                                <div className="topbar">
                                    <div className="topbar-item">
                                        <div className="btn btn-lg userbar-toggle-box" id="kt_quick_user_toggle">
                                            <span className="userbar-symbol"> T </span>
                                            <span className="userbar-name">  Tarun Jain </span>
                                        </div>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="p-0 m-0 dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl comman-shadow">
                                <div className="userMenu-cover-drop">
                                    <div>
                                        <span className="userbar-symbol symbol-danger font-weight-bold font-size-h4"> T </span>
                                        {/*<img alt="Pic" className="hidden" src={user.pic} />*/}
                                    </div>
                                    <div className="m-0 flex-grow-1 mr-3 font-size-h5"> Tarun Jain </div>
                                    <span className="msg-count"> 3 messages </span>
                                </div>

                                <div className="navi">
                                    <Link to="/user-profile" className="navi-item px-8 cursor-pointer">
                                        <div className="navi-link">
                                            <div className="navi-icon userbar-symbol symbol-success mr-2">
                                                <i className="flaticon2-calendar-3 text-success" />
                                            </div>
                                            <div className="navi-text">
                                                <h6>My Profile </h6>
                                                <div className="text-muted">
                                                    Account settings and more 
                                                    <span className="label label-light-danger label-inline font-weight-bold"> update </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/user-profile" className="navi-item px-8 cursor-pointer">
                                        <div className="navi-link">
                                            <div className="navi-icon userbar-symbol symbol-warning mr-2">
                                                <i className="flaticon2-mail text-warning"></i>
                                            </div>
                                            <div className="navi-text">
                                                <h6>My Messages</h6>
                                                <div className="text-muted">Inbox and tasks</div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/user-profile" className="navi-item px-8 cursor-pointer">
                                        <div className="navi-link">
                                            <div className="navi-icon userbar-symbol symbol-danger mr-2">
                                                <i className="flaticon2-rocket-1 text-danger"></i>
                                            </div>
                                            <div className="navi-text">
                                                <h6>My Activities</h6>
                                                <div className="text-muted">Logs and notifications</div>
                                            </div>
                                        </div>
                                    </Link>

                                    <Link to="/user-profile" className="navi-item px-8 cursor-pointer">
                                        <div className="navi-link">
                                            <div className="navi-icon userbar-symbol symbol-primary mr-2">
                                                <i className="flaticon2-hourglass text-primary"></i>
                                            </div>
                                            <div className="navi-text">
                                                <h6>My Tasks</h6>
                                                <div className="text-muted">latest tasks and projects</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="navi-footer btn-group-custom">
                                    <Link to="/logout" className="btn btn-primary" > Sign Out </Link>                                    
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="header-bottom-bar">
                        <div className="page-title">Dashboard</div>
                        <div className="bottom-bar-btn btn-group-custom">
                            <Link to="/" className="btn btn-default">Back</Link>
                            <Link to="/" className="btn btn-primary">Add Project</Link>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}
export default Header;