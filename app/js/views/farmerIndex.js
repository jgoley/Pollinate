(function() {

    'use strict';

    Bees.Views.FarmerIndex = BaseView.extend({
        subViews: [],
        className: 'landing',
        template: Bees.templates.userLanding,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            })
            options.$container.html(this.el);
            this.render();
        },
        render: function() {
            var that = this;
            var requests = this.collection;
            this.$el.html(this.template(Parse.User.current().toJSON()));

            var notAccepted = new Parse.Collection(
                requests.filter(function(request) {
                    return !request.get('accepted');
                }));

            if (notAccepted.length > 0) {
                this.subViews.push(
                    new Bees.Views.RequestList({
                        $container: $('.requests'),
                        collection: notAccepted,
                    }));
            } else {
                $('.requests').append('<p>You currently do not have any pending requests.</p>');
                $('.requests-list-container').find('.button').remove();
            }

            new Bees.Collections.UserReviews({
                user: Parse.User.current(),
                limit: 5,
            }).getAll().then(function(userReviews) {
                userReviews = new Parse.Collection(userReviews);
                if (userReviews.length > 0) {
                    that.subViews.push(
                        new Bees.Views.UserReviewsList({
                            $container: $('.reviews'),
                            collection: userReviews
                        }))
                } else {
                    $('.reviews').append('<p>No user reviews.</p>');
                    $('.reviews-list-container').find('.button').remove();

                }
            });
            queryBeekeepers(0).then(function(beekeepers) {
                beekeepers = new Parse.Collection(beekeepers);
                if (beekeepers.length > 0) {
                    that.subViews.push(
                        new Bees.Views.UserShortList({
                            $container: $('.near-users'),
                            collection: beekeepers,
                            type: 'Beekeepers'
                        }))
                } else {
                    that.searchGeo(500)
                }
            })
        },

        searchGeo: function(distance) {
            var that = this;
            new Bees.Collections.UserSearchGeo({
                userType: 'beekeeper',
                distance: distance,
                limit: 5,
            }).fetch().then(
                function(users) {
                    if (users.length === 0) {
                        that.searchGeo(distance + 500);
                    } else {
                    that.subViews.push(
                        new Bees.Views.UserShortList({
                            $container: $('.near-users'),
                            collection: users,
                            type: 'Beekeepers'
                        }))
                       
                    }
                });
        }

    });

})();