(function(){

    'use strict';

    Bees.Views.FooterView = BaseView.extend({
        className: 'footer-container',
        template: Bees.templates.footer,
        initialize: function(opts){
            var options = _.defaults({}, opts,{
                $container: opts.$container
            });
            options.$container.html(this.el);
            this.render();
        },
        render: function(){
            this.$el.html(this.template())
            // new Bees.Views.BaseView({
            //     $container: $('body')
            // })
        }

    });

})();