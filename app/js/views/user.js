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
        }
         else{
            this.template = Bees.templates.user.famerIndex;
            this.$el.append(this.template({
                user: this.model.toJSON()
            }));
        }
    }

});


Bees.Views.Request = BaseView.extend({
    template: Bees.templates.user.request,
    events:{
        'click .calculate': 'calculate',
        'click .getBees' : 'getBees'
    },

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        });
        options.$container.append(this.el);
        this.render();
        this.listenTo(this.model, 'change', this.render)
    },
    render: function() {
        // this.dispose();
        this.$el.html(this.template({
            user: this.model.toJSON()
        }));
    },

    calculate: function(e){
        e.preventDefault();
        var cost = 0,
            milageCost = 0,
            beek = this.model,
            distance,
            miles,
            numHives;

        numHives = $('[name=numHives]').val();
        distance = Parse.User.current().get('geoCenter').milesTo(beek.get('geoCenter'));
        if (distance > beek.get('maxDistFree')){
            miles = distance - beek.get('maxDistFree');
            milageCost = roundToTwo(miles* beek.get('costPerMile'));
        }
        totalCost = roundToTwo(milageCost + (numHives * beek.get('costPerHive')));
        this.model.set('cost', {'total':totalCost, 'milage': milageCost});
    },

    getBees: function(){
        // create new request
        console.log("Getting bees");
    }

});