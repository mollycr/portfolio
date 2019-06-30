var appa = angular.module('portfolio', ["ngRoute"])
  .controller('portfolioController', ['$location', function($location) {
    var app = this;

    app.cp = {};

    app.setCurrentProject = function(id) {
      app.cp = app.projects[id];
      console.log(id);
      $location.url("/projects");
      $location.hash("top");
      return;
    };

    app.labels = {
      name: "Owen Robison",
      work: "Work",
      resume: "Resume",
      about: "About Me",
      contact: "Contact"
    };

    app.text = {
      about: ["Design is a social issue. Information professionals wield a lot of power today - we decide what to highlight and what to hide, which influences how people act and feel. Society is so intertwined with technology, and the design decisions that we make have a strong impact on humanity. We can use design to empower, or to disenfranchise, and we should not take that power lightly. As we shape the digital commons, we need to be mindful that we\'re not just building products, we\'re building a world. Designers are architects that work to make that world liveable.",
      "In light of all that, I'm selective about what I contribute to. Ads, e-commerce and driving click traffic aren\'t things that I can be passionate about. I work on products that empower people to make good and informed decisions that are in their best interest, not the product\'s.",
      "I am a transgender man - I use he/him pronouns. A lot of my work is under my previous name."]
    };

    app.projectFiles = ["js/projects/jobassessment.json", "js/projects/appspirin.json", "js/projects/auctionPal.json", "js/projects/teledraw.json", "js/projects/foreclosure.json", "js/projects/art.json"];

    app.projects = [];

    for (var i = 0, len = app.projectFiles.length; i < len; i++) {
      $.getJSON(app.projectFiles[i], function(json) {
        app.projects.push(json);
      })
    };

  }]);

  appa.config(function($routeProvider) {
      $routeProvider
      .when("/", {
          templateUrl : "homepage.html"
      })
      .when("/projects", {
          templateUrl : "project.html"
      });
      //TODO throw in another layer: eg /projects/appspirin
  });
