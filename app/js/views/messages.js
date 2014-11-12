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
            $('.main-menu a').removeClass('selected-nav');
            this.render();
            this.listenTo(this.collection, 'add', this.render);
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
            if (messages.length > 0) {
                this.subViews.push(
                    new Bees.Views.MessagesList({
                        $container: $('.' + type + '-messages'),
                        collection: messages,
                        type: type
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
                type: opts.type
            });
            options.$container.append(this.el);
            this.type = options.type;
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
                    type: this.type,
                    collection: this.collection
                }));
        }

    });

    Bees.Views.MessagesListItem = BaseView.extend({
        tagName: 'li',
        className: 'message',
        template: Bees.templates.messages.message,
        events: {
            'click .reply': 'reply'
        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                type: opts.type
            });
            options.$container.append(this.el);
            this.type = options.type;
            this.render();
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.append(this.template({message: this.model.toJSON(), type: this.type}));
        },

        reply: function(){
            this.$el.find('.reply').remove();            
            new Bees.Views.NewMessage({
                $container: this.$el,
                model: this.model,
                method: 'append',
                msgType: 'reply',
                collection: this.collection
            });

            this.model.set('replied', true);
            this.model.save();

        }
    });

        Bees.Views.NewMessage = BaseView.extend({
        template: Bees.templates.user.newMessage,
        tagName: 'form',
        className: 'new-message',
        events: {
            'submit': 'sendMessage',
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                recepient: opts.recepient,
                method: opts.method,
                msgType: opts.msgType,
            });
            this.msgType = options.msgType;
            this.recepient = options.recepient;
            this.sender = Parse.User.current();
            this.$container = options.$container;
            this.message = new Bees.Models.Message();
            if(options.method === 'fill' || !options.method)
                options.$container.html(this.el);
            else 
                options.$container.append(this.el);
            this.render();
        },
        render: function() {
            this.$el.html(this.template());
        },
        sendMessage: function(e){
            if(this.msgType === 'new')
                this.sendNew(e);
            else 
                this.sendReply(e);
        },

        sendNew: function(e){
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
                success:function(a){
                    var email = {
                        message: '<p>You received a message on Pollinate!</p><p>'+that.sender.get('username')+' says:</p><p>'+message+'</p><a href="#">Goto Pollinate to respond</a>',
                        subject: 'New Message on Pollinate',
                        from: 'jgoley.etc@gmail.com',
                        to: 'jgoley@gmail.com',//beekeeper.get('email'),
                    };
                    sendMail(email);
                },
                error:function(a,e){
                    console.error(e);
                }
            });
            this.dispose();
        },

        sendReply: function(e){
            e.preventDefault();
            var that = this;
            var prevMsg = this.model;
            var newMessage = this.message;
            var message = $('[name=message]').val();
            if(message.length > 5){
                newMessage.set('message', message);
                newMessage.set('recipient', prevMsg.get('sender'));
                newMessage.set('recipientName', prevMsg.get('senderName'));
                newMessage.set('sender', prevMsg.get('recipient'));
                newMessage.set('senderName', prevMsg.get('recipientName'));
                newMessage.set('msgType', 'reply');
                newMessage.save({
                    success:function(a){
                        var email = {
                            message: '<p>You received a message on Pollinate!</p><p>'+that.sender.get('username')+' says:</p><p>'+message+'</p><a href="#">Goto Pollinate to respond</a>',
                            subject: 'New Message on Pollinate',
                            from: 'jgoley.etc@gmail.com',
                            to: 'jgoley@gmail.com',//beekeeper.get('email'),
                        };
                        sendMail(email);
                        prevMsg.set('replied', true);
                        prevMsg.save();
                    },
                    error:function(a,e){
                        console.error(e);
                    }
                });
                this.dispose();
                that.$container.append('<h2>Reply sent</h2>');
                that.collection.add(newMessage);
            }
            else {
                alert('Your message is too short.')
            }
        }
    });



})();