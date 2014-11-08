Bees.Views.BeekeeperIndex = BaseView.extend({
    className: 'beekeeper',
    currentDate: moment().format('YYYY-MM-DD'),
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        var that = this;
        this.$el.append(this.el);
        new Bees.Collections.Requests({
            user: Parse.User.current()
        }).fetch().then(function(requests){
            var accepted = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('accepted');
            }));

            var unAccepted = new Parse.Collection(
                requests.filter(function(request){
                    return !request.get('accepted');
            }));

            var hivesOut = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('startDate') <= that.currentDate && request.get('endDate') >= that.currentDate;
            }));

            console.log("Hives out: ",hivesOut);

            console.log("Accepted", accepted);
            console.log("Not Accepted", unAccepted);
            console.log("All Requests", requests);

            new Bees.Views.BeekeeperIndexInfo({
                $container: that.$el,
            });

            new Bees.Views.BeekeeperHivesOut({
                $container: that.$el,
                collection: hivesOut
            });

            new Bees.Views.RequestList({
                $container: that.$el,
                collection: requests
            });
        })
    }

});


Bees.Views.BeekeeperIndexInfo = BaseView.extend({
    className: 'beekeeper',
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
        var that = this;
        this.$el.append(this.template());
        this.collection.each(_.bind(this.renderChildren, this));
    },
    renderChildren: function(request){
        console.log(request);
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
        this.$el.append(this.template({request: this.model.toJSON()}));
    }

})

            
