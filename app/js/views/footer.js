Bees.Views.FooterView = Parse.View.extend({
    tagName: 'footer',
    template: Bees.templates.footer, //Handlebars.compile($('#footer').html()),
    initialize: function(opts){
        var options = _.defaults({}, opts,{
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },
    render: function(){
        this.$el.html(this.template())
        // new Bees.Views.BaseView({
        //     $container: $('body')
        // })
    }

});