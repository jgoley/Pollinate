Bees.Views.ApplicationView = Parse.View.extend({
    
    template: Bees.templates.application,
    
    initialize: function(opts){
        Bees.Session = new Bees.Models.Session({user: Parse.User.current()})
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


