(function(){

    'use strict'

    Bees.Views.User = BaseView.extend({
        className: 'user',
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
            this.render();
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            var that = this;
            if (this.model.get('userType') === 'beekeeper') {
                this.template = Bees.templates.user.beekeeperIndex;
                var distance = Math.ceil(this.model.get('geoCenter').milesTo(Parse.User.current().get('geoCenter')));

                this.$el.append(this.template({
                    user: this.model.toJSON(),
                    distance: distance
                }));
                
                this.subViews.push(
                    new Bees.Views.RequestNew({
                        $container: $('.new-request'),
                        model: this.model,
                    })
                );

                this.subViews.push(
                    new Bees.Views.UserReviews({
                        $container: $('.reviews'),
                        model: this.model,
                    })
                );

            } else {
                this.template = Bees.templates.user.farmerIndex;
                this.$el.append(this.template({
                    user: this.model.toJSON()
                }));
                this.subViews.push(
                    new Bees.Views.UserReviews({
                        $container: $('.reviews'),
                        model: this.model,
                    })
                );
            }
        },

        newMessage: function(e){
            e.preventDefault();
            new Bees.Views.NewMessage({
                $container: $('.newMessage-container'),
                recepient: this.model
            });
        }

    });


    Bees.Views.NewMessage = BaseView.extend({
        template: Bees.templates.user.newMessage,
        tagName: 'form',
        events: {
            'submit': 'sendMessage',
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                recepient: opts.recepient
            });
            options.$container.html(this.el);
            this.recepient = options.recepient;
            this.sender = Parse.User.current();
            this.message = new Bees.Models.Message();
            this.render();
        },
        render: function() {
            // this.dispose();
            console.log("Rendering");
            this.$el.html(this.template());
        },
        sendMessage: function(e){
            var that = this;
            var newMessage = this.message;
            e.preventDefault();
            var message = $('[name=message]').val();
            newMessage.set('message', message);
            newMessage.set('recipient', this.recepient);
            newMessage.set('recipientName', this.recepient.get('username'));
            newMessage.set('sender', this.sender);
            newMessage.set('senderName', this.sender.get('username'));
            newMessage.save({
                success:function(a){
                    console.log(a);
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
        }
    });

    Bees.Views.RequestNew = BaseView.extend({
        template: Bees.templates.user.request,
        events: {
            'click .calculate': 'calculate',
            'click .getBees': 'getBees'
        },

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.$container = options.container;
            this.request = new Bees.Models.Request();
            this.render();
            this.listenTo(this.request, 'change', this.render);
        },
        render: function() {
            // this.dispose();
            console.log("Rendering");
            this.$el.html(this.template({
                user: this.model.toJSON(),
                request: this.request.toJSON(),
                distance: this.distance
            }));
        },

        calculate: function(e) {
            e.preventDefault();
            var numHivesRequested = +$('[name=numHives]').val();
            if (numHivesRequested <= this.model.get('hivesAvailable') && numHivesRequested > 0) {
                this.request.set(calculateCost(numHivesRequested, this.model));
            } else if (numHivesRequested <= 0) {
                alert("Please enter a request of 1 or more hives.");
            } else {
                alert("You've selected more hives than the number available in the beekeeper's inventory.");
            }
        },

        getBees: function() {
            var that = this;
            var user = Parse.User.current();
            var beekeeper = this.model;
            var startDate = $('[name=startDate]').val();
            var endDate = $('[name=endDate]').val();
            var message = $('[name=message]').val();

            var newRequest = new Bees.Models.Request();
            newRequest.set('beekeeper', beekeeper);
            newRequest.set('farmer', user);
            newRequest.set('startDate', startDate);
            newRequest.set('endDate', endDate);
            newRequest.set('message', message);
            newRequest.set(this.request.toJSON());
            newRequest.save().then(function() {
                var email = {
                    message: 'Go to the website and accept the request',
                    subject: 'New Request for bees',
                    from: 'jgoley@gmail.com',
                    to:  'jgoley.etc@gmail.com' //beekeeper.get('email'),
                }
                sendMail(email);
                that.dispose();
                $('.new-request').append("<h2 class='submitted'>Request submitted!</h1>");
            });
        }
    });

})();