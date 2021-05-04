import React, { Component } from "react";
import './Project.css';
import SVG from "react-inlinesvg";
import Select from 'react-select';
import { Link } from "react-router-dom";
import { Tooltip } from "@material-ui/core";

const sort_by = [
    { value: 'sort', label: 'Sort by' },
    { value: 'new_project', label: 'New Projects' },
    { value: 'old_project', label: 'Old Projects' },
    { value: 'completed_projects', label: 'Completed Projects' },
    { value: 'running_projects', label: 'Running Projects' },
]
class ProjectList extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    };

    render() {
        const toAbsoluteUrl = pathname => process.env.PUBLIC_URL + pathname;
        return (
            <>
                <div className="d-flex flex-column flex-row-fluid wrapper">

                    <div class="container">
                        <div className="filter-by-bx">
                            <h2>Filter</h2>
                            <div className="filter-inner">
                                <div className="row low-space-row ">
                                    <div className="col form-group mb-0">
                                        <Select name="sort_by" className="with-border sortBy-select-control" options={sort_by} classNamePrefix="select" />
                                    </div>
                                    <div className="col form-group mb-0">
                                        <input type="search" placeholder="Search project" className="searchPro-control with-border form-control white" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="project-listing-sec">
                            <div className="userList-card">
                                <div className="userList-card-inner">
                                    <div className="list-top">
                                        <div className="symbol-figure">
                                            <Link to="/" className="user-link">
                                                <img alt="Pic" src={toAbsoluteUrl("/assets/project-logo/foxiie.jpg")} />
                                            </Link>
                                        </div>

                                        <div className="userList-content">
                                            <div className="ulTop">
                                                <div className="ul-name">
                                                    <Link to="/" className="user-link"> Foxiie Trends</Link>
                                                    <div className="project-action btn-group-custom">
                                                        <Link to="/" className="btn symbol-primary">Edit</Link>
                                                        <Link to="/" className="btn symbol-danger">Delete</Link>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-wrap ul-point-box">
                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Communication/Mail-notification.svg")} />
                                                        </span>
                                                            urwasheesaxena@foxiie.com
                                                        </Link>

                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/General/Lock.svg")} />
                                                        </span>
                                                            Sukhbir Singh
                                                        </Link>

                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Map/Marker2.svg")} />
                                                        </span>
                                                            Jaipur
                                                        </Link>
                                                </div>

                                                <div className="ulTop-content">
                                                    <p> Foxiie trends jewelry, whether a necklace set for women, earrings for ladies, maang tika for girls, others are available at the lowest price (exclusively). So, the budget/price is no longer the problem anymore. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ulseparator"></div>

                                    <div className="ulBottom">
                                        <div className="ul-info-content">
                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-piggy-bank" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span>Project Budget</span>
                                                    <span> <i className="uiInfo-dollar">$</i>20,000 </span>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-confetti" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> No. of Milestones </span>
                                                    <span> 6 </span>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-graphic-2" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> Status </span>
                                                    <label className="badge symbol-warning xs">Running</label>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-file-2" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> 73 Tasks </span>
                                                    <Link to="/" className="ulInfo-link">View</Link>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-chat-1" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> 648 Comments </span>
                                                    <Link to="/" className="ulInfo-link">View</Link>
                                                </div>
                                            </div>

                                            <div className="workUser-img">
                                                <div className="wui-inner">
                                                    <Tooltip title="Mark Stone" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_25.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Charlie Stone" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_19.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Luca Doncic" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_22.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Nick Mana" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_23.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Teresa Fox" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_18.jpg" />
                                                        </div>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="userList-card">
                                <div className="userList-card-inner">
                                    <div className="list-top">
                                        <div className="symbol-figure">
                                            <Link to="/" className="user-link">
                                                <img alt="Pic" src={toAbsoluteUrl("/assets/project-logo/ezunction.jpg")} />
                                            </Link>
                                        </div>

                                        <div className="userList-content">
                                            <div className="ulTop">
                                                <div className="ul-name">
                                                    <Link to="/" className="user-link"> eZunction </Link>
                                                    <div className="project-action btn-group-custom">
                                                        <Link to="/" className="btn symbol-primary">Edit</Link>
                                                        <Link to="/" className="btn symbol-danger">Delete</Link>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-wrap ul-point-box">
                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Communication/Mail-notification.svg")} />
                                                        </span>
                                                        avinash@foxiie.com
                                                        </Link>

                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/General/Lock.svg")} />
                                                        </span>
                                                        Vineet Jain
                                                        </Link>

                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Map/Marker2.svg")} />
                                                        </span>
                                                            USA
                                                        </Link>
                                                </div>

                                                <div className="ulTop-content">
                                                    <p> eZunction offers a reliable, easy, secure and trusted platform to establish the connection between the requestor and the service provider community. This is your go-to platform for all your service needs that offers a hastle free environment and makes life easy to get your request completed with full satisfaction.  </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ulseparator"></div>

                                    <div className="ulBottom">
                                        <div className="ul-info-content">
                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-piggy-bank" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span>Project Budget</span>
                                                    <span> <i className="uiInfo-dollar">$</i>45,000 </span>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-confetti" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> No. of Milestones </span>
                                                    <span> 4 </span>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-graphic-2" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> Status </span>
                                                    <label className="badge symbol-success xs"> Completed </label>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-file-2" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> 73 Tasks </span>
                                                    <Link to="/" className="ulInfo-link">View</Link>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-chat-1" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> 648 Comments </span>
                                                    <Link to="/" className="ulInfo-link">View</Link>
                                                </div>
                                            </div>

                                            <div className="workUser-img">
                                                <div className="wui-inner">
                                                    <Tooltip title="Mark Stone" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_25.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Charlie Stone" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_19.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Luca Doncic" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_22.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Nick Mana" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_23.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Teresa Fox" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_18.jpg" />
                                                        </div>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="userList-card">
                                <div className="userList-card-inner">
                                    <div className="list-top">
                                        <div className="symbol-figure">
                                            <Link to="/" className="user-link">
                                                <img alt="Pic" src={toAbsoluteUrl("/assets/project-logo/juslocal.jpg")} />
                                            </Link>
                                        </div>

                                        <div className="userList-content">
                                            <div className="ulTop">
                                                <div className="ul-name">
                                                    <Link to="/" className="user-link"> JusLocal </Link>
                                                    <div className="project-action btn-group-custom">
                                                        <Link to="/" className="btn symbol-primary">Edit</Link>
                                                        <Link to="/" className="btn symbol-danger">Delete</Link>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-wrap ul-point-box">
                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Communication/Mail-notification.svg")} />
                                                        </span>
                                                        johnsmith@foxiie.com
                                                        </Link>

                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/General/Lock.svg")} />
                                                        </span>
                                                        Sukhbir Singh
                                                        </Link>

                                                    <Link to="/" class="mr-5">
                                                        <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                            <SVG src={toAbsoluteUrl("/assets/svg/icons/Map/Marker2.svg")} />
                                                        </span>
                                                            UAE
                                                        </Link>
                                                </div>

                                                <div className="ulTop-content">
                                                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ulseparator"></div>

                                    <div className="ulBottom">
                                        <div className="ul-info-content">
                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-piggy-bank" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span>Project Budget</span>
                                                    <span> <i className="uiInfo-dollar">$</i>45,000 </span>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-confetti" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> No. of Milestones </span>
                                                    <span> 4 </span>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-graphic-2" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> Status </span>
                                                    <label className="badge symbol-danger xs"> Incompleted </label>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-file-2" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> 73 Tasks </span>
                                                    <Link to="/" className="ulInfo-link">View</Link>
                                                </div>
                                            </div>

                                            <div className="ulInfo-item">
                                                <span className="ulInfo-icon">
                                                    <i className="flaticon-chat-1" />
                                                </span>
                                                <div className="ulInfo-des">
                                                    <span> 648 Comments </span>
                                                    <Link to="/" className="ulInfo-link">View</Link>
                                                </div>
                                            </div>

                                            <div className="workUser-img">
                                                <div className="wui-inner">
                                                    <Tooltip title="Mark Stone" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_25.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Charlie Stone" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_19.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Luca Doncic" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_22.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Nick Mana" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_23.jpg" />
                                                        </div>
                                                    </Tooltip>

                                                    <Tooltip title="Teresa Fox" placement="top-center" arrow >
                                                        <div className="wui-item">
                                                            <img alt="Pic" src="/assets/users/300_18.jpg" />
                                                        </div>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="userList-card">
                            <div className="userList-card-inner">
                                <div className="list-top">
                                    <div className="symbol-figure">
                                        <Link to="/" className="user-link">
                                            <img alt="Pic" src={toAbsoluteUrl("/assets/project-logo/half-innings.jpg")} />
                                        </Link>
                                    </div>

                                    <div className="userList-content">
                                        <div className="ulTop">
                                            <div className="ul-name">
                                                <Link to="/" className="user-link"> Half Innings </Link>
                                                <div className="project-action btn-group-custom">
                                                    <Link to="/" className="btn symbol-primary">Edit</Link>
                                                    <Link to="/" className="btn symbol-danger">Delete</Link>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-wrap ul-point-box">
                                                <Link to="/" class="mr-5">
                                                    <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                        <SVG src={toAbsoluteUrl("/assets/svg/icons/Communication/Mail-notification.svg")} />
                                                    </span>
                                                    halfinnings@foxiie.com
                                                    </Link>

                                                <Link to="/" class="mr-5">
                                                    <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                        <SVG src={toAbsoluteUrl("/assets/svg/icons/General/Lock.svg")} />
                                                    </span>
                                                    Sukhbir Singh
                                                    </Link>

                                                <Link to="/" class="mr-5">
                                                    <span class="svg-icon svg-icon-md svg-icon-gray-500 mr-1">
                                                        <SVG src={toAbsoluteUrl("/assets/svg/icons/Map/Marker2.svg")} />
                                                    </span>
                                                        Dubai
                                                    </Link>
                                            </div>

                                            <div className="ulTop-content">
                                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="ulseparator"></div>

                                <div className="ulBottom">
                                    <div className="ul-info-content">
                                        <div className="ulInfo-item">
                                            <span className="ulInfo-icon">
                                                <i className="flaticon-piggy-bank" />
                                            </span>
                                            <div className="ulInfo-des">
                                                <span>Project Budget</span>
                                                <span> <i className="uiInfo-dollar">$</i>8,000 </span>
                                            </div>
                                        </div>

                                        <div className="ulInfo-item">
                                            <span className="ulInfo-icon">
                                                <i className="flaticon-confetti" />
                                            </span>
                                            <div className="ulInfo-des">
                                                <span> No. of Milestones </span>
                                                <span> - </span>
                                            </div>
                                        </div>

                                        <div className="ulInfo-item">
                                            <span className="ulInfo-icon">
                                                <i className="flaticon-graphic-2" />
                                            </span>
                                            <div className="ulInfo-des">
                                                <span> Status </span>
                                                <label className="badge symbol-success xs"> Completed </label>
                                            </div>
                                        </div>

                                        <div className="ulInfo-item">
                                            <span className="ulInfo-icon">
                                                <i className="flaticon-file-2" />
                                            </span>
                                            <div className="ulInfo-des">
                                                <span> 73 Tasks </span>
                                                <Link to="/" className="ulInfo-link">View</Link>
                                            </div>
                                        </div>

                                        <div className="ulInfo-item">
                                            <span className="ulInfo-icon">
                                                <i className="flaticon-chat-1" />
                                            </span>
                                            <div className="ulInfo-des">
                                                <span> 648 Comments </span>
                                                <Link to="/" className="ulInfo-link">View</Link>
                                            </div>
                                        </div>

                                        <div className="workUser-img">
                                            <div className="wui-inner">
                                                <Tooltip title="Mark Stone" placement="top-center" arrow >
                                                    <div className="wui-item">
                                                        <img alt="Pic" src="/assets/users/300_25.jpg" />
                                                    </div>
                                                </Tooltip>

                                                <Tooltip title="Charlie Stone" placement="top-center" arrow >
                                                    <div className="wui-item">
                                                        <img alt="Pic" src="/assets/users/300_19.jpg" />
                                                    </div>
                                                </Tooltip>

                                                <Tooltip title="Luca Doncic" placement="top-center" arrow >
                                                    <div className="wui-item">
                                                        <img alt="Pic" src="/assets/users/300_22.jpg" />
                                                    </div>
                                                </Tooltip>

                                                <Tooltip title="Nick Mana" placement="top-center" arrow >
                                                    <div className="wui-item">
                                                        <img alt="Pic" src="/assets/users/300_23.jpg" />
                                                    </div>
                                                </Tooltip>

                                                <Tooltip title="Teresa Fox" placement="top-center" arrow >
                                                    <div className="wui-item">
                                                        <img alt="Pic" src="/assets/users/300_18.jpg" />
                                                    </div>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }
}
export default ProjectList;