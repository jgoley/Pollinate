Bees.Views.Map = Parse.View.extend({
    id: "map",

    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {

        console.log(this.collection, this.model);
        var points;
        window.user = Parse.User.current();
        var map = new GMaps({
          div: '#map',
          lat: user.get('geoCenter').latitude,
          lng: user.get('geoCenter').longitude,
        });

        map.addMarker({
          lat: user.get('geoCenter').latitude,
          lng: user.get('geoCenter').longitude,
          title: 'Lima',
          click: function(e) {
            alert('You clicked in this marker');
          }
        });

        this.collection.each(function(user){
            console.log(user.get('geoCenter'));
            map.addMarker({
              lat: user.get('geoCenter').latitude,
              lng: user.get('geoCenter').longitude,
              title: user.get('firstName'),
              click: function(e) {
                // alert('You clicked in this marker');
              },
                infoWindow: {
                  content: user.get('lastName'),
                }
            });
        })
        map.fitZoom();
    },

});