let UserController = require("../controllers/UserController.js");
let ReviewController = require("../controllers/ReviewController.js");
let RestaurantController = require("../controllers/RestaurantController");
let OrderController = require("../controllers/OrderController");


module.exports = (app)=>{

  app.post("/api/users/login",UserController.login);
  app.post("/api/users/register",UserController.register);
  app.get("/api/users/:id",UserController.read);
  app.get("/api/users",UserController.all);
  app.put("/api/users/:id",UserController.update);

  app.post("/api/reviews",ReviewController.create);
  app.delete("/api/reviews",ReviewController.destroy);
  app.get("/api/reviews",ReviewController.all);
  app.get("/api/reviews/:id",ReviewController.read);
  app.put("/api/reviews/:id",ReviewController.update);

  app.post("/api/orders",OrderController.create);
  app.delete("/api/orders",OrderController.destroy);
  app.get("/api/orders/:id",OrderController.read);
  app.get("/api/orders",OrderController.all);
  app.put("/api/orders/:id",OrderController.update);

  app.post("/api/restaurants",RestaurantController.create);
  app.delete("/api/restaurants",RestaurantController.destroy);
  app.get("/api/restaurants",RestaurantController.all);
  app.get("/api/restaurants/:id",RestaurantController.read);
  app.put("/api/restaurants/:id",RestaurantController.update);

}

