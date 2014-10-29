this["Bees"] = this["Bees"] || {};
this["Bees"]["templates"] = this["Bees"]["templates"] || {};
this["Bees"]["templates"]["application"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<header></header>\n<div class=\"main-container\"></div>\n<footer></footer>";
  },"useData":true});
this["Bees"]["templates"]["footer"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "            <h1>Footer</h1>";
  },"useData":true});
this["Bees"]["templates"]["header"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h1></h1>\n<button class='show-menu'><span>Menu</span></button>\n<button class=\"auth log-out\"><span>Log out</span></button>\n<button class=\"auth log-in\"><span>Log in</span></button>";
  },"useData":true});
this["Bees"]["templates"]["nav"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<ul>\n    <li>1</li>\n    <li>2</li>\n    <li>3</li>\n</ul>";
  },"useData":true});