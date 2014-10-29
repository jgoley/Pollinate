this["Bees"] = this["Bees"] || {};
this["Bees"]["templates"] = this["Bees"]["templates"] || {};
this["Bees"]["templates"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header></header>\n<div class=\"main-container\"></div>\n<footer></footer>";
  },"useData":true});
this["Bees"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
this["Bees"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<button class=\"auth log-out\"><span>Log out</span></button>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "<button class=\"auth log-in\"><span>Log in</span></button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, escapeExpression=this.escapeExpression, buffer = "<h1></h1>\n<button class='show-menu'><span>Menu</span></button>\n"
    + escapeExpression(helpers.log.call(depth0, (depth0 != null ? depth0.session : depth0), {"name":"log","hash":{},"data":data}))
    + "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.session : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["Bees"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Email address\">\n<input type=\"password\" name=\"pass\" value=\"\" placeholder=\"password\">\n<input type=\"submit\" name=\"\" value=\"Login\">\n\n<p>Not logged in? <a href=\"#/newuser\">Create account</a></p>";
  },"useData":true});
this["Bees"]["templates"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n</ul>";
  },"useData":true});
this["Bees"]["templates"]["newuser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Username\">\n<select value=\"userType\">\n	<option>User Type</option>\n	<option value=\"beekeeper\">Beekeeper</option>\n	<option value=\"farmer\">Farmer</option>\n</select>\n<input type=\"password\" name=\"pass\" type=\"password\" placeholder=\"password\">\n<input type=\"password\" name=\"passCheck\" placeholder=\"password\">\n<input type=\"submit\" name=\"\" value=\"Login\">";
  },"useData":true});