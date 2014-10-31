Bees.Views.ApplicationView = Parse.View.extend({
    className: 'pollinate',
    template: Bees.templates.application,
    
    initialize: function(opts){
        Bees.Session = new Bees.Models.Session({user: Parse.User.current()})
        this.model = Bees.Session;
        this.render();
    },
    render: function(){
        this.$el.html(this.template()
        new Bees.Views.HeaderView({
            $container: $('header'),
            user: 
        })
        new Bees.Views.FooterView({
            $container:  $('footer')
        })
    }

});


