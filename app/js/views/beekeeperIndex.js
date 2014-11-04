Bees.Views.BeekeeperIndex = BaseView.extend({
    className: 'beekeeper',
    template: Bees.templates.beekeeperIndex,
    initialize: function(opts){
        var options = _.defaults({}, opts, {
            $container: opts.$container,
        })
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        var that = this;
        this.$el.append(this.template({user: Parse.User.current().toJSON()}));

        var query = new Parse.Query(Bees.Models.Request).equalTo('beekeeper', Parse.User.current());
        var requests = query.collection();
        requests.fetch().then(function(requests){
            new Bees.Views.RequestList({
                $container: $('.requests'),
                collection: requests
            });
        })

        // var query = new Parse.Query(Bees.Models.HiveGroup).equalTo('user', Parse.User.current());
        // var hiveGroups = query.collection();
        // hiveGroups.fetch().then(function(hiveGroups){
        //     new Bees.Views.HiveGroupList({
        //         $container: $('.hive-groups'),
        //         collection: hiveGroups
        //     })
        // })

    }

});


