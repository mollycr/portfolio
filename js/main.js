angular.module('portfolio', [])
  .controller('portfolioController', function() {
    var app = this;

    app.labels = {
      tagline: "Connecting design and code",
      name: "Molly Robison",
      work: "Work",
      resume: "Resume",
      about: "About Me",
      contact: "Contact"
    };

    app.text = {
      about: ["I believe that design is a social issue. We wield a lot of power as information professionals - we decide what to highlight and what to hide, and influence how people feel. As our society becomes more intertwined with technology, the design decisions that we make have a stronger impact on humanity. We can use design to empower, or to disenfranchise, and we should not take that power lightly. The internet is our third space, our commons, and we need to be mindful that we&apos;re not just building products, we&apos;re building a world. I work to make that world liveable.",
       "In my spare time I officiate with the Peninsula Roller Girls as Joelle Van Die, sew pretty poorly, and knit pretty well."],
    };

    app.projects = [
      {title: "Appspirin",
        img: "img/thumbs/appspirin.png"
      },
      {title: "Teledraw",
        img: "img/thumbs/teledraw.png"
      },
      {title: "Auction Pal",
        img: "img/thumbs/auctionPal.png"
      },
      {title: "Foreclosure",
        img: "img/thumbs/foreclosure.png"
      },
      {title: "Art",
        img: "img/thumbs/utensils.png"
      }
    ];
  });
