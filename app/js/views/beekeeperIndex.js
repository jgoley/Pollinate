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

            var upcomingRequests = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('startDate') >= that.currentDate && request.get('startDate') <= that.currentDatePlus && request.get('accepted');
            }));

            if(upcomingRequests.length > 0){
                this.subViews.push(
                    new Bees.Views.BeekeeperUpcomingRequestsList({
                        $container: $('.active-request-info'),
                        collection: upcomingRequests
                }));
            }

            if(hivesOut.length > 0){
                this.subViews.push(
                    new Bees.Views.BeekeeperHivesOut({
                        $container: $('.active-request-info'),
                        collection: hivesOut
                }));
            } else{
                $('.hives-out').append('<p>Currently you have no pending requests.</p>')
            }

            if(hivesOut.length === 0 && upcomingRequests.length === 0){
                $('.active-request-container').remove();
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
                limit: 5,
            }).getAll().then(function(userReviews){
                userReviews = new Parse.Collection(userReviews);
                if(userReviews.length > 0){
                    that.subViews.push( 
                        new Bees.Views.UserReviewsList({
                            $container: $('.reviews'),
                            collection: userReviews
                        }))
                } else{
                    $('.reviews').append('<p>You currently do not have any reviews.</p>')
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
            this.$el.append('<h1 class="main-title">Hives currently out:</h1>');
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
            var request = this.model;
            var formattedDates = {
                'createdAt':    moment(request.createdAt).format('MMM D, YYYY | h:mm a'),
                'startDate':    moment(request.get('startDate')).format('MMM D, YYYY'),
                'endDate':      moment(request.get('endDate')).format('MMM D, YYYY'),
                'startDateFromNow':      moment( moment(request.get('startDate')).add(1, 'day') ).fromNow(),
                'endDateFromNow':      moment( moment(request.get('endDate')).add(1, 'day') ).fromNow(),
            };
            if(Parse.User.current().get('userType') === 'beekeeper'){
                w = 'farmer';
            }   else{
                w = 'beekeeper';
            }
            var user = new Parse.Query(Bees.Models.User);
            user.get(this.model.get(w).id)
                .then(function(user){
                    that.$el.append(that.template({request: request.toJSON(), user: user.toJSON(), formattedDates: formattedDates}));
            });
        }
    });

})();
