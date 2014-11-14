(function() {

    'use strict';

    Bees.Views.UserReviews = BaseView.extend({
        className: 'user-reviews',
        subViews: [],
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.render();

        },

        render: function() {
            _.invoke(this.subViews, 'dispose');
            var that = this;
            new Bees.Collections.UserReviews({
                user: this.model
            }).getAll().then(function(reviews) {
                reviews = new Parse.Collection(reviews);
                var already = reviews.find(function(model) {
                    return model.get('reviewer').id === Parse.User.current().id;
                });
                if (!already) {
                    that.subViews.push(
                        new Bees.Views.UserReviewsNew({
                            collection: reviews,
                            model: that.model,
                            $container: that.$el,
                        })
                    );
                }
                if (reviews.length > 0) {
                    that.subViews.push(
                        new Bees.Views.UserReviewsList({
                            $container: that.$el,
                            model: that.model,
                            collection: reviews
                        })
                    );
                } else {
                    that.subViews.push(
                        new Bees.Views.UserReviewsList({
                            $container: that.$el,
                            model: that.model,
                            collection: reviews
                        })
                    );
                    //$('.reviews').append('<p>No user reviews</p>');
                }
            });
        },
    });

    Bees.Views.UserReviewsPage = BaseView.extend({
        className: 'reviews-container',
        tagName: 'section',
        subViews: [],

        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.html(this.el);
            this.render();
        },

        render: function() {
            this.$el.html("<div class='reviews'><h1 class='main-title'>Reviews</h1></div>");
            _.invoke(this.subViews, 'dispose');
            if (this.collection.length > 0) {
                this.subViews.push(
                    new Bees.Views.UserReviewsList({
                        $container: $('.reviews'),
                        collection: this.collection
                    })
                );
            } else {
                $('.reviews').append("<div><h3>You currently do not have any reviews.</h3></div>")
            }
        },
    });

    Bees.Views.UserReviewsList = BaseView.extend({
        tagName: 'ul',
        className: 'review-list',
        subViews: [],
        initialize: function(opts) {

            _.invoke(this.subViews, 'dispose');
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.render();
            this.listenTo(this.collection, 'add', this.render);
        },
        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.empty();
            console.log("Rendered");
            if(this.collection)
                this.collection.each(_.bind(this.renderChildren, this));
        },
        renderChildren: function(review) {
            this.subViews.push(
                new Bees.Views.UserReviewsListItem({
                    model: review,
                    $container: this.$el,
                })
            );
        },
    })

    Bees.Views.UserReviewsListItem = BaseView.extend({

        tagName: 'li',
        className: 'review-list-item',
        template: Bees.templates.reviews.listItem,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.prepend(this.el);
            this.render();
        },
        render: function() {
            var that = this;
            var createdAt = moment(this.model.createdAt).format('MMM D, YYYY | h:mm a');
            var query = new Parse.Query(Bees.Models.User);
            query.get(this.model.get('reviewer').id).then(function(reviewer) {
                that.$el.append(that.template({
                    review: that.model.toJSON(),
                    reviewer: reviewer.toJSON(),
                    createdAt: createdAt
                }));
            })
        },
    });

    Bees.Views.UserReviewsNew = BaseView.extend({
        className: 'new-review',
        subViews: [],
        events: {
            'click .add-review': 'addReview'
        },
        template: Bees.templates.reviews.new,
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.append(this.el);
            this.render();
        },

        render: function() {
            _.invoke(this.subViews, 'dispose');
            this.$el.append(this.template());
        },

        addReview: function() {
            this.subViews.push(
                new Bees.Views.UserReviewsAdd({
                    $container: this.$el,
                    model: this.model,
                    collection: this.collection
                })
            );
        }
    });

    Bees.Views.UserReviewsAdd = BaseView.extend({

        tagName: 'form',
        className: 'review',
        events: {
            'submit': 'submitReview',
            'click .cancel-review': 'cancel',
        },

        template: Bees.templates.reviews.add,
        initialize: function(opts) {
            _.invoke(this.subViews, 'dispose');
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.html(this.el);
            this.$container = options.$container;
            this.render();
            console.log("!!!!!", this.collection)
        },

        render: function() {
            this.$el.append(this.template());
        },

        submitReview: function(e) {
            e.preventDefault();
            var reviewData = this.$el.serializeObject();
            var review = new Bees.Models.Review();
            review.set('reviewer', Parse.User.current());
            review.set('reviewee', this.model);
            review.save(reviewData);
            this.collection.add(review);
            this.$container.append('<h2 class="submitted">Review submitted</h2>');
            this.dispose();
            //sendMail({});
        },
        cancel: function() {
            this.dispose();
            new Bees.Views.UserReviewsNew({
                collection: this.collection,
                model: this.model,
                $container: $('.user-reviews')
            })
        }
    });

})();