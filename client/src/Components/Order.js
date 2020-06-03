import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
// import {Link} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import {getAllOrder} from '../actionCreators/hotelAction'
class Order extends Component {
      componentDidMount=()=>{
            this.props.getAllOrder()
      }
      render() {
            // console.log(this.props.hotel.orderList)
            return (
              <div>
                <Navbar />
                <div style={{ backgroundColor: "#F1F3F6" }}>
                  <div
                    className="card shadow p-2 mt-3 bg"
                    style={{ marginLeft: "100px", width: "50rem" }}
                  >
                    <div class="card-header">
                      <h3>Order history</h3>
                    </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">
                        {this.props.hotel.orderList.map((it, index) => {
                          return (
                            <div className="container">
                              <div className="row">
                                <div key={index} className="col-md-3 rounded">
                                  <img
                                    src={it.imageUrl}
                                    alt=""
                                    width="80px"
                                    height="80px"
                                  />
                                  <br />
                                </div>
                                <div className="col-md-9">
                                  <p className="cart-item">
                                    {it.name}
                                    <br />
                                    <span style={{ fontSize: 20 }}>
                                      {it.city}
                                    </span>
                                    <br />
                                  </p>
                                  <h6>₹ {it.price}</h6>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
      }
}


const mapStateToProps=(state)=>{
      return state
}
const mapdispatchToProps=(dispatch)=>{
      return bindActionCreators({ getAllOrder },dispatch);
}
export default connect(mapStateToProps,mapdispatchToProps)(Order)