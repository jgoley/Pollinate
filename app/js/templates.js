this["Bees"] = this["Bees"] || {};
this["Bees"]["templates"] = this["Bees"]["templates"] || {};
this["Bees"]["templates"]["addHiveGroup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<ul>\n	<li class='new-hive-group'>\n	<input type=\"text\" name=\"Name\" placeholder=\"Name\">\n	<input type=\"text\" name=\"hiveCount\" placeholder=\"Number of Hives\">\n	<label for=\"availableBegin\">Available starting<input type=\"date\" name=\"availableBegin\" placeholder=\"Available Start\"></label>\n	<label for=\"availableEnd\">Ending<input type=\"date\" name=\"availableEnd\" placeholder=\"Available End\"></label>\n	</li>\n</ul>\n<input type=\"submit\" value=\"Add Hives\">";
  },"useData":true});
this["Bees"]["templates"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header></header>\n<section class='menu'></section>\n<section class=\"main-container\"></section>\n<footer></footer>";
  },"useData":true});
this["Bees"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
this["Bees"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<button class=\"account\"><span>My account</span></button>\n<button class=\"auth log-out\"><span>Log out</span></button>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "<button class=\"auth log-in\"><span>Log in</span></button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<h2>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h2>\n<button class='show-menu'><span>Menu</span></button>\n"
    + escapeExpression(helpers.log.call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"log","hash":{},"data":data}))
    + "\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["Bees"]["templates"]["hiveGroupListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<ul>\n	<li><h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</h1></li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.hiveCount : stack1), depth0))
    + " hives</li>\n	<li>Available "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableEnd : stack1), depth0))
    + " to "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableBegin : stack1), depth0))
    + "</li>\n	<button class=\"delete\">Delete</button>\n	<button class=\"edit\">Edit</button>\n	<button class=\"view\">View</button>\n</ul>";
},"useData":true});
this["Bees"]["templates"]["hiveGroups"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<button class=\"addGroup\">Add a Hive Group</button>";
  },"useData":true});
this["Bees"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Username\">\n<input type=\"password\" name=\"pass\" value=\"\" placeholder=\"Password\">\n<input type=\"submit\" name=\"\" value=\"Login\">\n\n<p>Not logged in? <a href=\"#/newuser\">Create account</a></p>";
  },"useData":true});
this["Bees"]["templates"]["map"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"map_canvas\"></div>";
  },"useData":true});
this["Bees"]["templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.beekeeper : stack1), {"name":"if","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "    		<li><a href=\"#/hivegroups\">My hive groups</a></li>\n    		<li><a href=\"#/search/farmers\">Search for Farmers</a></li>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "    		<li><a href=\"#/bids\">My Bids</a></li>\n    		<li><a href=\"#/search/beekeepers\">Search for Beekeepers</a></li>\n";
  },"6":function(depth0,helpers,partials,data) {
  return "    	<li><a href=\"\">Search Farmers</a></li>\n    	<li><a href=\"\">Search Beekeepers</a></li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</ul>";
},"useData":true});
this["Bees"]["templates"]["newuser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Username\">\n<input type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"Email address\">\n<input type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"Confirm Email address\">\n<select name='userType'>\n	<option>User Type</option>\n	<option value=\"beekeeper\">Beekeeper</option>\n	<option value=\"farmer\">Farmer</option>\n</select>\n<div class='form-block'>\n	<input type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" name=\"password\" type=\"password\" placeholder=\"password\">\n	<input type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" placeholder=\"Confirm password\">\n</div>\n\n<div class='form-block'>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" name=\"firstName\" placeholder=\"First Name\">\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" name=\"lastName\" placeholder=\"Last Name\">\n</div>\n\n<div class='form-block'>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" name=\"address\" placeholder=\"Street Address\">\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" name=\"city\" placeholder=\"City\">\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" name=\"state\" placeholder=\"State\">\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" name=\"zipCode\" placeholder=\"Zip Code\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Login\">";
},"useData":true});
this["Bees"]["templates"]["account"] = this["Bees"]["templates"]["account"] || {};
this["Bees"]["templates"]["account"]["edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"range\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"Range in miles\">\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"crop\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crop : stack1), depth0))
    + "\" placeholder=\"Crop\">\n<input type=\"text\" name=\"farmAcerage\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.farmAcerage : stack1), depth0))
    + "\" placeholder=\"Farm acerage\">\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n<input type=\"text\" name=\"firstName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" placeholder=\"First Name\">\n<input type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" placeholder=\"Last Name\">\n\n<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\">\n<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\">\n<input type=\"text\" name=\"state\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" placeholder=\"State\">\n<input type=\"text\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\">\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.beekeeper : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});