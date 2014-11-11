this["Bees"] = this["Bees"] || {};
this["Bees"]["templates"] = this["Bees"]["templates"] || {};
this["Bees"]["templates"]["application"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<header></header>\n\n<div class=\"sb-slidebar sb-left\">\n    <nav class='off-canvas'>\n        \n    </nav>\n</div>\n";
  },"3":function(depth0,helpers,partials,data) {
  return "<div class='noAuth-header'><img src=\"images/logo.png\"></div>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div id=\"sb-site\" class=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.user : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<section class=\"main-container\"><img src='https://d13yacurqjgara.cloudfront.net/users/43718/screenshots/1137881/loadinganimation2.gif'></section>\n<footer></footer>\n</div>";
},"useData":true});
this["Bees"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "";
},"useData":true});
this["Bees"]["templates"]["header"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "	<a href=\"#\" class='sb-toggle-left show-menu'></a>\n	<h1 class=\"logo\"><a href=\"#/\">Pollinate</a></h1>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<nav class=\"main-menu\"></nav>\n";
},"useData":true});
this["Bees"]["templates"]["login"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input type=\"text\" name=\"userName\" value=\"\" placeholder=\"Username\" required>\n<input type=\"password\" name=\"pass\" value=\"\" placeholder=\"Password\" required>\n<input type=\"submit\" name=\"\" value=\"Login\">\n\n<p style=\"text-align:center\">or</p>\n\n<a href=\"#/newuser\" class=\"form-button\">Create account</a>";
  },"useData":true});
this["Bees"]["templates"]["map"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div id=\"map_canvas\"></div>";
  },"useData":true});
this["Bees"]["templates"]["nav"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), "beekeeper", {"name":"if_eq","hash":{},"fn":this.program(2, data),"inverse":this.program(4, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "<li><a href=\"#/requests\"  class=\"nav-link\">Requests</a></li>\n<li><a href=\"#/reviews\" class=\"nav-link\">Reviews</a></li>\n<li class=\"account\"><a href=\"#\" class=\"account-link\">a</a>\n    <ul class=\"admin-menu hidden\">\n        <li><a href=\"#/account\">My Account</a></li>\n        <li><a href=\"#\" class=\"log-out\">Log-out</a></li>\n    </ul>\n</li>\n\n";
},"2":function(depth0,helpers,partials,data) {
  return "<li><a href=\"#/search\"  class=\"nav-link\">Search for Farmers</a></li>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "<li><a href=\"#/search\" class=\"nav-link\">Search for Beekeepers</a></li>\n";
  },"6":function(depth0,helpers,partials,data) {
  return "<li><a class=\"log-in\" href=\"#\">Login</a></li>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1;
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.session : depth0)) != null ? stack1.user : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(6, data),"data":data});
  if (stack1 != null) { return stack1; }
  else { return ''; }
  },"useData":true});
