import React, { Component } from "react";
import Slider from "react-slick";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllHotels, searchHotel,addCart } from "../actionCreators/hotelAction";
import Navbar from "./Navbar";
import { Redirect, withRouter } from "react-router-dom";


class Dashboard extends Component {
      state={
            location:"",
            fromDate:"",
            toDate:""
      }
  componentDidMount() {
    this.props.getAllHotels();
  }

  handleSearch=(e)=>{
        e.preventDefault();
        const {location,fromDate,toDate} = this.state
        const search={location,fromDate,toDate}
        this.props.searchHotel(search)
        this.setState({
              location:"",
              fromDate:"",
              toDate:""
        })
        this.props.history.push('searchresults')
  }
  render() {
  
    if (this.props.hotel.cartAdd === true) {
       return <Redirect to="/cart" />;
     }
     
    var settings = {
      dots: false,
      infinite: true,
      speed: 50,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrow: true,
      padding:20
    }
    return (
      <div>
        <Navbar />
        <div className="container-fluid mt-4">
          <div className="row">
            <div className="col">
              <Slider {...settings}>
                <div>
                  <img
                    src={require("../image/1.jpg")}
                    alt="First slide"
                    width="500px"
                    height="300px"
                  />
                </div>
                <div>
                  <img
                    src={require("../image/2.jpg")}
                    alt="Second slide"
                    width="500px"
                    height="300px"
                  />
                </div>
                <div>
                  <img
                    src={require("../image/3.jpg")}
                    alt="Second slide"
                    width="500px"
                    height="300px"
                  />
                </div>

                <div>
                  <img
                    src={require("../image/4.jpg")}
                    alt="Second slide"
                    width="500px"
                    height="300px"
                  />
                </div>
                <div>
                  <img
                    src={require("../image/5.jpg")}
                    alt="Second slide"
                    width="500px"
                    height="300px"
                  />
                </div>
                <div>
                  <img
                    src={require("../image/6.jpg")}
                    alt="Second slide"
                    width="500px"
                    height="300px"
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col search">
              <form
                className="search-form shadow"
                onSubmit={(e) => this.handleSearch(e)}
              >
                <div>
                  <label style={{ fontSize: 20 }}>Find Your Location</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="enter your location"
                    value={this.state.location}
                    onChange={(e) =>
                      this.setState({
                        location: e.target.value,
                      })
                    }
                  />
                </div>
                &nbsp;
                <div>
                  <label style={{ fontSize: 20 }}>From Date</label>

                  <input
                    className="form-control"
                    type="date"
                    placeholder="from date"
                    value={this.state.fromDate}
                    onChange={(e) =>
                      this.setState({
                        fromDate: e.target.value,
                      })
                    }
                  />
                </div>
                &nbsp;
                <div>
                  <label style={{ fontSize: 20 }}>To Date</label>

                  <input
                    className="form-control"
                    type="date"
                    placeholder="to date"
                    value={this.state.toDate}
                    onChange={(e) =>
                      this.setState({
                        toDate: e.target.value,
                      })
                    }
                  />
                </div>
                &nbsp;
                <button
                  style={{ marginTop: 35 }}
                  type="submit"
                  disabled={!this.state.location}
                  className="btn btn-success"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            {this.props.hotel.allhotels.map((ht, index) => {
              return (
                <div className="col-md-4">
                  <div key={index} className="card card-body mb-3 p-3">
                    <div>
                      <h4>
                        <b>{ht.name}</b>
                      </h4>
                    </div>
                    <div>
                      <h5 className="text-muted">{ht.seller}</h5>
                    </div>
                    <div>
                      <img
                        src={ht.imageUrl}
                        alt=""
                        width="300px"
                        height="200px"
                      />
                    </div>
                    <hr />
                    <div>
                      <p>{ht.description}</p>
                    </div>
                    <div>
                      <p>
                        <i className=" fa fa-map-marker shadow"></i> {ht.city}
                      </p>
                    </div>
                    <div className="text-center">
                      <button
                        className="btn btn-sm btn-warning "
                        onClick={() => this.props.addCart(ht)}
                      >
                        Book Now
                      </button>{" "}
                      &nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              );
            })}
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
  return bindActionCreators({ getAllHotels, searchHotel,addCart }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter( Dashboard));
