this["Bees"] = this["Bees"] || {};
this["Bees"]["templates"] = this["Bees"]["templates"] || {};
this["Bees"]["templates"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "'>\n<header></header>\n<section class='menu'></section>\n<section class=\"main-container\"></section>\n<footer></footer>\n</div>";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h1>\n\n<div class=\"requests\"></div>\n\n<div class=\"hive-groups\"></div>";
},"useData":true});
this["Bees"]["templates"]["farmerIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h1>";
},"useData":true});
this["Bees"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
this["Bees"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h2><a href=\"#/\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></h2>\n<button class='show-menu'><span>Menu</span></button>\n";
},"3":function(depth0,helpers,partials,data) {
  return "<button class=\"account\"><span>My account</span></button>\n<button class=\"auth log-out\"><span>Log out</span></button>\n";
  },"5":function(depth0,helpers,partials,data) {
  return "<button class=\"auth log-in\"><span>Log in</span></button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["Bees"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Username\">\n<input type=\"password\" name=\"pass\" value=\"\" placeholder=\"Password\">\n<input type=\"submit\" name=\"\" value=\"Login\">\n\n<p>Not signed up? <a href=\"#/newuser\">Create account</a></p>";
  },"useData":true});
this["Bees"]["templates"]["map"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"map_canvas\"></div>";
  },"useData":true});
this["Bees"]["templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), "beekeeper", {"name":"if_eq","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "    		<li><a href=\"#/requests\">My requests</a></li>\n    		<li><a href=\"#/search/farmer\">Search for Farmers</a></li>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "    		<li><a href=\"#/requests\">My Requests</a></li>\n    		<li><a href=\"#/search/beekeeper\">Search for Beekeepers</a></li>\n";
  },"6":function(depth0,helpers,partials,data) {
  return "    	<li><a href=\"\">Search Farmers</a></li>\n    	<li><a href=\"\">Search Beekeepers</a></li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<ul>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n</ul>";
},"useData":true});
this["Bees"]["templates"]["account"] = this["Bees"]["templates"]["account"] || {};
this["Bees"]["templates"]["account"]["edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"geoRangeRadius\" value=\""
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
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n\n<input type=\"text\" name=\"firstName\" value=\""
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
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), "beekeeper", {"name":"if_eq","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["account"]["editBeekeeper"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n<input type=\"text\" name=\"firstName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" placeholder=\"First Name\">\n<input type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" placeholder=\"Last Name\">\n\n<input type=\"text\" name=\"businessName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" placeholder=\"Business name\">\n\n<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\">\n<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\">\n<input type=\"text\" name=\"state\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" placeholder=\"State\">\n<label for=\"zipCode\">Zip code</label><input type=\"text\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\">\n\n<label for=\"hivesTotal\">Total number of Hives</label><input type=\"text\" name=\"hivesTotal\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesTotal : stack1), depth0))
    + "\" placeholder=\"\">\n<label for=\"costPerHive\">Cost Per hive</label><input type=\"text\" name=\"costPerHive\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "\" placeholder=\"\">\n\n<label for=\"geoRangeRadius\">Geographic range</label><input type=\"text\" name=\"geoRangeRadius\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"miles\">\n<label for=\"maxDistFree\">Maximum transport distance before charge</label><input type=\"text\" name=\"maxDistFree\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + "\" placeholder=\"miles\">\n<label for=\"costPerMile\">Cost Per Mile</label><input type=\"text\" name=\"costPerMile\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + "\" placeholder=\"$\">\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["account"]["editFarmer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n<input type=\"text\" name=\"firstName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" placeholder=\"First Name\">\n<input type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" placeholder=\"Last Name\">\n\n<input type=\"text\" name=\"businessName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" placeholder=\"Business name\">\n\n<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\">\n<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\">\n<input type=\"text\" name=\"state\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" placeholder=\"State\">\n<input type=\"text\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\">\n\n<input type=\"text\" name=\"crop\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crop : stack1), depth0))
    + "\" placeholder=\"Crop\">\n<input type=\"text\" name=\"farmAcerage\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.farmAcerage : stack1), depth0))
    + "\" placeholder=\"Farm acerage\">\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["bids"] = this["Bees"]["templates"]["bids"] || {};
this["Bees"]["templates"]["bids"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
this["Bees"]["templates"]["bids"]["listItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<ul>\n<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.beekeeper : depth0)) != null ? stack1.username : stack1), depth0))
    + "</li>\n<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.hiveGroup : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</li>\n<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.bid : depth0)) != null ? stack1.formatedDate : stack1), depth0))
    + "</li>\n</ul>\n<button class='revoke'>Revoke Bid</button>";
},"useData":true});
this["Bees"]["templates"]["hiveGroups"] = this["Bees"]["templates"]["hiveGroups"] || {};
this["Bees"]["templates"]["hiveGroups"]["UserListItem"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "	<p>Open bid</p>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "	<button class=\"bid\">Bid</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<ul>\n	<li><h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</h1></li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.hiveCount : stack1), depth0))
    + " hives</li>\n	<li>Available "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableEnd : stack1), {"name":"dateFormat","hash":{},"data":data})))
    + " to "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableBegin : stack1), {"name":"dateFormat","hash":{},"data":data})))
    + "</li>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.bid : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</ul>";
},"useData":true});
this["Bees"]["templates"]["hiveGroups"]["add"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<ul>\n	<li class='new-hive-group'>\n	<input type=\"text\" name=\"Name\" placeholder=\"Name\">\n	<input type=\"text\" name=\"hiveCount\" placeholder=\"Number of Hives\">\n	<label for=\"availableBegin\">Available starting<input type=\"date\" name=\"availableBegin\" placeholder=\"Available Start\"></label>\n	<label for=\"availableEnd\">Ending<input type=\"date\" name=\"availableEnd\" placeholder=\"Available End\"></label>\n	</li>\n</ul>\n<input type=\"submit\" value=\"Add Hives\">";
  },"useData":true});
