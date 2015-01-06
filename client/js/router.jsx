var Backbone = require("backbone");

var Router = Backbone.Router.extend({
  routes: {
    "": "search",
    signup: "signup",
    signin: "signin",
    "schema/:name": "dataPage",
    user: "user",
    create: "create"
  },
  search: function() {
    console.log("Routing to home page...");
    if (localStorage.getItem("token")) {
      this.current = "search";
    } else {
      this.current = "signin";
    }
  },
  signup: function() {
    console.log("Routing to signup page...");
    this.current = "signup";
  },
  signin: function() {
    console.log("Routing to signin page...");
    this.current = "signin";
  },
  dataPage: function(schemaName) {
    console.log("Routing to schema...");
    this.current = "schemaController";
    this.schemaName = schemaName;
  },
  user: function() {
    console.log("Routing to user account page...");
    this.current = "user";
  },
  create: function() {
    console.log("Routing to user account page...");
    this.current = "create";
  }
});

module.exports = Router;
