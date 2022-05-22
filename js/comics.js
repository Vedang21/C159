AFRAME.registerComponent("comics",{
    init: function () {
      this.placesContainer = this.el;
    },
    createPoster:function () {
        const entityEl = documennt.createElement("a-entity");
        entityEl.setAttribute("visible"=true)
        entityEl.setAttribute("geommetry",{
            primitive:"rectangle",
            width:20,
            height:30 
        });

        entityEl.setAttribute("position",{x:0,y:5,z:0.1});
        entityEl.setAttribute("materail",{src:'assets/thumbnails/Avengers.jpg'});
    },
    createCards: function () {
      const thumbNailsRef = [
        {id: "avengers",
          title: "Avengers",
          url: "./assets/thumbnails/Avengers.jpg",},
        {id: "marvel",
          title: "Marvel",
          url: "./assets/thumbnails/marvel.jpg", },
        {id: "spiderman",
          title: "Spider Man",
          url: "./assets/thumbnails/spiderman.jpg",},
        {id: "venom",
          title: "Venom",
          url: "./assets/thumbnails/venom.jpeg",},
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        
        this.placesContainer.appendChild(borderEl);
      }
    },

    
  });