import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from './Navbar'
import {getActivity} from '../actionCreators/hotelAction'
import { bindActionCreators } from 'redux'
class Activity extends Component {
      componentDidMount=()=>{
            this.props.getActivity();
      }
      render() {
            return (
                  <div>
                         <Navbar/>
                         <div className="container mt-5">
                               <div className="row">
                                     <div className="col-md-3">

                                     </div>
                                     <div className="col">
                                           {
                                                 this.props.hotel.activities.map(act=>
                                                    <div className="activity shadow"> 
                                                           {act}
                                                           </div>
                                                 )
                                           }
                                     </div>
                               </div>
                         </div>
                  </div>
            )
      }
}

const mapStateToProps=(state)=>{
      return state
}

const mapDispatchToProps =(dispatch)=>{
      return bindActionCreators({getActivity},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Activity)