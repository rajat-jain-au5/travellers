import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addCart} from '../actionCreators/hotelAction'
import Navbar  from './Navbar'
import { Redirect } from 'react-router-dom'
class Search extends Component {
      render() {
                
                 if(this.props.hotel.cartAdd === true){
                      return <Redirect to="/cart"/>
                 }
                 return (
                   <div>
                     <Navbar />
                     <div className="container mt-5">
                       <div className="row">
                         { this.props.hotel.searchResult == "" ? "Found No Result":
                         this.props.hotel.searchResult.map((ht, index) => {
                           return (
                             <div key={index} className="row border">
                               <div className="col-md-4 rounded p-3">
                                 <img
                                   src={ht.imageUrl}
                                   alt=""
                                   width="250px"
                                   height="300px"
                                 />
                               </div>
                               <div className="col p-3 desc">
                                 <h4>
                                   <div>
                                     <b>{ht.name}</b>
                                   </div>
                                 </h4>

                                 <div>
                                   <p>{ht.description}</p>
                                 </div>
                                 <div>
                                   <p>
                                     <i className=" fa fa-map-marker shadow"></i>
                                     {ht.city}
                                   </p>
                                 </div>
                                 <div>
                                   <p>
                                     <i class="fa fa-tags"></i>
                                     {ht.tags}
                                   </p>
                                 </div>
                                 <div>
                                   <p>₹ {ht.price}</p>
                                 </div>
                                 <div className="float-right">
                                   <button
                                     className="btn btn-sm btn-warning "
                                     onClick={() => this.props.addCart(ht)}
                                   >
                                     Book Now
                                   </button>{" "}
                                   &nbsp;&nbsp;
                                 </div>
                               </div>

                               <hr />
                             </div>
                           );
                         })}
                       </div>
                     </div>
                   </div>
                 );
               }
}

const mapStateToProps=(state)=>{
      return state

}

const mapDispatchToProps =(dispatch)=>{
      return bindActionCreators({addCart},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Search)