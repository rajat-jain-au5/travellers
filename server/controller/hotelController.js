var Hotel = require("../Model/Hotel");
var Cart = require("../Model/Cart");
var Order = require("../Model/Order");
var User = require("../Model/User");
const hotelController = {};
// Get all hotels
hotelController.getAll = async (req, res) => {
  try {
    let hotel = await Hotel.find();
    //   console.log(hotel);
    res.send(hotel);
  } catch (err) {
    console.log(err);
  }
};


// Search hotel by city
hotelController.searchHotel = async (req, res) => {
  try {
    const userId = req.user.id;
    const { location, fromDate, toDate } = req.body;
    const search = {
      location,
      fromDate,
      toDate,
    };
    let user = await User.findOne({ _id: userId });
    user.trackingEvent.push(
       user.name + " searched " + search.location + " on " + new Date().toDateString().split(' ').join(' ')
    );

    user.save();
    let hotel = await Hotel.find({ city: location });
    // console.log(hotel)
    res.send(hotel);
  } catch (err) {
    console.log(err);
  }
};


// Add to cart 
hotelController.addCart = async (req, res) => {
  var userId = req.user.id;
  const { uid } = req.body;
  var cart = await Cart.findOne({ uid: userId });
  const hotel = {
    hotelId: req.body._id,
    name: req.body.name,
    city: req.body.city,
    price: req.body.price,
    ratings: req.body.ratings,
    visits: req.body.visits,
    completedBookings: req.body.completedBookings,
    draftBookings: req.body.draftBookings,
    tags: req.body.tags,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
  };

  if (cart == null) {
    const apost = new Cart();
    // console.log(apost);
    apost.hotels.push(hotel);
    apost.uid = userId;
    apost.save();
    res.send(apost.hotels);
  } else {
    var temp = cart.hotels.filter((el) => el.hotelId === hotel.hotelId)[0];
    if (typeof temp == "undefined") {
      cart.hotels.push(hotel);
    }

    cart.save();
    res.send(cart.hotels);
  }
};

// Get cart of indivisual user 
hotelController.getCart = async (req, res) => {
  try {
    var userId = req.user.id;
    const cart = await Cart.find({ uid: userId });
    res.send(cart[0].hotels);
  } catch (err) {
    console.log(err);
  }
};

// Delete from Cart
hotelController.deleteCart = async (req, res) => {
  try {
    var userId = req.user.id;
    var { id } = req.params;
    var cart = await Cart.findOne({ uid: userId });
    let test = cart.hotels.pull({ _id: id });
    cart.save();

    res.json({ data: id, msg: "successfully deleted Blog" });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
};


//Placed order and delete from cart
hotelController.addOrder = async (req, res) => {
  try {
    var userId = req.user.id;
    var order = await Order.findOne({ uid: userId });

   
    if (order == null) {
       console.log(order, req.body);
      const apost=new Order();
      apost.orders=(req.body)
      apost.uid = userId;
      apost.save();
      res.send(apost.orders);
      
       
    } else {
      order.orders=(order.orders.concat(req.body));
      order.save();
      res.send(order.orders);
    }
    let user = await User.findOne({ _id: userId });
    user.trackingEvent.push(
      user.name +
        " booked hotel" +
        " on " +
        new Date().toDateString().split(" ").join(" ")
    );

    user.save();

    var deleteCart = await Cart.findOne({ uid: userId });

    deleteCart.hotels = [];

    deleteCart.save();
  } catch (err) {
    console.log(err);
  }
};

// Get all orders
hotelController.getOrder = async (req, res) => {
  try {
    var userId = req.user.id;
    const cart = await Order.find({ uid: userId });
    res.send(cart[0].orders);
  } catch (err) {
    console.log(err);
  }
};
module.exports = hotelController;
