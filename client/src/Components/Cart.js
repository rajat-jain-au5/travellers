import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getCarts,
  deleteFromCart,
  addOrder,
} from "../actionCreators/hotelAction";
import Navbar from "./Navbar";
import { Link} from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure({
  autoClose: 2000,
  draggable: false,
});
class Cart extends Component {
  componentDidMount = () => {
    this.props.getCarts();
  };

  deleteCart = (id) => {
    this.props.deleteFromCart(id);
    toast.error("item is removed from cart");
  };
  render() {
   
    return (
      <div>
        <Navbar />
        <div style={{ backgroundColor: "#F1F3F6" }}>
          <div
            className="card shadow p-2 mt-3 bg"
            style={{ marginLeft: "100px", width: "50rem" }}
          >
            <div class="card-header">My Cart</div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                {this.props.hotel.addCart == ""
                  ? "Your Cart is empty"
                  : this.props.hotel.addCart.map((it, index) => {
                      return (
                        <div className="container">
                          <div className="row">
                            <div key={index} className="col-md-3 rounded">
                              <img
                                src={it.imageUrl}
                                alt=""
                                width="120px"
                                height="150px"
                              />
                              <br />
                            </div>
                            <div className="col-md-9">
                              <p className="cart-item">
                                {it.name}
                                <br />
                                <span style={{ fontSize: 20 }}>{it.city}</span>
                                <br />
                              </p>
                              <h6>₹ {it.price}</h6>
                              <button
                                onClick={() => this.deleteCart(it._id)}
                                className="btn btn-md"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </li>
              <li class="list-group-item">
                <div>
                  Total cart value=
                  {this.props.hotel.addCart.reduce((acc, b) => {
                    return acc + b.price;
                  }, 0)}
                </div>

                <button
                  onClick={() => this.props.addOrder(this.props.hotel.addCart)}
                  className="btn btn-lg btn-orange float-right"
                >
                  <Link disabled={!this.props.hotel.addCart} to="/order">
                    Place Order
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ getCarts, deleteFromCart, addOrder }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
