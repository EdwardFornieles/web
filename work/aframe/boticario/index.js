AFRAME.registerComponent('gallery', {
  schema: {
    name: {type: 'string'},
    rotated: {type: 'bool'},
    metadata: {type: 'string'},
  },
  init: function () {

    var image1 = document.querySelector('#index1');
      image1.addEventListener('click', function(e) {
        window.open("https://www.ifood.com.br/lista-restaurantes/1/");
      })
    var image2 = document.querySelector('#index2');
      image2.addEventListener('click', function(e) {
        window.open("https://www.ifood.com.br/lista-restaurantes/2/");
      })
    var image3 = document.querySelector('#index3');
      image3.addEventListener('click', function(e) {
        window.open("https://www.ifood.com.br/lista-restaurantes/3/");
      })
     var image4 = document.querySelector('#index4');
      image4.addEventListener('click', function(e) {
        window.open("https://www.ifood.com.br/lista-restaurantes/4/");
      })
    var image5 = document.querySelector('#index5');
      image5.addEventListener('click', function(e) {
        window.open("https://www.ifood.com.br/lista-restaurantes/5/");
      })                 

    // showImage handles displaying and moving the virtual object to match the image
    const showImage = ({detail}) => {
      showhide(true, 'index1');
      showhide(true, 'index2');
      showhide(true, 'index3');
      showhide(true, 'index4');
      showhide(true, 'index5');

      setTimeout(Rescan, 40000);

      console.log("show");
    }

    // hideImage handles hiding the virtual object when the image target is lost
    const hideImage = () => {
      console.log("hide");
    }

    const Rescan = () => {
      showhide(false, 'index1');
      showhide(false, 'index2');
      showhide(false, 'index3');
      showhide(false, 'index4');
      showhide(false, 'index5');

      console.log("rescan");
    }

    // These events are routed and dispatched by xrextras-generate-image-targets
    this.el.addEventListener('xrimagefound', showImage)
    this.el.addEventListener('xrimageupdated', showImage)
    this.el.addEventListener('xrimagelost', hideImage)

    showhide(false, 'index1');
    showhide(false, 'index2');
    showhide(false, 'index3');
    showhide(false, 'index4');
    showhide(false, 'index5');

    console.log("loaded");
  }
})

// xrextras-generate-image-targets uses this primitive to automatically populate multiple image targets
AFRAME.registerPrimitive('gallery-frame', {
  defaultComponents: {
    gallery: {},
  },

  mappings: {
    name: 'gallery.name',
    rotated: 'gallery.rotated',
    metadata: 'gallery.metadata',
  }
})

function showhide(flag, _id) {
  var logoImg = document.getElementById(_id);
  if(flag) {
    logoImg.style.display = "block";
  } else {
    logoImg.style.display = "none";
  }
}