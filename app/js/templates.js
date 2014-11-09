this["Bees"] = this["Bees"] || {};
this["Bees"]["templates"] = this["Bees"]["templates"] || {};
this["Bees"]["templates"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class='"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "'>\n<header></header>\n<section class='menu'></section>\n<section class=\"main-container\"><img src='https://d13yacurqjgara.cloudfront.net/users/43718/screenshots/1137881/loadinganimation2.gif'></section>\n<footer></footer>\n</div>";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"user-image\" styles=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\"></div>\n\n<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</h1>\n\n<div class=\"basic-info\"></div>\n<div class=\"requests\"></div>\n";
},"useData":true});
this["Bees"]["templates"]["farmerIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"user-image\" styles=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\"></div>\n\n<h1>"
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
    + "</a></h2>\n<button class='show-menu'><span>Menu</span></button>\n<input placeholder=\"search\" class=\"search\" type=\"search\">\n";
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
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Username\" required>\n<input type=\"password\" name=\"pass\" value=\"\" placeholder=\"Password\" required>\n<input type=\"submit\" name=\"\" value=\"Login\">\n\n<p>Not signed up? <a href=\"#/newuser\">Create account</a></p>";
  },"useData":true});
this["Bees"]["templates"]["map"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"map_canvas\"></div>";
  },"useData":true});
this["Bees"]["templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<ul>\n\n        <li><a href=\"#/\">Home</a></li>\n";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), "beekeeper", {"name":"if_eq","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <li><a href=\"#/reviews\">Reviews</a></li>\n</ul>\n";
},"2":function(depth0,helpers,partials,data) {
  return "    		<li><a href=\"#/requests\">Requests</a></li>\n    		<li><a href=\"#/search\">Search for Farmers</a></li>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "            <li><a href=\"#/requests\">Requests</a></li>\n    		<li><a href=\"#/search\">Search for Beekeepers</a></li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["Bees"]["templates"]["shortList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"#/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</a>";
},"useData":true});
this["Bees"]["templates"]["userLanding"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<section><div class=\"top-info\"></div></section>\n<section class='requests-container'>\n	<div class=\"requests\">\n		<h1>Requests</h1>\n		<div class='request-list'></div>\n		<a href=\"#/requests\">View All Requests</a>\n	</div>\n</section>\n<section class='near-users-container'>\n	<div class=\"near-users\">\n		<a href=\"#/search\">Find More</a>\n	</div>\n</section>\n<section class='reviews-container'>\n	<div class=\"reviews\">\n		<h1>Reviews</h1>\n		<div class=\"reviews-list\"></div>\n		<a href=\"#/reviews\">View all Reviews</a>\n	</div>\n</section>";
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
  return buffer + "\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["account"]["editBeekeeper"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n<input type=\"text\" name=\"firstName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" placeholder=\"First Name\" required>\n<input type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" placeholder=\"Last Name\" required>\n\n<input type=\"text\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"email\" required>\n\n<input type=\"text\" name=\"businessName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" placeholder=\"Business name\" required>\n\n<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\" required>\n<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\" required>\n<input type=\"text\" name=\"state\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" placeholder=\"State\" required>\n<label for=\"zipCode\">Zip code</label><input type=\"number\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\" required>\n\n<label for=\"hivesTotal\">Total number of Hives</label><input type=\"number\" name=\"hivesTotal\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesTotal : stack1), depth0))
    + "\" placeholder=\"\" required>\n<label for=\"costPerHive\">Cost Per hive</label><input type=\"number\" name=\"costPerHive\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "\" placeholder=\"\" required>\n\n<label for=\"geoRangeRadius\">Geographic range</label><input type=\"number\" name=\"geoRangeRadius\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"maxDistFree\">Maximum transport distance before charge</label><input type=\"number\" name=\"maxDistFree\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"costPerMile\">Cents Per Mile</label><input type=\"number\" name=\"costPerMile\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + "\" placeholder=\"$\" required>\n\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["account"]["editFarmer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n<input type=\"text\" name=\"firstName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" placeholder=\"First Name\" required>\n<input type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" placeholder=\"Last Name\" required>\n\n<input type=\"text\" name=\"businessName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" placeholder=\"Business name\" required>\n\n<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\" required>\n<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\" required>\n<input type=\"text\" name=\"state\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" placeholder=\"State\" required>\n<input type=\"text\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\" required>\n\n<input type=\"number\" name=\"crop\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crop : stack1), depth0))
    + "\" placeholder=\"Crop\" required>\n<input type=\"number\" name=\"farmAcerage\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.farmAcerage : stack1), depth0))
    + "\" placeholder=\"Farm acerage\" required>\n\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"] = this["Bees"]["templates"]["beekeeperIndex"] || {};