this["Bees"]["templates"]["shortList"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"#/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</a>";
},"useData":true});
this["Bees"]["templates"]["userLanding"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  return "<section class=\"active-request-container\">\n	<div class=\"active-request-info\"></div>\n</section>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helperMissing=helpers.helperMissing, buffer = "<section class='requests-container'>\n	<div class=\"requests-list-container\">\n		<div class='requests'>\n			<h1 class=\"main-title\">Pending Requests</h1>\n		</div>\n		<a href=\"#/requests\" class=\"button\">View All Requests</a>\n	</div>\n</section>\n\n";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, (depth0 != null ? depth0.userType : depth0), "beekeeper", {"name":"if_eq","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<section class='near-users-container'>\n	<div class=\"near-users\">\n		<a href=\"#/search\" class=\"button\">Find More</a>\n	</div>\n</section>\n\n<section class='reviews-container'>\n	<div class=\"reviews-list-container\">\n		<h1 class=\"main-title\">Reviews</h1>\n		<div class=\"reviews\"></div>\n		<a href=\"#/reviews\" class=\"button\">View all Reviews</a>\n	</div>\n</section>";
},"useData":true});
this["Bees"]["templates"]["account"] = this["Bees"]["templates"]["account"] || {};
this["Bees"]["templates"]["account"]["edit"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<label for=\"hivesTotal\">Total number of Hives</label><input type=\"number\" name=\"hivesTotal\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesTotal : stack1), depth0))
    + "\" placeholder=\"\" required>\n<label for=\"costPerHive\">Cost Per hive</label><input type=\"number\" name=\"costPerHive\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "\" placeholder=\"\" required>\n\n<label for=\"geoRangeRadius\">Geographic range</label><input type=\"number\" name=\"geoRangeRadius\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"maxDistFree\">Maximum transport distance before charge</label><input type=\"number\" name=\"maxDistFree\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"costPerMile\">Cents Per Mile</label><input type=\"number\" name=\"costPerMile\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + "\" placeholder=\"$\" required>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<input type=\"text\" name=\"crop\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crop : stack1), depth0))
    + "\" placeholder=\"Crop\" required>\n<input type=\"text\" name=\"farmAcerage\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.farmAcerage : stack1), depth0))
    + "\" placeholder=\"Farm acerage\" required>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<p>account type: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + "</p>\n\n<input type=\"text\" name=\"firstName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" placeholder=\"First Name\" required>\n<input type=\"text\" name=\"lastName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" placeholder=\"Last Name\" required>\n\n<input type=\"text\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"email\" required>\n\n<input type=\"text\" name=\"businessName\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" placeholder=\"Business name\" required>\n\n<div class=\"address\">\n	<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\" required>\n	<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\" required>\n	<select name=\"state\" required>\n		<option value=\"\">State</option>\n		<option value=\"AL\">Alabama</option>\n		<option value=\"AK\">Alaska</option>\n		<option value=\"AZ\">Arizona</option>\n		<option value=\"AR\">Arkansas</option>\n		<option value=\"CA\">California</option>\n		<option value=\"CO\">Colorado</option>\n		<option value=\"CT\">Connecticut</option>\n		<option value=\"DE\">Delaware</option>\n		<option value=\"DC\">District Of Columbia</option>\n		<option value=\"FL\">Florida</option>\n		<option value=\"GA\">Georgia</option>\n		<option value=\"HI\">Hawaii</option>\n		<option value=\"ID\">Idaho</option>\n		<option value=\"IL\">Illinois</option>\n		<option value=\"IN\">Indiana</option>\n		<option value=\"IA\">Iowa</option>\n		<option value=\"KS\">Kansas</option>\n		<option value=\"KY\">Kentucky</option>\n		<option value=\"LA\">Louisiana</option>\n		<option value=\"ME\">Maine</option>\n		<option value=\"MD\">Maryland</option>\n		<option value=\"MA\">Massachusetts</option>\n		<option value=\"MI\">Michigan</option>\n		<option value=\"MN\">Minnesota</option>\n		<option value=\"MS\">Mississippi</option>\n		<option value=\"MO\">Missouri</option>\n		<option value=\"MT\">Montana</option>\n		<option value=\"NE\">Nebraska</option>\n		<option value=\"NV\">Nevada</option>\n		<option value=\"NH\">New Hampshire</option>\n		<option value=\"NJ\">New Jersey</option>\n		<option value=\"NM\">New Mexico</option>\n		<option value=\"NY\">New York</option>\n		<option value=\"NC\">North Carolina</option>\n		<option value=\"ND\">North Dakota</option>\n		<option value=\"OH\">Ohio</option>\n		<option value=\"OK\">Oklahoma</option>\n		<option value=\"OR\">Oregon</option>\n		<option value=\"PA\">Pennsylvania</option>\n		<option value=\"RI\">Rhode Island</option>\n		<option value=\"SC\">South Carolina</option>\n		<option value=\"SD\">South Dakota</option>\n		<option value=\"TN\">Tennessee</option>\n		<option value=\"TX\">Texas</option>\n		<option value=\"UT\">Utah</option>\n		<option value=\"VT\">Vermont</option>\n		<option value=\"VA\">Virginia</option>\n		<option value=\"WA\">Washington</option>\n		<option value=\"WV\">West Virginia</option>\n		<option value=\"WI\">Wisconsin</option>\n		<option value=\"WY\">Wyoming</option>\n	</select>\n	<input type=\"text\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\" required>\n</div>\n\n";
  stack1 = ((helpers.if_eq || (depth0 && depth0.if_eq) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), "beekeeper", {"name":"if_eq","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<label>Business description</label>\n	<textarea name=\"description\" class=\"business-description\" placeholder=\"Enter a description of your farm or pollination operation\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.description : stack1), depth0))
    + "</textarea>\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
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
    + "\" placeholder=\"Zip Code\" required>\n\n\n\n\n<label for=\"hivesTotal\">Total number of Hives</label><input type=\"number\" name=\"hivesTotal\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesTotal : stack1), depth0))
    + "\" placeholder=\"\" required>\n<label for=\"costPerHive\">Cost Per hive</label><input type=\"number\" name=\"costPerHive\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "\" placeholder=\"\" required>\n\n<label for=\"geoRangeRadius\">Geographic range</label><input type=\"number\" name=\"geoRangeRadius\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.geoRangeRadius : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"maxDistFree\">Maximum transport distance before charge</label><input type=\"number\" name=\"maxDistFree\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + "\" placeholder=\"miles\" required>\n<label for=\"costPerMile\">Cents Per Mile</label><input type=\"number\" name=\"costPerMile\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + "\" placeholder=\"$\" required>\n\n\n\n\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
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
    + "\" placeholder=\"Business name\" required>\n\n<div class=\"address\">\n	<input type=\"text\" name=\"address\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" placeholder=\"Street Address\" required>\n	<input type=\"text\" name=\"city\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" placeholder=\"City\" required>\n	<input type=\"text\" name=\"state\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.state : stack1), depth0))
    + "\" placeholder=\"State\" required>\n	<input type=\"text\" name=\"zipCode\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" placeholder=\"Zip Code\" required>\n</div>\n\n<input type=\"number\" name=\"crop\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crop : stack1), depth0))
    + "\" placeholder=\"Crop\" required>\n<input type=\"number\" name=\"farmAcerage\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.farmAcerage : stack1), depth0))
    + "\" placeholder=\"Farm acerage\" required>\n\n<div class=\"image\">\n	<input type=\"file\">\n</div>\n\n<input type=\"submit\" name=\"\" value=\"Update Account\">";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"] = this["Bees"]["templates"]["beekeeperIndex"] || {};
this["Bees"]["templates"]["beekeeperIndex"]["details"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h1 class=\"main-title\">Details:</h1>\n<p>You have "
    + escapeExpression(((helper = (helper = helpers.hivesAvailable || (depth0 != null ? depth0.hivesAvailable : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hivesAvailable","hash":{},"data":data}) : helper)))
    + " out of "
    + escapeExpression(((helper = (helper = helpers.hivesTotal || (depth0 != null ? depth0.hivesTotal : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hivesTotal","hash":{},"data":data}) : helper)))
    + " hives available</p>\n";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"]["hivesOut"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1 class=\"main-title\">Hives currently out:</h1>";
  },"useData":true});
this["Bees"]["templates"]["beekeeperIndex"]["hivesOutListItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"#/request/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + " to "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + " | Pickup date: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "</a>\n";
},"useData":true});
this["Bees"]["templates"]["beekeeperIndex"]["upcomming"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<a href=\"#/request/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + " Due to "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + " on "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.startDate : stack1), depth0))
    + "</a>";
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
  return "<section><div class=\"top-info\"></div></section>\n<section class='requests-container'>\n	<div class=\"requests\">\n		<h1 class=\"main-title\">Requests</h1>\n		<div class='request-list'></div>\n		<a href=\"#/requests\" class=\"button\">View All Requests</a>\n	</div>\n</section>\n<section class='near-users-container'>\n	<div class=\"near-users\">\n		<a href=\"#/search\" class=\"button\">Find More</a>\n	</div>\n</section>\n<section class='reviews-container'>\n	<div class=\"reviews\">\n		<h1 class=\"main-title\">Reviews</h1>\n		<div class=\"reviews-list\"></div>\n		<a href=\"#/search\" class=\"button\">View all Reviews</a>\n	</div>\n</section>";
  },"useData":true});
this["Bees"]["templates"]["messages"] = this["Bees"]["templates"]["messages"] || {};
this["Bees"]["templates"]["messages"]["message"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return escapeExpression(helpers.log.call(depth0, depth0, {"name":"log","hash":{},"data":data}))
    + "\n<div style=\"background:#ebebeb; margin-bottom:10px;\">\n<p>"
    + escapeExpression(((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper)))
    + "</p>\n"
    + escapeExpression(((helper = (helper = helpers.senderName || (depth0 != null ? depth0.senderName : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"senderName","hash":{},"data":data}) : helper)))
    + "\n</div>";
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
  return "<div class='form-block'>\n	<label>Username</label>\n	<input type=\"text\" name=\"username\" value=\"\" placeholder=\"\" required>\n</div>\n<div class='form-block email'>\n	<label>Email Address</label>\n	<input id=\"email\" type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"youremail@domain.com\" required >\n	<label>Confirm Email Address</label>\n	<input type=\"email\" name=\"email\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.email : stack1), depth0))
    + "\" placeholder=\"youremail@domain.com\" data-parsley-equalto=\"#email\" required>\n</div>\n<div class='form-block password'>\n	<label>Choose Account Type</label>\n	<select name='userType' class='userType' required>\n		<option value=\"\">Account Type</option>\n		<option value=\"beekeeper\">Beekeeper</option>\n		<option value=\"farmer\">Farmer</option>\n	</select>\n</div>\n<div class='form-block password'>\n	<label>Password</label>\n	<input id=\"pass\" type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" name=\"password\" type=\"password\" placeholder=\"\" required data-parsley-minlength=\"3\">\n	<label>Confirm Password</label>\n	<input type=\"password\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.password : stack1), depth0))
    + "\" name=\"password\" placeholder=\"\" data-parsley-equalto=\"#pass\" required data-parsley-minlength=\"3\">\n</div>\n<div class='form-block'>\n	<label>Name of Business</label>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "\" name=\"businessName\" placeholder=\"\" required>\n	<div class=\"name\">\n		<label>First name</label>\n		<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.firstName : stack1), depth0))
    + "\" name=\"firstName\" placeholder=\"\" required>\n		<label>Last Name</label>\n		<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.lastName : stack1), depth0))
    + "\" name=\"lastName\" placeholder=\"\" required>\n	</div>\n</div>\n<div class='form-block address'>\n	<label>Street Address</label>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.address : stack1), depth0))
    + "\" name=\"address\" placeholder=\"Street Address\" required>\n	<div>\n		<label>City</label>\n		<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.city : stack1), depth0))
    + "\" name=\"city\" placeholder=\"City\" required>\n		<select name=\"state\" required>\n			<option value=\"\">State</option>\n			<option value=\"AL\">Alabama</option>\n			<option value=\"AK\">Alaska</option>\n			<option value=\"AZ\">Arizona</option>\n			<option value=\"AR\">Arkansas</option>\n			<option value=\"CA\">California</option>\n			<option value=\"CO\">Colorado</option>\n			<option value=\"CT\">Connecticut</option>\n			<option value=\"DE\">Delaware</option>\n			<option value=\"DC\">District Of Columbia</option>\n			<option value=\"FL\">Florida</option>\n			<option value=\"GA\">Georgia</option>\n			<option value=\"HI\">Hawaii</option>\n			<option value=\"ID\">Idaho</option>\n			<option value=\"IL\">Illinois</option>\n			<option value=\"IN\">Indiana</option>\n			<option value=\"IA\">Iowa</option>\n			<option value=\"KS\">Kansas</option>\n			<option value=\"KY\">Kentucky</option>\n			<option value=\"LA\">Louisiana</option>\n			<option value=\"ME\">Maine</option>\n			<option value=\"MD\">Maryland</option>\n			<option value=\"MA\">Massachusetts</option>\n			<option value=\"MI\">Michigan</option>\n			<option value=\"MN\">Minnesota</option>\n			<option value=\"MS\">Mississippi</option>\n			<option value=\"MO\">Missouri</option>\n			<option value=\"MT\">Montana</option>\n			<option value=\"NE\">Nebraska</option>\n			<option value=\"NV\">Nevada</option>\n			<option value=\"NH\">New Hampshire</option>\n			<option value=\"NJ\">New Jersey</option>\n			<option value=\"NM\">New Mexico</option>\n			<option value=\"NY\">New York</option>\n			<option value=\"NC\">North Carolina</option>\n			<option value=\"ND\">North Dakota</option>\n			<option value=\"OH\">Ohio</option>\n			<option value=\"OK\">Oklahoma</option>\n			<option value=\"OR\">Oregon</option>\n			<option value=\"PA\">Pennsylvania</option>\n			<option value=\"RI\">Rhode Island</option>\n			<option value=\"SC\">South Carolina</option>\n			<option value=\"SD\">South Dakota</option>\n			<option value=\"TN\">Tennessee</option>\n			<option value=\"TX\">Texas</option>\n			<option value=\"UT\">Utah</option>\n			<option value=\"VT\">Vermont</option>\n			<option value=\"VA\">Virginia</option>\n			<option value=\"WA\">Washington</option>\n			<option value=\"WV\">West Virginia</option>\n			<option value=\"WI\">Wisconsin</option>\n			<option value=\"WY\">Wyoming</option>\n		</select>\n	</div>\n	<label>Zip Code</label>\n	<input type=\"text\" value=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.zipCode : stack1), depth0))
    + "\" name=\"zipCode\" placeholder=\"Zip Code\" maxlength=\"5\" size=\"5\" required>\n</div>\n\n<label>Business description</label>\n<textarea name=\"description\" placeholder=\"Enter a description of your farm or pollination operation\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.description : stack1), depth0))
    + "</textarea>\n\n<div class=\"image\">\n	<label>Profile image <span class=\"detail\">(image of your farm or apiary)</span></label>\n	<input type=\"file\">\n</div>\n<div class=\"userType-info\"></div>\n<input type=\"submit\" name=\"\" value=\"Login\">";
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
  return "			<li>Archived: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.archivedBeekeeperDate : stack1), depth0))
    + "</li>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"unless","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  return "				<button class='archive'>Archive</button>\n";
  },"12":function(depth0,helpers,partials,data) {
  return "			<button class='accept'>Accept</button>\n";
  },"14":function(depth0,helpers,partials,data) {
  return "			<button class='edit-request'>Edit Request</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"details ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	<a href=\"#/request/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">\n		"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + " requested by "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "\n		<ul class='hidden'>\n			<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n			<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + ": "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</li>\n			<li>Number of Hives: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + "</li>\n			<li>Cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.totalCost : stack1), depth0))
    + "</li>\n			<li>Miles over: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.milesOver : stack1), depth0))
    + "</li>\n			<li>Dates: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.startDate : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "</li>\n			<li>Message: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.message : stack1), depth0))
    + "</li>\n			<li>Requested: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.createdAt : stack1), depth0))
    + "</li>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</ul>\n	</a>\n	<div class=\"actions\">\n		\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		\n		<button class='more-info'>More Info</button>\n		\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"unless","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>";
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
  return "			<button class='archive'>Archive</button>\n";
  },"12":function(depth0,helpers,partials,data) {
  return "			<button class='delete'>Cancel Request</button>\n";
  },"14":function(depth0,helpers,partials,data) {
  return "			<button class='edit-request'>Edit Request</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"details ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(3, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n	<a href=\"#/request/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "\">\n		"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + " hives from "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "\n		<ul class='hidden'>\n			<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.userType : stack1), depth0))
    + ": "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.username : stack1), depth0))
    + "</li>\n			<li>Number of Hives: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.numHives : stack1), depth0))
    + "</li>\n			<li>Cost: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.totalCost : stack1), depth0))
    + "</li>\n			<li>Miles over: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.milesOver : stack1), depth0))
    + "</li>\n			<li>Dates: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.startDate : stack1), depth0))
    + " - "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.endDate : stack1), depth0))
    + "</li>\n			<li>Message: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.message : stack1), depth0))
    + "</li>\n			<li>Requested: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.formattedDates : depth0)) != null ? stack1.createdAt : stack1), depth0))
    + "</li>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"if","hash":{},"fn":this.program(7, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "		</ul>\n	</a>\n\n		<div class=\"actions\">\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(9, data),"inverse":this.program(12, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "			<button class='more-info'>More Info</button>\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedFarmer : stack1), {"name":"unless","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "		</div>\n</div>";
},"useData":true});
this["Bees"]["templates"]["requests"]["solo"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"unless","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(depth0,helpers,partials,data) {
  return "<button class='archive'>Archive</button>\n";
  },"4":function(depth0,helpers,partials,data) {
  return "<button class='accept'>Accept</button>\n";
  },"6":function(depth0,helpers,partials,data) {
  return "<button class=\"editRequest\">Edit request</button>\n";
  },"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda, buffer = "<h1 class=\"main-title\">Request</h1>\n<ul class=\"request-details\">\n	<li>Request ID: "
    + escapeExpression(((helper = (helper = helpers.objectId || (depth0 != null ? depth0.objectId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"objectId","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.farmer : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.beekeeper : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n	<li>"
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + escapeExpression(((helper = (helper = helpers.numHives || (depth0 != null ? depth0.numHives : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"numHives","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + escapeExpression(((helper = (helper = helpers.totalCost || (depth0 != null ? depth0.totalCost : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"totalCost","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + escapeExpression(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"startDate","hash":{},"data":data}) : helper)))
    + " - "
    + escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"endDate","hash":{},"data":data}) : helper)))
    + "</li>\n</ul>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.accepted : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.program(4, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<button class='more-info'>More Info</button>\n";
  stack1 = helpers.unless.call(depth0, ((stack1 = (depth0 != null ? depth0.request : depth0)) != null ? stack1.archivedBeekeeper : stack1), {"name":"unless","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});
this["Bees"]["templates"]["requests"]["soloEdit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "<h1 class=\"main-title\">Request</h1>\n\n<ul class=\"request-details\">\n	<li>Request ID: "
    + escapeExpression(((helper = (helper = helpers.objectId || (depth0 != null ? depth0.objectId : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"objectId","hash":{},"data":data}) : helper)))
    + "</li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.farmer : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n	<li>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.beekeeper : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "</li>\n	<li>"
    + escapeExpression(((helper = (helper = helpers.total || (depth0 != null ? depth0.total : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"total","hash":{},"data":data}) : helper)))
    + "</li>\n	<li><input type=\"number\" name=\"numHives\" value=\""
    + escapeExpression(((helper = (helper = helpers.numHives || (depth0 != null ? depth0.numHives : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"numHives","hash":{},"data":data}) : helper)))
    + "\"></li>	\n	<li><input name=\"startDate\" type=\"date\" value=\""
    + escapeExpression(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"startDate","hash":{},"data":data}) : helper)))
    + "\"> - <input type=\"date\" name=\"endDate\" value=\""
    + escapeExpression(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"endDate","hash":{},"data":data}) : helper)))
    + "\"></li>\n</ul>\n<button class=\"edit-request\">Update Request</button>\n<button class=\"cancel-edit cancel\">Cancel</button>\n\n\n\n";
},"useData":true});
this["Bees"]["templates"]["reviews"] = this["Bees"]["templates"]["reviews"] || {};
this["Bees"]["templates"]["reviews"]["add"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<textarea name=\"body\" placeholder=\"Your review\"></textarea>\n\n<input type=\"submit\" value=\"Submit Review\"><button type=\"button\" class=\"cancel-review\">Cancel</button>";
  },"useData":true});
