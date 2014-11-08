Bees.Views.BeekeeperIndex = BaseView.extend({
    className: 'beekeeper',
    subViews: [],
    currentDate: moment().format('YYYY-MM-DD'),
    template: Bees.templates.beekeeperIndex.base,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        var that = this;
        requests = this.collection;
        this.$el.html(this.template());

        var hivesOut = new Parse.Collection(
            requests.filter(function(request){
                return request.get('startDate') <= that.currentDate && request.get('endDate') >= that.currentDate;
        }));

        var unAccepted = new Parse.Collection(
            requests.filter(function(request){
                return !request.get('accepted');
        }));

        this.subViews.push(
            new Bees.Views.BeekeeperIndexInfo({
                $container: $('.top-info'),
        }));

        this.subViews.push(
            new Bees.Views.BeekeeperHivesOut({
                $container: $('.top-info'),
                collection: hivesOut
        }));

        if(unAccepted > 0){
            this.subViews.push(
                new Bees.Views.RequestList({
                    $container: $('.request-container'),
                    collection: unAccepted,
                    info: {title: 'Un-accepted Requests', class:'unAccepted'}
            }));
        } else{
            $('.request-container').append('<p>Currently you have no open requests.</p>')
        }

        new Bees.Collections.UserReviews({
            user: Parse.User.current(),
            limit:5,
        }).fetch().then(function(userReviews){
            if(userReviews > 0){
                that.subViews.push( 
                    new Bees.Views.UserReviewsList({
                        $container: $('.review-container'),
                        collection: userReviews
                    }))
            } else{
                $('.review-container').append('<p>No user reviews.</p>')
            }
        });

        var farmersNear = new Bees.Collections.UserSearchGeo({
            userType: 'farmer',
            distance: 200,
            limit:5,
        })


        farmersNear.fetch().then(function(){
            // console.log("Near",farmersNear)
            that.subViews.push(
                new Bees.Views.UserShortList({
                    $container: $('.near-users'),
                    collection: farmersNear
                }))     
        });
    }

});


Bees.Views.BeekeeperIndexInfo = BaseView.extend({
    className: 'beekeeper-details',
    template: Bees.templates.beekeeperIndex.details,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.append(this.el);
        this.render();
    },
    render: function(){
        var that = this;
        this.$el.append(this.template(Parse.User.current().toJSON()));
    }
})

Bees.Views.BeekeeperHivesOut = BaseView.extend({
    subViews: [],
    tagName: 'ul',
    className: 'hives-out',
    template: Bees.templates.beekeeperIndex.hivesOut,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.append(this.el);
        this.render();
    },
    render: function(){
        _.invoke(this.subViews, 'dispose');
        var that = this;
        this.$el.append(this.template());
        this.collection.each(_.bind(this.renderChildren, this));
    },
    renderChildren: function(request){
        this.subViews.push(
            new Bees.Views.BeekeeperHivesOutListItem({
                $container: this.$el,
                model: request
            })
        );
    }

})

            
Bees.Views.BeekeeperHivesOutListItem = BaseView.extend({
    tagName: 'li',
    className: 'hives-out-request',
    template: Bees.templates.beekeeperIndex.hivesOutListItem,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.append(this.el);
        this.render();
    },
    render: function(){
        var that = this;
        if(Parse.User.current().get('userType') === 'beekeeper'){
            w = 'farmer';
        }   else{
            w = 'beekeeper';
        }
        var user = new Parse.Query(Bees.Models.User);
        user.get(this.model.get(w).id)
            .then(function(user){
                that.$el.append(that.template({request: that.model.toJSON(), user: user.toJSON()}));
        });
    }
})
