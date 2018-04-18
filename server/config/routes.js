let UserController = require("../controllers/UserController.js");
let ReviewController = require("../controllers/ReviewController.js");
let RestaurantController = require("../controllers/RestaurantController");

module.exports = (app)=>{

  app.post("/users/login",UserController.login);
  app.post("/users/register",UserController.register);
  app.post("/reviews",ReviewController.create);
  //app.delete("/reviews/:id",ReviewController.destroy);
  app.post("/restaurants",RestaurantController.create);
  app.delete("/restaurants",RestaurantController.destroy);
  //app.put("/tasks/:id",TaskController.mod_task);

}
