var appa = angular.module('portfolio', ["ngRoute"])
  .controller('portfolioController', ['$location', function($location) {
    var app = this;

    app.cp = {};

    app.setCurrentProject = function(id) {
      //TODO: I want this to be a pointer and idk if it is
      app.cp = app.projects[id];
      console.log(id);
      $location.url("/projects");
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

    app.projects = [
      {title: "Appspirin",
        img: "img/thumbs/appspirin.png",
        summary: "This is a one-sentence summary, roughly. It actually has two sentences, so sue me.",
        paragraphs: [
          {subtitle: "Lorem Ipsum",
          imgs: ["img/pr-placeholder.png", "img/pr-placeholder.png", "img/pr-placeholder.png"],
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        ]
      },
      {title: "Teledraw",
        img: "img/thumbs/teledraw.png",
        summary: "asdf",
        paragraphs: [
          {imgs: ["img/appspirin/1.png"],
          text: "asdf"}
        ]
      },
      {title: "Auction Pal",
        img: "img/thumbs/auctionPal.png",
        summary: "asdf",
        paragraphs: [
          {imgs: ["img/appspirin/1.png"],
          text: "asdf"}
        ]
      },
      {title: "Foreclosure",
        img: "img/thumbs/foreclosure.png",
        summary: "asdf",
        paragraphs: [
          {imgs: ["img/appspirin/1.png"],
          text: "asdf"}
        ]
      },
      {title: "Art",
        img: "img/thumbs/utensils.png",
        summary: "asdf",
        paragraphs: [
          {imgs: ["img/appspirin/1.png"],
          text: "asdf"}
        ]
      }
    ];

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
