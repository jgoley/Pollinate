Bees.Views.EditAccountView = BaseView.extend({
    tagName: 'form',
    className: 'user',

    events: {
        'submit': 'saveUser'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        if (Parse.User.current().get('userType') === 'beekeeper') {
            this.template = Bees.templates.account.editBeekeeper;
        } else {
            this.template = Bees.templates.account.editFarmer;
        }
        this.$el.prepend(this.template({
            user: this.model.toJSON()
        }));
        this.$el.parsley();
    },

    saveUser: function(e) {
        e.preventDefault();
        var user = this.model;
        var credentials = this.$el.serializeObject();
        user.set(credentials);
        user.set('costPerHive', +credentials.costPerHive);
        user.set('maxDistFree', +credentials.maxDistFree);
        user.set('costPerMile', +credentials.costPerMile);
        user.set('hivesAvailable', +credentials.hivesAvailable);
        user.set('hivesTotal', +credentials.hivesTotal);
        user.set('zipCode', +credentials.zipCode);
        user.set('geoRangeRadius', +credentials.geoRangeRadius);
        user.save(null, {
            success: function(a, b) {
                saveLocation();
            },
            error: function(a, err) {
                console.log(err)
            }
        });
        BeesApp.navigate('/', {
            trigger: true
        });
        this.dispose();
    }
});