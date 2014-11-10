Bees.Views.EditAccountView = BaseView.extend({
    tagName: 'form',
    className: 'edit-account',
    template: Bees.templates.account.edit,
    events: {
        'submit': 'saveUser',
        'change .image': 'getImage'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
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
        console.log(this.model);
    }
});