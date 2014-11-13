(function(){
    
    'use script';

    Bees.Views.NewUserView = BaseView.extend({
        tagName: 'form',
        className: 'new-user',
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
            'change .userType': 'addUserInfo',
            'change .image': 'getImage'
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container
            });
            options.$container.html(this.el);
            this.model = new Bees.Models.User();
            this.render();
        },

        render: function() {
            this.$el.prepend(this.template({
                user: this.model
            }));
            this.$el.parsley();
        },

        createUser: function(e) {
            e.preventDefault();
            var that = this;
            var credentials = this.$el.serializeObject();
            user = this.model;
            if (credentials.userType == 'beekeeper') {
                user.set('userType', 'beekeeper');
            } else {
                user.set('userType', 'farmer');
            }
            user.set(credentials);
            user.set('costPerHive', +credentials.costPerHive);
            user.set('maxDistFree', +credentials.maxDistFree);
            user.set('costPerMile', +credentials.costPerMile);
            user.set('hivesAvailable', +credentials.hivesTotal);
            user.set('hivesTotal', +credentials.hivesTotal);
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
        },

        addUserInfo: function(e){
            _.invoke(this.subViews, 'dispose');
            var userType = $(e.target).val();
            this.subViews.push(
                new Bees.Views.UserTypeFormFields({
                $container: $('.userType-info'),
                userType: userType,
            }));
        },

        getImage: function(e) {
            var that = this;
            var image = $(e.target)[0].files[0];
            var file = new Parse.File(image.name, image);
            file.save()
                .then(function() {
                    $('.image').attr('disabled', false);
                    // $('.loading').remove();
                    that.model.set('image', file.url());
                });
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
            if (Parse.User.current()){
                this.$el.prepend(this.template({user: Parse.User.current().toJSON()}));
            }
            else {
                this.$el.prepend(this.template());
            }
        },
    });

})();