/*
    ___        ________   ________     
   |\  \      |\   ____\ |\   __  \    
   \ \  \     \ \  \___| \ \  \|\  \   
 __ \ \  \     \ \  \  ___\ \  \\\  \  
|\  \\_\  \  ___\ \  \|\  \\ \  \\\  \ 
\ \________\|\__\\ \_______\\ \_______\
 \|________|\|__| \|_______| \|_______|

 */

/* globals Pix, $, Parse, _ , PixApp */
/* jshint quotmark: false */

(function() {

    'use strict';

    window.Bees = {};
    Bees.Views = {};
    Bees.Models = {};
    Bees.Collections = {};
    Bees.currentView = null;
    Bees.viewIndex = {};
    
})();


$(function() {
    Parse.initialize("HJ2pcl7OeW4shsUtxq04ZzZAQeAgwSIhe5IaWiQt", "UxWDTnnEnZc20pFLzbPP3IikP8RZlOa7VwRAB7Xz");
    window.BeesApp = new Bees.Router();
    Parse.history.start();
    $.slidebars({
        disableOver: 600
    });
});
