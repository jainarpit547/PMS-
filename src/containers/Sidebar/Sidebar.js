import React, { Component } from "react";
import './Sidebar.css';
import { NavLink, Link } from "react-router-dom";
import SVG from "react-inlinesvg";

class Sidebar extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        document.body.classList.add("aside-fixed");
        document.body.classList.add("aside-enabled");
        document.body.classList.add("brand-dark");
    };

    render() {
        const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;

        return (
            <>
                <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto">
                    <div className="brand flex-column-auto" id="kt_brand">
                        <Link to="" className="brand-logo">
                            <img alt="Logo" src="./assets/logo/logo.svg" />
                        </Link>

                        <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                            <span className="svg-icon svg-icon svg-icon-xl">
                                <SVG src={toAbsoluteUrl("/assets/svg/icons/Navigation/Angle-double-left.svg")} />
                            </span>
                        </button>
                    </div>

                    <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
                        <div id="kt_aside_menu" className="aside-menu my-4">
                            <ul className="menu-nav">
                                <li
                                    className="menu-item"
                                    aria-haspopup="true"
                                >
                                    <NavLink className="menu-link" to="/">
                                        <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Design/Layers.svg")} />
                                        </span>
                                        <span className="menu-text"> Dashboard </span>
                                    </NavLink>
                                </li>

                                <li
                                    className="menu-item"
                                    aria-haspopup="true"
                                >
                                    <NavLink className="menu-link menu-toggle" to="/project-list">
                                        <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Design/Cap-2.svg")} />
                                        </span>
                                        <span className="menu-text"> Project List </span>
                                        <SVG width="15" src={toAbsoluteUrl("/assets/svg/icons/Navigation/Angle-right.svg")} />
                                    </NavLink>
                                    <div className="menu-submenu ">
                                        <ul className="menu-subnav">
                                            <li className="menu-item" aria-haspopup="true" >
                                                <NavLink className="menu-link" to="/project-list">
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Project Listing</span>
                                                </NavLink>
                                            </li>

                                            <li className="menu-item" aria-haspopup="true" >
                                                <NavLink className="menu-link" to="/add-project">
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Add Project</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                
                                <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                    <NavLink className="menu-link menu-toggle" to="/user-list">
                                        <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Design/Cap-2.svg")} />
                                        </span>
                                        <span className="menu-text"> User Listing </span>
                                        <SVG width="15" src={toAbsoluteUrl("/assets/svg/icons/Navigation/Angle-right.svg")} />
                                    </NavLink>
                                    <div className="menu-submenu ">
                                        <ul className="menu-subnav">
                                            <li className="menu-item" aria-haspopup="true" >
                                                <NavLink className="menu-link" to="/user-list">
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">User Listing</span>
                                                </NavLink>
                                            </li>

                                            <li className="menu-item" aria-haspopup="true" >
                                                <NavLink className="menu-link" to="/add-user">
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Add User</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li
                                    className="menu-item"
                                    aria-haspopup="true"
                                >
                                    <NavLink className="menu-link menu-toggle" to="/technology-list">
                                        <span className="svg-icon menu-icon">
                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Design/Cap-2.svg")} />
                                        </span>
                                        <span className="menu-text"> Technology list </span>
                                        <SVG width="15" src={toAbsoluteUrl("/assets/svg/icons/Navigation/Angle-right.svg")} />
                                    </NavLink>

                                    <div className="menu-submenu ">
                                        <ul className="menu-subnav">
                                            <li className="menu-item" aria-haspopup="true" >
                                                <NavLink className="menu-link" to="/technology-list">
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Technology list</span>
                                                </NavLink>
                                            </li>

                                            <li className="menu-item" aria-haspopup="true" >
                                                <NavLink className="menu-link" to="/add-technology">
                                                    <i className="menu-bullet menu-bullet-dot">
                                                        <span />
                                                    </i>
                                                    <span className="menu-text">Add Technology</span>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* {
                        $('.pms_nav>ul>li.subm a').click(function() {
                            $('.pms_nav>ul>li.subm a').not(this).removeClass('slMenu');
                            $('.pms_nav>ul>li.subm a').not(this).next().slideUp();
                            $(this).toggleClass('slMenu');
                            $(this).next().slideToggle();
                        });
                    } */}
                </div>
            </>

        );
    }
}
export default Sidebar;