(function() {

    'use strict'

    Bees.Views.Messages = BaseView.extend({
        className: 'messages-container',
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
            this.render();
            //this.listenTo(this.collection, 'add', this.render);
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.html(this.template());
            var that = this;

            new Bees.Collections.UserMessages({
                user: Parse.User.current()
            }).getSent().then(function(messages) {
                    that.populateMessages(messages,'sent');
                });

            new Bees.Collections.UserMessages({
                user: Parse.User.current()
            }).getReceived().then(function(messages) {
                    that.populateMessages(messages,'received')
                });

        },
        populateMessages: function(messages, type) {
            var messages = new Parse.Collection(messages);
            if (messages.length > 0) {
                this[type] = messages;
                this.subViews.push(
                    new Bees.Views.MessagesList({
                        $container: $('.' + type + '-messages'),
                        collection: messages,
                        type: type,
                        parentView: this
                    }))
            } else {
                $('.' + type + '-messages').append('<h3>Currently no ' + type + ' messages.</h3>');
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
                type: opts.type,
                parentView: opts.parentView
            });
            options.$container.append(this.el);
            this.sentMsgs = options.parentView.sent;
            this.recievedMsgs = options.parentView.recieved;
            this.type = options.type;
            this.render();
            // if(this.sentMsgs)
            //     this.listenTo(this.sentMsgs, 'add', this.render);
        },
        render: function() {
            this.$el.empty();
            this.collection.each(_.bind(this.renderChildren, this));
        },
        renderChildren: function(request) {
            if(this.type === 'received'){
                this.subViews.push(
                    new Bees.Views.MessagesListItem({
                        model: request,
                        $container: this.$el,
                        type: this.type,
                        collection: this.collection,
                        sentMsgs: this.sentMsgs
                    }));
            }
            else {
                this.subViews.push(
                    new Bees.Views.MessagesListItem({
                        model: request,
                        $container: this.$el,
                        type: this.type,
                        collection: this.collection,
                }));
            }
        }

    });

    Bees.Views.MessagesListItem = BaseView.extend({
        tagName: 'li',
        className: 'message',
        subViews: [],
        template: Bees.templates.messages.message,
        events: {
            'click .reply': 'reply'
        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                type: opts.type,
                sentMsgs: opts.sentMsgs
            });
            options.$container.append(this.el);
            this.sentMsgs = options.sentMsgs;
            console.log("!!!!!",this.sentMsgs);
            this.type = options.type;
            this.render();
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            var sentDate =  moment(this.model.createdAt).fromNow();
            this.$el.append(this.template({
                message: this.model.toJSON(),
                type: this.type,
                sentDate : sentDate
            }));
        },

        reply: function(e) {
            e.preventDefault();
            this.$el.find('.reply').remove();
            this.subViews.push(
                new Bees.Views.NewMessage({
                    $container: this.$el,
                    model: this.model,
                    method: 'append',
                    msgType: 'reply',
                    collection: this.collection,
                    sentMsgs: this.sentMsgs
            }));
        }
    });

    Bees.Views.NewMessage = BaseView.extend({
        template: Bees.templates.user.newMessage,
        tagName: 'form',
        className: 'new-message',
        events: {
            'submit': 'sendMessage',
            'cancel': 'cancel'
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                recepient: opts.recepient,
                method: opts.method,
                msgType: opts.msgType,
                sentMsgs: opts.sentMsgs
            });
            this.sentMsgs = options.sentMsgs;
            this.msgType = options.msgType;
            this.recepient = options.recepient;
            this.sender = Parse.User.current();
            this.$container = options.$container;
            this.message = new Bees.Models.Message();
            if (options.method === 'fill' || !options.method)
                options.$container.html(this.el);
            else
                options.$container.append(this.el);
            this.render();
        },
        render: function() {
            console.log(this.sentMsgs);
            this.$el.html(this.template());
        },
        sendMessage: function(e) {
            if (this.msgType === 'new')
                this.sendNew(e);
            else
                this.sendReply(e);
        },

        sendNew: function(e) {
            e.preventDefault();
            var that = this;
            var newMessage = this.message;
            var message = $('[name=message]').val();
            newMessage.set('message', message);
            newMessage.set('recipient', this.recepient);
            newMessage.set('recipientName', this.recepient.get('username'));
            newMessage.set('sender', this.sender);
            newMessage.set('senderName', this.sender.get('username'));
            newMessage.save({
                success: function(a) {
                    var email = {
                        message: '<p>You received a message on Pollinate!</p><p>' + that.sender.get('username') + ' says:</p><p>' + message + '</p><a href="#">Goto Pollinate to respond</a>',
                        subject: 'New Message on Pollinate',
                        from: 'jgoley.etc@gmail.com',
                        to: 'jgoley@gmail.com', //beekeeper.get('email'),
                    };
                    sendMail(email);
                },
                error: function(a, e) {
                    console.error(e);
                }
            });
            this.dispose();
            $('.newMessage-container').append("<h2 class='submitted'>Message sent!</h1>");
            if(this.sentMsgs){
                this.sentMsgs.add(newMessage);
            }

        },

        sendReply: function(e) {
            e.preventDefault();
            var that = this;
            var prevMsg = this.model;
            var newMessage = this.message;
            var message = $('[name=message]').val();
            if (message.length > 5) {
                newMessage.set('message', message);
                newMessage.set('recipient', prevMsg.get('sender'));
                newMessage.set('recipientName', prevMsg.get('senderName'));
                newMessage.set('sender', prevMsg.get('recipient'));
                newMessage.set('senderName', prevMsg.get('recipientName'));
                newMessage.set('msgType', 'reply');
                newMessage.save({
                    success: function(a) {
                        var email = {
                            message: '<p>You received a message on Pollinate!</p><p>' + that.sender.get('username') + ' says:</p><p>' + message + '</p><a href="#">Goto Pollinate to respond</a>',
                            subject: 'New Message on Pollinate',
                            from: 'jgoley.etc@gmail.com',
                            to: 'jgoley@gmail.com', //beekeeper.get('email'),
                        };
                        sendMail(email);
                        prevMsg.set('replied', true);
                        prevMsg.save();
                    },
                    error: function(a, e) {
                        console.error(e);
                    }
                });
                this.dispose();
                that.$container.append('<h2 class="submitted">Reply sent</h2>');
                that.collection.add(newMessage);
                // setTimeout(removeNotification('.submitted'), 2000);
            } else {
                alert('Your message is too short.')
            }

            this.sentMsgs.add(newMessage);
            this.model.set('replied', true);
            this.model.save();
        },

        cancel: function(){
            this.dispose();
        }
    });



})();