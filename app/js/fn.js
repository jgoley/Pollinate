// Add listenTo method

var BaseView = function(options) {
    this.bindings = [];
    Parse.View.apply(this, [options]);
    Bees.viewIndex[this.cid] = this;
};
_.extend(BaseView.prototype, Parse.View.prototype, {
    listenTo: function(model, ev, callback) {
        model.bind(ev, callback, this);
        this.bindings.push({
            model: model,
            ev: ev,
            callback: callback
        });
    },
    stopListeningAll: function() {
        _.each(this.bindings, function(binding) {
            binding.model.unbind(binding.ev, binding.callback);
        });
        this.bindings = [];
    },
    dispose: function() {
        this.stopListeningAll();
        this.unbind();
        this.remove();
        _.invoke(this.subViews, 'dispose');
        delete Bees.viewIndex[this.cid];
        console.log("View removed", this.cid);
    }
});
BaseView.extend = Parse.View.extend;

Parse.Collection.prototype.where = function(attrs, first) {
    if (_.isEmpty(attrs)) return first ? void 0 : [];
    return this[first ? 'find' : 'filter'](function(model) {
        for (var key in attrs) {
            if (attrs[key] !== model.get(key)) return false;
        }
        return true;
    });
};

Parse.Collection.prototype.findWhere = function(attrs) {
    return this.where(attrs, true);
};

function disposeViews() {
    console.log("The Current View", Bees.currentView);
    if (Bees.currentView) Bees.currentView.dispose();
    if($('nav').hasClass('showing')){
      $('nav').removeClass('showing');
      $('.main-container').removeClass('menu-showing');
    } 
}

// Round numbers
function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

// Turn form data into object
$.fn.serializeObject = function() {
    return this.serializeArray().reduce(function(acum, i) {
        acum[i.name] = i.value;
        return acum;
    }, {});
};





Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a === b)
        return opts.fn(this);
    else
        return opts.inverse(this);
});

Handlebars.registerHelper("log", function(data) {
    return console.log(data);
});