this["Bees"]["templates"]["reviews"]["listItem"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "<div class=\"review-body\">\n	<p>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.review : depth0)) != null ? stack1.body : stack1), depth0))
    + "</p>\n</div>\n<div class=\"review-info\">\n	<div><a href='#/user/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.reviewer : depth0)) != null ? stack1.objectId : stack1), depth0))
    + "'>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.reviewer : depth0)) != null ? stack1.username : stack1), depth0))
    + "</a>\n	<p class=\"review-date\">"
    + escapeExpression(((helper = (helper = helpers.createdAt || (depth0 != null ? depth0.createdAt : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"createdAt","hash":{},"data":data}) : helper)))
    + "</p>\n	</div>\n</div>";
},"useData":true});
this["Bees"]["templates"]["reviews"]["new"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<button class=\"add-review\">Add a Review</button>";
  },"useData":true});
this["Bees"]["templates"]["search"] = this["Bees"]["templates"]["search"] || {};
this["Bees"]["templates"]["search"]["distance"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<input name=\"distance\" type=\"text\" placeholder=\"Distance in miles\">\n<input value=\"Search\" type=\"submit\">\n";
  },"useData":true});
this["Bees"]["templates"]["search"]["index"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "\n<div class=\"search-results-container\">\n	<div class=\"search-form-container\">\n	</div>	\n	<div class=\"search-params\"></div>\n	<div class=\"search-list-container\"></div>\n</div>\n<div class=\"map-container\"><img src=\"https://d13yacurqjgara.cloudfront.net/users/43718/screenshots/1137881/loadinganimation2.gif\" ></div>\n\n	\n";
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
this["Bees"]["templates"]["user"]["beekeeperIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "style=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\" ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"user-image beekeeper\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "></div>\n<div class='user-profile'>\n	<h1 class=\"business-name\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</h1>\n	<h2 class=\"crops\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.crops : stack1), depth0))
    + "</h2>\n	<div class=\"user-description\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\n</div>\n<div class=\"newMessage-container\">\n	<a href=\"#\" class=\"button newMessage\">Send a Message</a>\n</div>\n<div>\n	<h1 class=\"main-title\">Request Hives</h1>\n	<h3>Number of hives available: "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.hivesAvailable : stack1), depth0))
    + "</h3>\n	<h4>Distance from you: "
    + escapeExpression(((helper = (helper = helpers.distance || (depth0 != null ? depth0.distance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"distance","hash":{},"data":data}) : helper)))
    + " miles</h4>\n	<ul class=\"cost-details\">\n		<li>Cost per hive $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerHive : stack1), depth0))
    + "</li>\n		<li>Transportation fee: $"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.costPerMile : stack1), depth0))
    + " per mile <span>if distance is over "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.maxDistFree : stack1), depth0))
    + " miles</span></li>\n	</ul>\n	<div class=\"new-request\"></div>\n</div>\n<div class='reviews-container'>\n	<div class=\"reviews-list-container\">\n		<div class=\"reviews\">\n			<h1 class=\"main-title\">Reviews</h1>\n		</div>\n	</div>\n</div>";
},"useData":true});
this["Bees"]["templates"]["user"]["farmerIndex"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "style=\"background-image: url("
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), depth0))
    + ")\" ";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "<div class=\"user-image farmer\" ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.image : stack1), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "></div>\n<div class='user-profile'>\n	<h1 class=\"business-name\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.businessName : stack1), depth0))
    + "</h1>\n	<div class=\"user-description\">"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.user : depth0)) != null ? stack1.description : stack1), depth0))
    + "</div>\n</div>\n\n<div class=\"newMessage-container\">\n<a href=\"#\" class=\"button newMessage\">Send a message</a>\n</div>\n\n<div class='reviews-container'>\n	<div class=\"reviews-list-container\">\n		<h1 class=\"main-title\">Reviews</h1>\n		<div class=\"reviews\"></div>\n	</div>\n</div>\n";
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
this["Bees"]["templates"]["user"]["newMessage"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<textarea name=\"message\" placeholder=\"Enter your message\"></textarea>\n<input class=\"button\" type=\"submit\" value=\"Send message\">";
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
    + "</h3>\n\n<textarea name=\"message\" placeholder=\"Enter a message to the beekeeper\"></textarea>\n\n<label for='startDate'>Start Date of service</label><input type='date' name='startDate'>\n<label for='endDate'>End Date of service</label><input type='date' name='endDate'>\n\n<button class='getBees' >Get some Bees</button>\n</div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "\n<label>Number of hives needed</label>\n<input name='numHives' value=\""
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