this["Bees"]["templates"]["beekeeperIndex"]["base"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<section><div class=\"top-info\"></div></section>\n<section class='requests-container'>\n	<div class=\"requests\">\n		<h1>Requests</h1>\n		<div class='request-list'></div>\n		<a href=\"#/requests\">View All Requests</a>\n	</div>\n</section>\n<section class='near-users-container'>\n	<div class=\"near-users\">\n		<a href=\"#/search\">Find More</a>\n	</div>\n</section>\n<section class='reviews-container'>\n	<div class=\"reviews\">\n		<h1>Reviews</h1>\n	</div>\n</section>";
  },"useData":true});
this["Bees"]["templates"]["beekeeperIndex"]["details"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1>Details:</h1>\n<p>You have "
    + escapeExpression(((helper = (helper = helpers.hivesAvailable || (depth0 != null ? depth0.hivesAvailable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hivesAvailable","hash":{},"data":data}) : helper)))
    + " out of "
    + escapeExpression(((helper = (helper = helpers.hivesTotal || (depth0 != null ? depth0.hivesTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hivesTotal","hash":{},"data":data}) : helper)))
    + " hives available</p>\n";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"]["hivesOut"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1>Hives currently out:</h1>";
  },"useData":true});
this["Bees"]["templates"]["beekeeperIndex"]["hivesOutListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"#/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a>\n<p>Pickup date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "</p>";
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
this["Bees"]["templates"]["farmerIndex"] = this["Bees"]["templates"]["farmerIndex"] || {};
this["Bees"]["templates"]["farmerIndex"]["base"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<section><div class=\"top-info\"></div></section>\n<section class='requests-container'>\n	<div class=\"requests\">\n		<h1>Requests</h1>\n		<div class='request-list'></div>\n		<a href=\"#/requests\">View All Requests</a>\n	</div>\n</section>\n<section class='near-users-container'>\n	<div class=\"near-users\">\n		<a href=\"#/search\">Find More</a>\n	</div>\n</section>\n<section class='reviews-container'>\n	<div class=\"reviews\">\n		<h1>Reviews</h1>\n		<div class=\"reviews-list\"></div>\n		<a href=\"#/search\">View all Reviews</a>\n	</div>\n</section>";
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
  return "<label for=\"hivesTotal\">Total number of Hives Available</label><input type=\"number\" name=\"hivesAvailable\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesTotal : stack1), depth0))
    + "\" placeholder=\"\" required>\n<label for=\"costPerHive\">Cost Per hive</label><input type=\"number\" name=\"costPerHive\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "\" placeholder=\"\" required>\n\n<label for=\"geoRangeRadius\">Geographic range</label><input type=\"number\" name=\"geoRangeRadius\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"maxDistFree\">Maximum transport distance before charge</label><input type=\"number\" name=\"maxDistFree\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"costPerMile\">Cost Per Mile</label><input data-parsley-type=\"number\" name=\"costPerMile\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + "\" placeholder=\"$\" required>";
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
  return "<input type=\"text\" name=\"username\" value=\"\" placeholder=\"Username\" required>\n<input id=\"email\" type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"Email address\" required>\n<input type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"Confirm Email address\" data-parsley-equalto=\"#email\" required>\n<select name='userType' class='userType' required>\n	<option value=\"\">Choose Account Type</option>\n	<option value=\"beekeeper\">Beekeeper</option>\n	<option value=\"farmer\">Farmer</option>\n</select>\n<div class='form-block'>\n	<input id=\"pass\" type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" name=\"password\" type=\"password\" placeholder=\"password\" required>\n	<input type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" name=\"password\" placeholder=\"Confirm password\" data-parsley-equalto=\"#pass\" required>\n</div>\n\n<div class='form-block'>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" name=\"businessName\" placeholder=\"Name of Business\" required>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" name=\"firstName\" placeholder=\"First Name\" required>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" name=\"lastName\" placeholder=\"Last Name\" required>\n</div>\n\n<div class='form-block'>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" name=\"address\" placeholder=\"Street Address\" required>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" name=\"city\" placeholder=\"City\" required>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" name=\"state\" placeholder=\"State\" required>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" name=\"zipCode\" placeholder=\"Zip Code\" required>\n</div>\n\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<div class=\"userType-info\"></div>\n\n<input type=\"submit\" name=\"\" value=\"Login\">";
},"useData":true});
this["Bees"]["templates"]["requests"] = this["Bees"]["templates"]["requests"] || {};
this["Bees"]["templates"]["requests"]["base"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"requests\"></div>";
  },"useData":true});
this["Bees"]["templates"]["requests"]["listItemBeekeeper"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "accepted";
  },"3":function(depth0,helpers,partials,data) {
  return "notAccepted";
  },"5":function(depth0,helpers,partials,data) {
  return "archived ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "		<li>Archived: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.archivedBeekeeperDate : stack1), depth0))
    + "</li>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  return "		<button class='archive'>Archive</button>\n";
  },"12":function(depth0,helpers,partials,data) {
  return "		<button class='accept'>Accept</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"details ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + " requested by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n	<ul class='hidden'>\n		<li>"
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
    + "</li>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</ul>\n	<div class=\"actions\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		<button class='more-info'>More Info</button>\n	</div>\n</div>";
},"useData":true});
this["Bees"]["templates"]["requests"]["listItemFarmer"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "accepted";
  },"3":function(depth0,helpers,partials,data) {
  return "notAccepted";
  },"5":function(depth0,helpers,partials,data) {
  return "archived ";
  },"7":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "			<li>Archived: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.archivedFarmerDate : stack1), depth0))
    + "</li>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  return "		<button class='archive'>Archive</button>\n";
  },"12":function(depth0,helpers,partials,data) {
  return "	<button class='delete'>Cancel Request</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<div class=\"details ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + " hives from "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</p>\n	<ul class='hidden'>\n		<li>"
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
    + "</li>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "	</ul>\n	<div class=\"actions\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	<button class='more-info'>More Info</button>\n	</div>\n</div>";
},"useData":true});
this["Bees"]["templates"]["requests"]["solo"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, escapeExpression=this.escapeExpression, lambda=this.lambda, functionType="function", helperMissing=helpers.helperMissing;
  return "<h1>A Request</h1>\n"
    + escapeExpression(helpers.log.call(depth0, depth0, {"name":"log","hash":{},"data":data}))
    + "\n\n<ul>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.farmer : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.beekeeper : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n	<li>"
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "</li>	\n	<li>"
    + escapeExpression(((helper = (helper = helpers.numHives || (depth0 != null ? depth0.numHives : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"numHives","hash":{},"data":data}) : helper)))
    + "</li>	\n	<li>"
    + escapeExpression(((helper = (helper = helpers.totalCost || (depth0 != null ? depth0.totalCost : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalCost","hash":{},"data":data}) : helper)))
    + "</li>	\n	<li>"
    + escapeExpression(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"startDate","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"endDate","hash":{},"data":data}) : helper)))
    + "</li>	\n</ul>\n\n\n\n";
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
  return "<div class=\"form-container\"></div>\n<div class=\"search-results-container\"><img src=\"https://d13yacurqjgara.cloudfront.net/users/43718/screenshots/1137881/loadinganimation2.gif\" ></div>\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["name"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input name=\"businessName\"  type=\"text\" placeholder=\"Business Name\">\n<input name=\"name\" type=\"text\" placeholder=\"Name\">\n\n<input value=\"Search\" type=\"submit\">\n\n<div class=\"search-results\"></div>\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["nameSearch"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input name=\"businessName\"  type=\"text\" placeholder=\"Business Name\">\n\n<input value=\"Search\" type=\"submit\">\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["resultItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"#user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + " ("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + ")</a>";
},"useData":true});
this["Bees"]["templates"]["user"] = this["Bees"]["templates"]["user"] || {};
this["Bees"]["templates"]["user"]["beekeeperIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "<div class=\"user-image\" styles=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\"></div>\n<h1>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</h1>\n\n<h3>Number of hives available: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesAvailable : stack1), depth0))
    + "</h3>\n<h4>Distance from you: "
    + escapeExpression(((helper = (helper = helpers.distance || (depth0 != null ? depth0.distance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"distance","hash":{},"data":data}) : helper)))
    + " miles</h4>\n<ul class=\"cost-details\">\n	<li>Cost per hive $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "</li>\n	<li>Transportation fee: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + " per mile <span>if distance is over "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + " miles</span></li>\n</ul>\n\n<div class=\"new-request\"></div>\n\n<div class=\"reviews\">\n	<h2>Reviews</h2>\n</div>\n";
},"useData":true});
this["Bees"]["templates"]["user"]["farmerIndex"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"user-image\" styles=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\"></div>\n<h1>"
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
this["Bees"]["templates"]["userIndex"] = this["Bees"]["templates"]["userIndex"] || {};
this["Bees"]["templates"]["userIndex"]["base"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<section><div class=\"top-info\"></div></section>\n<section class='requests-container'>\n	<div class=\"requests\">\n		<h1>Requests</h1>\n		<div class='request-list'></div>\n		<a href=\"#/requests\">View All Requests</a>\n	</div>\n</section>\n<section class='near-users-container'>\n	<div class=\"near-users\">\n		<a href=\"#/search\">Find More</a>\n	</div>\n</section>\n<section class='reviews-container'>\n	<div class=\"reviews\">\n		<h1>Reviews</h1>\n	</div>\n</section>";
  },"useData":true});