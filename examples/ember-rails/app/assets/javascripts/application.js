// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery
//= require handlebars
//= require ember
//= require ember-data
//= require ember-devise-simple-auth/globals
//= require_self
//= require devise_simple_auth_example

// for more details see: http://emberjs.com/guides/application/
DeviseSimpleAuthExample = Ember.Application.create({
  deviseSimpleAuth: {
      // Uncomment any of the lines below to see the impact
      // of these settings on your application
      // signInPath: '/login',
      // deviseSignInPath: '/sessions',  // These settings require uncommenting the
      // deviseSignOutPath: '/sessions', // routes configured in config/routes.rb
      // currentSessionPath: '/me'       // Please enable them after uncommenting these settings
  }
});

//= require_tree .
