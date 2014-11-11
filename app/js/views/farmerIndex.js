(function(){

    'use strict';

    Bees.Views.FarmerIndex = BaseView.extend({
        subViews: [],
        className: 'landing',
        template: Bees.templates.userLanding,
        initialize: function(opts){
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            })
            options.$container.html(this.el);
            this.render();
        },
        // render: function(){
        //     this.$el.append(this.template({user: Parse.User.current().toJSON()}));
        // }
         render: function(){
            var that = this;
            var requests = this.collection;
            this.$el.html(this.template(Parse.User.current().toJSON()));

            var unAccepted = new Parse.Collection(
                requests.filter(function(request){
                    return !request.get('accepted');
            }));

            this.subViews.push(
                new Bees.Views.RequestList({
                    $container: $('.requests'),
                    collection: unAccepted,
            }));

            new Bees.Collections.UserReviews({
                user: Parse.User.current(),
                limit:5,
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

            queryBeekeepers(0).then(function(beekeepers) {
                    beekeepers = new Parse.Collection(beekeepers);
                    that.subViews.push(
                        new Bees.Views.UserShortList({
                            $container: $('.near-users'),
                            collection: beekeepers,
                            type: 'Beekeepers'
                        }))     
                })
        }

    });

})();