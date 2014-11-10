(function(){

    'use strict'

    Bees.Views.Messages = BaseView.extend({
        className: 'messages',
        subViews: [],
        tagName: 'section',
        events: {
            'click .newMessage': 'newMessage'
        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            })
            options.$container.html(this.el);
            $('.main-menu a').removeClass('selected-nav');
            this.render()

        },
        render: function() {
            console.log(this.collection);
            new Bees.Views.MessagesList({
                $container: this.$el,
                collection: this.collection
            })
        },
        newMessage: function(){

        }
    });

   Bees.Views.MessagesList = BaseView.extend({
        tagName: 'ul',
        subViews: [],
        className: 'message-list',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.render();
        },
        render: function() {
            this.collection.each(_.bind(this.renderChildren, this));
        },
        renderChildren: function(request) {
            this.subViews.push(
                new Bees.Views.MessagesListItem({
                model: request,
                $container: this.$el,
            }));
        }

    });

    Bees.Views.MessagesListItem = BaseView.extend({
        tagName: 'li',
        className: 'message',
        template: Bees.templates.messages.message,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.render();
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.append(this.template(this.model.toJSON()));
        }
    });



})();