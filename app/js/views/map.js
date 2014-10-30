Bees.Views.Map = BaseView.extend({
    id: "map",
    initialize: function(opts) {
        var options = _.defaults({}, opts, {
            $container: opts.$container
        });
        options.$container.html(this.el);
        this.render();
    },

    render: function() {
        colors = ['red','green','blue','orange'];
        var that = this;
        var points;
        window.user = Parse.User.current();
        var map = new GMaps({
            div: '#map',
            lat: user.get('geoCenter').latitude,
            lng: user.get('geoCenter').longitude,
        });
        var i =0;
        this.collection.each(function(user) {
            if(user.get('userType') === 'beekeeper'){
                var icon = 'https://maps.google.com/mapfiles/kml/paddle/B.png';
            }   else{
                var icon = 'https://maps.google.com/mapfiles/kml/paddle/F.png';
            }
            map.addMarker({
                lat: user.get('geoCenter').latitude,
                lng: user.get('geoCenter').longitude,
                title: user.get('firstName'),
                icon: icon,
                click: function(e) {
                    // alert('You clicked in this marker');
                    BeesApp.navigate('user/' + user.get('username'), {
                        trigger: true
                    });
                    that.remove();
                },
                infoWindow: {
                    content: user.get('userType'),
                }
            });
            if(user.get('userType') == 'beekeeper'){
                map.drawCircle({
                    lat: user.get('geoCenter').latitude,
                    lng: user.get('geoCenter').longitude,
                    radius: user.get('geoRangeRadius')/0.00062137, // convert miles to meters
                    fillColor: colors[i],
                    fillOpacity: .3,
                    strokeColor: '#999',
                    strokeWeight: 1,
                    strokeOpacity: .8,
                    clickable: true

                })
            }
            i++;
        })
        map.fitZoom();
    },

});