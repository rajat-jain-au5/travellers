import React, { Component } from "react";
import { Link, Redirect,withRouter } from "react-router-dom";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "../App.css";
class Navbar extends Component {
  logOutUser = () => {
    localStorage.removeItem("token");
  };
  render() {
    if (localStorage.getItem("token") === null) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <nav className="navbar navbar-expand-md  navbar-color  overlay1">
          <a className="navbar-brand text-white " href="/dashboard">
            Traveller
          </a>
          <button
            className="navbar-toggler navbar-toggler-right bg-info "
            type="button"
            data-toggle="collapse"
            data-target="#navb"
            aria-expanded="true"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div id="navb" className="navbar-collapse collapse hide">
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <div className="nav-link text-white">
                  <span className="fa fa-user">
                    {" "}
                    &nbsp;
                    {localStorage.getItem("name")}
                  </span>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link text-white ">
                  <Link to="/cart" className="cart">
                    <span class="fa fa-shopping-cart"> Cart</span>
                  </Link>
                </div>
              </li>
              &nbsp;&nbsp;
              <li className="nav-item" style={{ marginTop: 5, border: "None" }}>
                <DropdownButton
                  id="dropdown-basic-button"
                  //  title="user"
                  variant="white"
                  size="md"
                  border="none"
                >
                  <Dropdown.Item href="/order">Booking history</Dropdown.Item>
                  {/* <Dropdown.Item href="/activity">
                                   Activity
                                 </Dropdown.Item> */}
                  <Dropdown.Item href="./" onClick={this.logOutUser}>
                    Logout
                  </Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
