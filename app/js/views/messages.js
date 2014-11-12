(function() {

    'use strict'

    Bees.Views.Messages = BaseView.extend({
        className: 'messages',
        subViews: [],
        tagName: 'section',
        template: Bees.templates.messages.index,
        events: {
            'click .newMessage': 'newMessage'
        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            })
            options.$container.html(this.el);
            $('.main-menu a').removeClass('selected-nav');
            this.render();
        },
        render: function() {
            this.$el.html(this.template());
            this.populateMessages('recipient', 'received');
            this.populateMessages('sender', 'sent');
        },

        populateMessages: function(searchFor, type) {
            var messages = this.collection.filter(function(msg) {
                return msg.get(searchFor).id === Parse.User.current().id;
            });
            var messages = new Parse.Collection(messages);
            console.log(messages);
            if (messages.length > 0) {
                this.subViews.push(
                    new Bees.Views.MessagesList({
                        $container: $('.' + type + '-messages'),
                        collection: messages
                    }))
            } else {
                $('.'+ type +'-messages').append('<h3>Currently no ' + type + ' messages.</h3>')
            }
        },
        newMessage: function() {

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