this["Bees"]["templates"]["hiveGroups"]["edit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<form>\n	<li><input type=\"text\" name=\"Name\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.Name : stack1), depth0))
    + "\"></li>\n	<li><input type=\"text\" name=\"hiveCount\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.hiveCount : stack1), depth0))
    + "\"></li>\n	<input type=\"date\" name=\"availableEnd\" value="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableEnd : stack1), depth0))
    + " >\n	<input type=\"date\" name=\"availableBegin\" value="
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableBegin : stack1), depth0))
    + " >\n	<div>\n	<button class=\"update\">Update</button>\n	<button class=\"delete\">Delete</button>\n	</div>\n</form>";
},"useData":true});
this["Bees"]["templates"]["hiveGroups"]["hiveGroup"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<ul>\n	<li><h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</h1></li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.hiveCount : stack1), depth0))
    + " hives</li>\n	<li>Available "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableEnd : stack1), {"name":"dateFormat","hash":{},"data":data})))
    + " to "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableBegin : stack1), {"name":"dateFormat","hash":{},"data":data})))
    + "</li>\n	<button class=\"edit\">Edit</button>\n	<button class=\"delete\">Delete</button>\n</ul>";
},"useData":true});
this["Bees"]["templates"]["hiveGroups"]["list"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<button class=\"addGroup\">Add a Hive Group</button>";
  },"useData":true});
