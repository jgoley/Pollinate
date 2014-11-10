(function(){

    'use strict'

    Bees.Views.User = BaseView.extend({
        className: 'user',
        subViews: [],
        tagName: 'section',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            })
            options.$container.html(this.el);
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
            // console.log(this.request);
            var cost = 0,
                mileageCost = 0,
                beek = this.model,
                distance = 0,
                milesOver = 0,
                numHives = 0;

            numHives = +$('[name=numHives]').val();
            if (numHives <= beek.get('hivesAvailable') && numHives > 0) {
                distance = Parse.User.current().get('geoCenter').milesTo(beek.get('geoCenter'));
                if (distance > beek.get('maxDistFree')) {
                    milesOver = Math.floor(distance - beek.get('maxDistFree'));
                    mileageCost = roundToTwo(milesOver * (beek.get('costPerMile')/100));
                }
                var totalCost = roundToTwo(mileageCost + (numHives * beek.get('costPerHive')));
                this.request.set({
                    'totalCost': totalCost,
                    'milesOver': milesOver,
                    'mileageCost': mileageCost,
                    'numHives': numHives
                });
            } else if (numHives <= 0) {
                alert("Please enter a request of 1 or more hives");
            } else {
                alert("You've selected more hives than the number available in the beekeeper's inventory");
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
                    to: beekeeper.get('email'),
                }
                sendMail(email);
                that.dispose();
            });
        }
    });

})();