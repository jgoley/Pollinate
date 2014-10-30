var BaseView = function(options) {
    this.bindings = [];
    Parse.View.apply(this, [options]);
};

_.extend(BaseView.prototype, Parse.View.prototype, {

    listenTo: function(model, ev, callback) {

        model.bind(ev, callback, this);
        this.bindings.push({
            model: model,
            ev: ev,
            callback: callback
        });
        console.log('listening');

    },

    stopListeningAll: function() {
        _.each(this.bindings, function(binding) {
            binding.model.unbind(binding.ev, binding.callback);
        });
        this.bindings = [];
        console.log('stop listening');

    },

    dispose: function() {
        this.unbindFromAll(); // Will unbind all events this view has bound to
        this.unbind(); // This will unbind all listeners to events from 
        // this view. This is probably not necessary 
        // because this view will be garbage collected.
        this.remove(); // Uses the default Parse.View.remove() method which
        // removes this.el from the DOM and removes DOM events.
        console.log('removing view');
    }

});

BaseView.extend = Parse.View.extend;


// Turn form data into object
$.fn.serializeObject = function() {
    return this.serializeArray().reduce(function(acum, i) {
        acum[i.name] = i.value;
        return acum;
    }, {});
};