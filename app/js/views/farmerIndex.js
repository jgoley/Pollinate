Bees.Views.FarmerIndex = BaseView.extend({
    className: 'farmer',
    template: Bees.templates.farmerIndex,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        this.$el.append(this.template({user: Parse.User.current().toJSON()}))
    }

});


