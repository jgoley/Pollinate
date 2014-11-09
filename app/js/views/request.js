(function(){

    'use strict';

    Bees.Views.Request = BaseView.extend({
        className: 'request-container',
        template: Bees.templates.requests.solo,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.html(this.el);
            this.render();
        },
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));            
        }
    });

})();