Bees.Views.NewUserView = BaseView.extend({
    tagName: 'form',
    className: 'user',
    template: Bees.templates.newUser.index,
    subViews: [],
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
        'submit': 'createUser',
        'change .userType': 'addUserInfo'
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
        user.set('hivesTotal', +credentials.hivesAvailable);
        user.set('zipCode', +credentials.zipCode);
        user.set('geoRangeRadius', +credentials.geoRangeRadius);
        user.signUp(null, {
            success: function(user) {
                saveLocation().then(function(){
                    Bees.Session.set('user', user);
                        BeesApp.navigate('/', {
                            trigger: true
                        });
                        that.remove();
                    })
            },
            error: function(user, error) {
                alert('Error: ' + error.code + ' ' + error.message);
            }
        });
        // saveLocation

    },

    addUserInfo: function(e){
        _.invoke(this.subViews, 'dispose');
        var userType = $(e.target).val();
        this.subViews.push(
            new Bees.Views.UserTypeFormFields({
            $container: $('.userType-info'),
            userType: userType
        }));
    }
});


Bees.Views.UserTypeFormFields = BaseView.extend({

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
            userType: opts.userType
        });

        options.$container.html(this.el);

        if(options.userType === 'beekeeper'){
            this.template = Bees.templates.newUser.beekeeper;
        } else{
            this.template = Bees.templates.newUser.farmer;
        }
        this.render();
    },

    render: function() {
        this.$el.prepend(this.template());
    },


});