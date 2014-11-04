Bees.Views.User = Parse.View.extend({
    className: 'user',

    initialize: function(opts) {
        options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function() {
        var that = this;
        if (this.model.get('userType') === 'beekeeper') {
            this.template = Bees.templates.user.beekeeperIndex;
            this.$el.append(this.template({
                user: this.model.toJSON()
            }));
            new Bees.Views.Request({
                $container: $('.request'),
                model: this.model,
            });

            new Bees.Views.UserReviews({
                $container: $('.reviews'),
                model: this.model,
            });

            // var query = new Parse.Query(Bees.Models.HiveGroup).equalTo('user', this.model);
            // var collection = query.collection();
            // collection.fetch().then(function(hiveGroups) {
            //     that.$el.append(that.template({
            //         user: that.model.toJSON(),
            //         hiveGroups: collection
            //     }));


            // new Bees.Views.HiveGroupList({
            //     $container: $('.user'),
            //     collection: collection,
            //     model: that.model,
            //     page: 'user'
            // })
            // })
        } else {
            this.template = Bees.templates.user.farmerIndex;
            this.$el.append(this.template({
                user: this.model.toJSON()
            }));
            new Bees.Views.UserReviews({
                $container: $('.reviews'),
                model: this.model,
            });
        }
    }

});


Bees.Views.Request = BaseView.extend({
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
            request: this.request.toJSON()
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
        distance = Parse.User.current().get('geoCenter').milesTo(beek.get('geoCenter'));
        if (distance > beek.get('maxDistFree')) {
            milesOver = Math.floor(distance - beek.get('maxDistFree'));
            mileageCost = roundToTwo(milesOver * beek.get('costPerMile'));
        }
        totalCost = roundToTwo(mileageCost + (numHives * beek.get('costPerHive')));
        this.request.set({
            'totalCost': totalCost,
            'milesOver': milesOver,
            'mileageCost': mileageCost,
            'numHives': numHives
        });
    },

    getBees: function() {
        var that = this;
        var startDate = $('[name=startDate]').val();
        var endDate = $('[name=endDate]').val();
        newRequest = new Bees.Models.Request();
        newRequest.set('beekeeper', this.model);
        newRequest.set('farmer', Parse.User.current());
        newRequest.set('startDate', startDate);
        newRequest.set('endDate', endDate);
        newRequest.set(this.request.toJSON());
        newRequest.save().then(sendMail(messageParams));
        that.dispose();
    }
});