this["Bees"]["templates"]["hiveGroups"]["listItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<ul>\n	<li><h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.Name : stack1), depth0))
    + "</h1></li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.hiveCount : stack1), depth0))
    + " hives</li>\n	<li>Available "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableEnd : stack1), {"name":"dateFormat","hash":{},"data":data})))
    + " to "
    + escapeExpression(((helpers.dateFormat || (depth0 && depth0.dateFormat) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.group : depth0)) != null ? stack1.availableBegin : stack1), {"name":"dateFormat","hash":{},"data":data})))
    + "</li>\n	<button class=\"view\">View</button>\n	<button class=\"edit\">Edit</button>\n	<button class=\"delete\">Delete</button>\n</ul>";
},"useData":true});
this["Bees"]["templates"]["hiveGroups"]["listUser"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h1>Hive groups of "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h1>";
},"useData":true});
this["Bees"]["templates"]["newUser"] = this["Bees"]["templates"]["newUser"] || {};
this["Bees"]["templates"]["newUser"]["beekeeper"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<label for=\"hivesTotal\">Total number of Hives Available</label><input type=\"text\" name=\"hivesAvailable\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesTotal : stack1), depth0))
    + "\" placeholder=\"\">\n<label for=\"costPerHive\">Cost Per hive</label><input type=\"text\" name=\"costPerHive\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "\" placeholder=\"\">\n\n<label for=\"geoRangeRadius\">Geographic range</label><input type=\"text\" name=\"geoRangeRadius\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"miles\">\n<label for=\"maxDistFree\">Maximum transport distance before charge</label><input type=\"text\" name=\"maxDistFree\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + "\" placeholder=\"miles\">\n<label for=\"costPerMile\">Cost Per Mile</label><input type=\"text\" name=\"costPerMile\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + "\" placeholder=\"$\">";
},"useData":true});
this["Bees"]["templates"]["newUser"]["farmer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"crop\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crop : stack1), depth0))
    + "\" placeholder=\"Crop\">\n<input type=\"text\" name=\"farmAcerage\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.farmAcerage : stack1), depth0))
    + "\" placeholder=\"Farm acerage\">";
},"useData":true});
this["Bees"]["templates"]["newUser"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"username\" value=\"\" placeholder=\"Username\">\n<input type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"Email address\">\n<input type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"Confirm Email address\">\n<select name='userType' class='userType'>\n	<option>User Type</option>\n	<option value=\"beekeeper\">Beekeeper</option>\n	<option value=\"farmer\">Farmer</option>\n</select>\n<div class='form-block'>\n	<input type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" name=\"password\" type=\"password\" placeholder=\"password\">\n	<input type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" placeholder=\"Confirm password\">\n</div>\n\n<div class='form-block'>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" name=\"businessName\" placeholder=\"Name of Business\">\n	<input type=\"text\" value=\""
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
    + "\" name=\"zipCode\" placeholder=\"Zip Code\">\n</div>\n\n<div class=\"userType-info\">\n	\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Login\">";
},"useData":true});
this["Bees"]["templates"]["requests"] = this["Bees"]["templates"]["requests"] || {};
this["Bees"]["templates"]["requests"]["listItemBeekeeper"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "accepted";
  },"3":function(depth0,helpers,partials,data) {
  return "notAccepted";
  },"5":function(depth0,helpers,partials,data) {
  return "archived ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"unless","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"8":function(depth0,helpers,partials,data) {
  return "		<button class='archive'>Archive</button>\n";
  },"10":function(depth0,helpers,partials,data) {
  return "	<button class='accept'>Accept</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"details ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	<ul>\n		<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n		<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + ": "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</li>\n		<li>Number of Hives: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + "</li>\n		<li>Cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.totalCost : stack1), depth0))
    + "</li>\n		<li>Miles over: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.milesOver : stack1), depth0))
    + "</li>\n		<li>Dates: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.startDate : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "</li>\n		<li>Requested: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.createdAt : stack1), depth0))
    + "</li>\n	</ul>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(10, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
this["Bees"]["templates"]["requests"]["listItemFarmer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "accepted";
  },"3":function(depth0,helpers,partials,data) {
  return "notAccepted";
  },"5":function(depth0,helpers,partials,data) {
  return "archived ";
  },"7":function(depth0,helpers,partials,data) {
  return "	<h1>Accepted!</h1>\n";
  },"9":function(depth0,helpers,partials,data) {
  return "	<h1>Pending!</h1>\n";
  },"11":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"unless","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"12":function(depth0,helpers,partials,data) {
  return "		<button class='archive'>Archive</button>\n";
  },"14":function(depth0,helpers,partials,data) {
  return "	<button class='delete'>Cancel Request</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"details ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archived : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.program(9, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	<ul>\n		<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + ": "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</li>\n		<li>Number of Hives: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + "</li>\n		<li>Cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.totalCost : stack1), depth0))
    + "</li>\n		<li>Miles over: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.milesOver : stack1), depth0))
    + "</li>\n		<li>Dates: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.startDate : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "</li>\n		<li>Requested: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.createdAt : stack1), depth0))
    + "</li>\n	</ul>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(11, data),"inverse":this.program(14, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});
