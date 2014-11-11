(function(){

    'use strict';

    Bees.Views.BeekeeperIndex = BaseView.extend({
        className: 'landing',
        subViews: [],
        currentDate: moment().format('YYYY-MM-DD'),
        currentDatePlus: moment().add(14, 'days').format('YYYY-MM-DD'),
        template: Bees.templates.userLanding,
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            })
            options.$container.html(this.el);
            this.render();
        },
        render: function(){
            var that = this;
            var requests = this.collection;
            this.$el.html(this.template(Parse.User.current().toJSON()));

            var hivesOut = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('startDate') <= that.currentDate && request.get('endDate') >= that.currentDate;
            }));

            var notAccepted = new Parse.Collection(
                requests.filter(function(request){
                    return !request.get('accepted');
            }));

            var upcommingRequests = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('startDate') >= that.currentDate && request.get('startDate') <= that.currentDatePlus && request.get('accepted');
            }));


            // this.subViews.push(
            //     new Bees.Views.BeekeeperIndexInfo({
            //         $container: $('.active-request-info'),
            // }));
            
            this.subViews.push(
                new Bees.Views.BeekeeperUpcomingRequestsList({
                    $container: $('.active-request-info'),
                    collection: upcommingRequests
            }));

            if(hivesOut.length > 0){
                this.subViews.push(
                    new Bees.Views.BeekeeperHivesOut({
                        $container: $('.active-request-info'),
                        collection: hivesOut
                }));
            } else{
                $('.hives-out').append('<p>Currently you have no open requests.</p>')
            }

            if(notAccepted.length > 0){
                this.subViews.push(
                    new Bees.Views.RequestList({
                        $container: $('.requests'),
                        collection: notAccepted,
                }));
            } else{
                $('.requests').append('<p>You currently do not have any pending requests.</p>');
                $('.request-list-container .button').remove();
            }

            new Bees.Collections.UserReviews({
                user: Parse.User.current(),
                limit: 3,
            }).fetch().then(function(userReviews){
                if(userReviews.length > 0){
                    that.subViews.push( 
                        new Bees.Views.UserReviewsList({
                            $container: $('.reviews'),
                            collection: userReviews
                        }))
                } else{
                    $('.reviews').append('<p>No user reviews.</p>')
                }
            });

            new Bees.Collections.UserSearchGeo({
                userType: 'farmer',
                distance: 200,
                limit:5,
            }).fetch().then(function(farmersNear){
                that.subViews.push(
                    new Bees.Views.UserShortList({
                        $container: $('.near-users'),
                        collection: farmersNear,
                        type: 'Farmers'
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
            this.$el.append('<h1 class="main-title">Requests currently out:</h1>');
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
            var that = this,
            w;

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
    });

})();
