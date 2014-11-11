(function(){

    'use strict';

    Bees.Views.Request = BaseView.extend({
        className: 'request-container',
        tagName: 'section',
        template: Bees.templates.requests.solo,
        events:{
            'click .edit-request': 'editRequest',
        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
            });
            options.$container.html(this.el);
            this.render();
        },
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));            
        },

        editRequest: function(){
            console.log("sdfasdfa");
            BeesApp.navigate('request/'+this.model.id+'/edit', {trigger: true});
        }
    });

    Bees.Views.RequestEdit = BaseView.extend({
        className: 'request-container',
        tagName: 'section',
        template: Bees.templates.requests.soloEdit,
        events:{
            'click .edit-request': 'editRequest',
            'click .cancel-edit': 'cancel'

        },
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                beekeeper: opts.beekeeper
            });
            this.beekeeper = options.beekeeper;
            options.$container.html(this.el);
            this.render();
        },
        render: function() {
            this.$el.append(this.template(this.model.toJSON()));            
        },

        editRequest: function(){
            console.log("3333");
            var that = this;
            var request = this.model;
            var user = Parse.User.current();
            var beekeeper = this.beekeeper;
            var startDate = $('[name=startDate]').val();
            var endDate = $('[name=endDate]').val();
            var numHivesRequested = $('[name=numHives]').val();
            var user = new Parse.Query(Bees.Models.User);
            user.get(this.model.get('beekeeper').id)
                .then(function(beekeeper){
                    if (numHivesRequested <= beekeeper.get('hivesAvailable') && numHivesRequested > 0) {
                        request.set(calculateCost(numHivesRequested, beekeeper));
                        request.set('startDate', startDate);
                        request.set('endDate', endDate);
                    } else if (numHivesRequested <= 0) {
                        alert("Please enter a request of 1 or more hives");
                    } else {
                        alert("You've selected more hives than the number available in the beekeeper's inventory");
                    }
                    request.save();
                    var email = {
                        message: 'Request '+request.id+'has been updated. The requested hive number of hives is '+request.get('numHives'),
                        subject: 'Pollinate Request has been edited',
                        from: 'jgoley.etc@gmail.com',
                        to: 'jgoley@gmail.com'//beekeeper.get('email'),
                    }
                    sendMail(email);

                    BeesApp.navigate('request/'+that.model.id, {trigger: true});
                });
        },
        cancel: function(){
            BeesApp.navigate('request/'+this.model.id, {trigger: true});
        }

    });

})();