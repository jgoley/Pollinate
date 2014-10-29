Bees.Views.ApplicationView = Parse.View.extend({
    
    template: Bees.templates.application,
    
    initialize: function(opts){
        this.render();
    },
    render: function(){
        this.$el.html(this.template())
        new Bees.Views.HeaderView({
            $container: $('header')
        })
        new Bees.Views.FooterView({
            $container:  $('footer')
        })
    }

});


