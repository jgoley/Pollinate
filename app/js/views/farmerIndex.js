Bees.Views.FarmerIndex = BaseView.extend({
    className: 'beekeeper',
    template: Bees.templates.farmerIndex,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
        console.log('BeekeeperIndex');
    },
    render: function(){
        this.$el(this.template(user: Parse.User.current().toJSON()))
    }

});


