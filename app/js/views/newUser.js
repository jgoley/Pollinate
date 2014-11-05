Bees.Views.NewUserView = BaseView.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.newuser,

    user: {
        email: 'jgoley@gmail.com',
        firstName: 'Jonathan',
        lastName: 'Goley',
        address: '2433 Lower Richland Blvd.',
        city: 'hopkins',
        state: 'SC',
        zipCode: '29061',
        password: 'pass'
    },

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
        this.$el.prepend(this.template({
            user: this.model
        }));
    },

    createUser: function(e) {
        e.preventDefault();
        var that = this;
        var credentials = this.$el.serializeObject();
        var user = new Bees.Models.User();
        if (credentials.userType == 'beekeeper') {
            user.set('userType', 'beekeeper');
        } else {
            user.set('userType', 'farmer');
        }
        user.set(credentials);
        user.set('costPerHive', +credentials.costPerHive);
        user.set('maxDistFree', +credentials.maxDistFree);
        user.set('costPerMile', +credentials.costPerMile);
        user.set('hivesAvailable', +credentials.hivesAvailable);
        user.set('hivesTotal', +credentials.hivesTotal);
        user.set('zipCode', +credentials.zipCode);
        user.set('geoRangeRadius', +credentials.geoRangeRadius);
        user.signUp(null, {
            success: function(user) {
                Parse.Cloud.run('saveLocation', {}, {
                    success: function(response) {
                        console.log(response);
                        Parse.User.current().fetch();
                        Bees.Session.set('user', user);
                        BeesApp.navigate('/', {
                            trigger: true
                        });
                        that.remove();
                    },
                    error: function() {}
                })
               
            },
            error: function(user, error) {
                alert('Error: ' + error.code + ' ' + error.message);
            }
        });
        // saveLocation

    }
});