this["Bees"]["templates"]["reviews"] = this["Bees"]["templates"]["reviews"] || {};
this["Bees"]["templates"]["reviews"]["add"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<textarea name=\"body\" placeholder=\"Your review\"></textarea>\n\n<input type=\"submit\" value=\"Submit Review\"><button type=\"button\" class=\"cancel-review\">Cancel</button>";
  },"useData":true});
this["Bees"]["templates"]["reviews"]["listItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h1><a href='#/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.reviewer : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.reviewer : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a></h1>\n<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.body : stack1), depth0))
    + "</p>\n<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.createdAt : stack1), depth0))
    + "</p>";
},"useData":true});
this["Bees"]["templates"]["reviews"]["new"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<button class=\"addReview\">Add a Review</button>";
  },"useData":true});
this["Bees"]["templates"]["search"] = this["Bees"]["templates"]["search"] || {};
this["Bees"]["templates"]["search"]["distance"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input name=\"distance\" type=\"text\" placeholder=\"Distance in miles\">\n<input value=\"Search\" type=\"submit\">\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"initial-results-container\"><img src=\"https://d13yacurqjgara.cloudfront.net/users/43718/screenshots/1137881/loadinganimation2.gif\" ></div>\n\n<div class=\"form-container\"></div>\n\n<div class=\"search-results-container\"></div>\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["name"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input name=\"businessName\"  type=\"text\" placeholder=\"Business Name\">\n<input name=\"name\" type=\"text\" placeholder=\"Name\">\n\n<input value=\"Search\" type=\"submit\">\n\n<div class=\"search-results\"></div>\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["nameSearch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input name=\"businessName\"  type=\"text\" placeholder=\"Business Name\">\n\n<input value=\"Search\" type=\"submit\">\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["resultItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"\" class=\"user\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + " ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + ")</a>";
},"useData":true});
this["Bees"]["templates"]["user"] = this["Bees"]["templates"]["user"] || {};
this["Bees"]["templates"]["user"]["beekeeperIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</h1>\n\n"
    + escapeExpression(helpers.log.call(depth0, depth0, {"name":"log","hash":{},"data":data}))
    + "\n\n<h3>Number of hives available: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesAvailable : stack1), depth0))
    + "</h3>\n<h4>Distance from you: "
    + escapeExpression(((helper = (helper = helpers.distance || (depth0 != null ? depth0.distance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"distance","hash":{},"data":data}) : helper)))
    + " miles</h4>\n<ul class=\"cost-details\">\n	<li>Cost per hive $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "</li>\n	<li>Transportation fee: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + " per mile <span>if distance is over "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + " miles</span></li>\n</ul>\n\n<div class=\"request\"></div>\n\n<div class=\"reviews\">\n	<h2>Reviews</h2>\n</div>\n";
},"useData":true});
this["Bees"]["templates"]["user"]["farmerIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</h1>\n<div class=\"reviews\"></div>\n";
},"useData":true});
this["Bees"]["templates"]["user"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</h1>\n\n<h1>Number of hives available: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.availableHives : stack1), depth0))
    + "</h1>\n<h2>Details</h2>\n<ul>\n	<li>Base Cost per hive $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "</li>\n	<li>Transport cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + " if distance is over "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + " miles</li>\n</ul>\n\n<div class=\"request\"></div>\n\n<div class=\"reviews\"></div>\n<button class=\"addReview\">Add a review</button>\n";
},"useData":true});
this["Bees"]["templates"]["user"]["request"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"requestDetails\">\n<p>Number of hives requested: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + "</p>\n<p>Miles over: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.milesOver : stack1), depth0))
    + "</p>\n<p>Milage Cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.mileageCost : stack1), depth0))
    + "</p>\n<h3>Total Cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.totalCost : stack1), depth0))
    + "</h3>\n\n<label for='startDate'>Start Date of service</label><input type='date' name='startDate'>\n<label for='endDate'>End Date of service</label><input type='date' name='endDate'>\n\n<button class='getBees' >Get some Bees</button>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n\n<input name='numHives' value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + "\" type='text'>\n<button class='calculate' >calculate cost</button>\n\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.totalCost : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n\n";
},"useData":true});