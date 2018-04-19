let UserController = require("../controllers/UserController.js");
let ReviewController = require("../controllers/ReviewController.js");
let RestaurantController = require("../controllers/RestaurantController");
let OrderController = require("../controllers/OrderController");


module.exports = (app)=>{

  app.post("/users/login",UserController.login);
  app.post("/users/register",UserController.register);
  app.get("/users/:id",UserController.read);
  app.get("/users",UserController.all);

  app.post("/reviews",ReviewController.create);
  app.delete("/reviews",ReviewController.destroy);
  app.get("/reviews",ReviewController.all);
  app.get("/reviews/:id",ReviewController.read);

  app.post("/orders",OrderController.create);
  app.delete("/orders",OrderController.destroy);
  app.get("/orders/:id",OrderController.read);
  app.get("/orders",OrderController.all);

  app.post("/restaurants",RestaurantController.create);
  app.delete("/restaurants",RestaurantController.destroy);
  app.get("/restaurants",RestaurantController.all);
  app.get("/restaurants/:id",RestaurantController.read);
  //app.put("/tasks/:id",TaskController.mod_task);

}

