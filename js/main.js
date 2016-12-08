angular.module('portfolio', [])
  .controller('portfolioController', function() {
    var app = this;

    app.labels = {
      name: "Molly Robison",
      headline: "UI/UX Designer",
      work: "Work",
      resume: "Resume",
      about: "About Me",
      contact: "Contact"
    };

    app.projects = [
      {title: "Appspirin",
        img: "img/thumbs/appspirin.jpg"
      },
      {title: "Teledraw",
        img: "img/thumbs/teledraw.jpg"
      },
      {title: "Auction Pal",
        img: "img/thumbs/auction.jpg"
      },
      {title: "Foreclosure",
        img: "img/thumbs/foreclosure.jpg"
      },
      {title: "Art",
        img: "img/thumbs/art.jpg"
      }
    ];
  });
