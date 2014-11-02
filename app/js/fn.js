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
        _.invoke(this.subViews, 'dispose');
        console.log('removing view');
    }

});

BaseView.extend = Parse.View.extend;


function sendMail(fromEmail, toEmail, subject, body){

    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '_U-Rcirs9KnY-ZUFR2FBdQ',
        'message': {
          'from_email': fromEmail,
          'to': [
              {
                'email': toEmail,
                'type': 'to'
              }
            ],
          'autotext': 'true',
          'subject': subject,
          'html': body
        }
      }
     })
}


// Turn form data into object
$.fn.serializeObject = function() {
    return this.serializeArray().reduce(function(acum, i) {
        acum[i.name] = i.value;
        return acum;
    }, {});
};


Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if(a === b)
        return opts.fn(this);
    else
        return opts.inverse(this);
});

Handlebars.registerHelper('dateFormat', function(context, block) {
  if (window.moment) {
    return moment(context).format("dddd, MMMM Do YYYY"); 
  }else{
    return context;   //  moment plugin not available. return data as is.
  };
});

Handlebars.registerHelper("log", function(data) {
  return console.log(data);
});
