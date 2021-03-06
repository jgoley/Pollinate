(function(){

    'use strict';

    Bees.Views.ApplicationView = BaseView.extend({
        className: 'pollinate',
        template: Bees.templates.application,
        
        initialize: function(opts){
            Bees.Session = new Bees.Models.Session({user: Parse.User.current()})
            this.model = Bees.Session;
            this.render();
            this.listenTo(Bees.Session, 'change', this.render);
        },
        render: function(){
            if ( Bees.Session.get('user')) var user = Bees.Session.get('user').toJSON();
            this.$el.html(this.template({user: user}));
            new Bees.Views.HeaderView({
                $container: $('header'),
            })
            new Bees.Views.FooterView({
                $container:  $('footer')
            })
        }

    });

})();
