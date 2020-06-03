import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { Modal, Button, Form } from "react-bootstrap";
import { bindActionCreators } from "redux";
import { registerUser, loginUser } from "../actionCreators/authAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../App.css";

toast.configure({
  autoClose: 2000,
  draggable: false,
});
class Home extends Component {
  state = {
    modal: false,
    name: "",
    email: "",
    password: "",
    msg: null,
    show: false,
    showLogin: false,
  };
  componentDidUpdate = (prevProps) => {
    const { error } = this.props;
    if (error !== prevProps.error) {
      if (error.id === "Register_Fail") {
        this.setState({
          msg: toast.error(error.msg.msg),
        });
      } else {
        this.setState({
          msg: null,
        });
      }
    }
    if (error !== prevProps.error) {
      if (error.id === "Login_Fail") {
        this.setState({
          msg: toast.error(error.msg.msg),
        });
      } else {
        this.setState({
          msg: null,
        });
      }
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.props.registerUser(user);

    this.setState({
      name: "",
      email: "",
      password: "",
    });
  };

  haandleLogin = (e) => {
    e.preventDefault();

    var user = {
      email: this.state.email,
      password: this.state.password,
    };
    

    this.props.loginUser(user);
  };

  // open and close login model
  handleShowLogin = () => {
    this.setState({
      showLogin: true,
      show: false,
    });
  };
  handleCloseLogin = () => {
    this.setState({
      showLogin: false,
    });
  };

  // open and close register model
  handleShow = () => {
    this.setState({
      show: true,
      showLogin: false,
    });
  };
  handleClose = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    if (localStorage.getItem("token")) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <nav class="navbar navbar-expand-md  navbar-color  overlay">
          <Link class="navbar-brand text-warning" style={{fontSize:30}} to="/">
            Travellers
          </Link>
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
            {/* <ul className="navbar-nav"></ul> */}
            {/* Signup model */}
            <ul className="nav navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link text-warning " onClick={this.handleShow}>
                  Sign Up
                </Link>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group controlId="formBasicname">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=" enter name..."
                          onChange={(e) =>
                            this.setState({ name: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="mt-3"
                        type="submit"
                        block
                        onClick={(e) => this.handleSubmit(e)}
                      >
                        Submit
                      </Button>
                      <br />
                      <p>
                        if you are already registered click here
                        <Link
                          style={{ color: "blue" }}
                          onClick={this.handleShowLogin}
                        >
                          Login
                        </Link>
                      </p>
                    </Form>
                  </Modal.Body>
                </Modal>
              </li>
              {/* Login Model */}

              <li className="nav-item">
                <Link
                  className="nav-link text-warning "
                  // href="/login"
                  onClick={this.handleShowLogin}
                >
                  Login
                </Link>
                <Modal
                  show={this.state.showLogin}
                  onHide={this.handleCloseLogin}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group role="form" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>
                      <Form.Group role="form" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                      </Form.Group>
                      <Button
                        variant="primary"
                        className="mt-3"
                        type="submit"
                        onClick={(e) => this.haandleLogin(e)}
                        block
                      >
                        Submit
                      </Button>
                      <br />
                      <p>
                        if you are not login click here
                        <Link
                          style={{ color: "blue" }}
                          onClick={this.handleShow}
                        >
                          Signup
                        </Link>
                      </p>
                    </Form>
                  </Modal.Body>
                </Modal>
              </li>
            </ul>
          </div>
        </nav>
        <div className="register">
          <img
            style={{ width: "100%", height: "87vh", backgroundPosition:"cover"}}
            src={require("../image/15.jpg")}
            alt=""
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapdispatchToProps = (dispatch) => {
  return bindActionCreators({ registerUser, loginUser }, dispatch);
};
export default connect(mapStateToProps, mapdispatchToProps)(Home);
