(function(){

    'use strict';
    
    Bees.Views.BaseView = BaseView.extend({
        template: Handlebars.compile($('#base').html()),
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container
            });
            options.$container.html(this.el);
            this.render();
        },
        render: function() {
            this.$el.html(this.template());
        }
    });
})();