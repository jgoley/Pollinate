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



        var requests = new Bees.Collections.Requests({
            user: Parse.User.current()
        })

        requests.fetch().then(function(requests){

            var accepted = new Parse.Collection(
                requests.filter(function(request){
                    return request.get('accepted');
            }));

            var unAccepted = new Parse.Collection(
                requests.filter(function(request){
                    return !request.get('accepted');
            }));

            console.log("Accepted", accepted);
            console.log("Not Accepted", unAccepted);

            new Bees.Views.RequestList({
                $container: $('.requests'),
                collection: requests
            });
        })
    }

});


