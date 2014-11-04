// Add listenTo method
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
    },
    dispose: function() {
        this.stopListeningAll();
        this.unbind();
        this.remove();
        _.invoke(this.subViews, 'dispose');
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


// Round numbers
function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
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

Handlebars.registerHelper("log", function(data) {
  return console.log(data);
});

