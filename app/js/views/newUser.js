Bees.Views.NewUserView = Parse.View.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.newuser,

    user: {email:'jgoley@gmail.com',firstName: 'Jonathan', lastName: 'Goley', address: '2433 Lower Richland Blvd.', city: 'hopkins', state: 'SC', zipCode: '29061', password: 'pass'},

    events: {
        'submit': 'createUser'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.model = this.user;
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template({user: this.model}));
    },

    createUser: function(e) {
        e.preventDefault();
        var that = this;
        var credentials = this.$el.serializeObject();
        var user = new Bees.Models.User();
        console.log(credentials);
        user.set('username', credentials.userName);
        user.set('password', credentials.password);
        user.set('email', credentials.email);

        var googleToken = 'AIzaSyDIWzTq_5JQgHCLIvfNuU-CeLFYmdYiQ5U';
        var address = (credentials.address + ',' + credentials.city + ',' + credentials.state).replace(/\s+/g, '+');
        var geoRequest = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + googleToken;

        if (credentials.userType == 'beekeeper') {
            user.set('beekeeper', true);
        } else {
            user.set('farmer', true);
        }
        // Get Geo location data
        $.ajax({
            url: geoRequest,
            dataType: 'json'
        }).done(function(geoData) {
            credentials.geoCenter =  new Parse.GeoPoint([geoData.results[0].geometry.location.lat, geoData.results[0].geometry.location.lng]);
            console.log('Saving user');
            user.signUp(null, {
                success: function(user) {
                    console.log(user);
                    Bees.Session.set('user', user);
                    var newProfile = new Bees.Models.Profile();
                    user.save(credentials);
                    newProfile.save({user: user});
                    BeesApp.navigate('/', {
                        trigger: true
                    });
                    that.remove();
                },
                error: function(user, error) {
                    alert('Error: ' + error.code + ' ' + error.message);
                }
            });

        });
    }
});