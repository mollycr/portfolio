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
      tagline: "Connecting design and code",
      name: "Molly Robison",
      work: "Work",
      resume: "Resume",
      about: "About Me",
      contact: "Contact"
    };

    app.text = {
      about: ["I believe that design is a social issue. We wield a lot of power as information professionals - we decide what to highlight and what to hide, and influence how people feel. As our society becomes more intertwined with technology, the design decisions that we make have a stronger impact on humanity. We can use design to empower, or to disenfranchise, and we should not take that power lightly. The internet is our third space, our commons, and we need to be mindful that we\'re not just building products, we\'re building a world. I work to make that world liveable.",
       "In my spare time I officiate with the Peninsula Roller Girls as Joelle Van Die, sew pretty poorly, and knit pretty well."],
    };

    app.projectFiles = ["js/projects/appspirin.json", "js/projects/auctionPal.json", "js/projects/teledraw.json", "js/projects/foreclosure.json", "js/projects/art.json"];

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
