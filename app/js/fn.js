var BaseView = function (options) {
    this.bindings = [];
    Parse.View.apply(this, [options]);
};

_.extend(BaseView.prototype, Parse.View.prototype, {

    listenTo: function (model, ev, callback) {

        model.bind(ev, callback, this);
        this.bindings.push({ model: model, ev: ev, callback: callback });
    },

    stopListeningAll: function () {
        _.each(this.bindings, function (binding) {
            binding.model.unbind(binding.ev, binding.callback);
        });
        this.bindings = [];
    },

    dispose: function () {
        this.unbindFromAll(); // Will unbind all events this view has bound to
        this.unbind();        // This will unbind all listeners to events from 
                              // this view. This is probably not necessary 
                              // because this view will be garbage collected.
        this.remove(); // Uses the default Backbone.View.remove() method which
                       // removes this.el from the DOM and removes DOM events.
    }

});

BaseView.extend = Parse.View.extend;


$.fn.serializeObject = function(){
  return this.serializeArray().reduce(function(acum, i){
    acum[i.name] = i.value;
    return acum;
  }, {});
};