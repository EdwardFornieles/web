var sound1;
var isTracking = 0;

AFRAME.registerComponent('boticarioframe', {
  schema: {
    name: {type: 'string'},
    rotated: {type: 'bool'},
    metadata: {type: 'string'},
  },
  init: function () {
 
 const container = document.getElementById('bottom')

// Container starts hidden so it isn't visible when the page is still loading
    container.style.display = 'block'

     const {object3D, sceneEl} = this.el

    // These events are routed and dispatched by xrextras-generate-image-targets
    this.el.addEventListener('xrimagefound', showImage)
    this.el.addEventListener('xrimageupdated', showImage)
    this.el.addEventListener('xrimagelost', hideImage)

    showhide(false, 'boticario');

    console.log("loaded");
  }
})

// xrextras-generate-image-targets uses this primitive to automatically populate multiple image targets
AFRAME.registerPrimitive('boticario-frame', {
  defaultComponents: {
    boticarioframe: {},
  },

  mappings: {
    name: 'boticarioframe.name',
    rotated: 'boticarioframe.rotated',
    metadata: 'boticarioframe.metadata',
  }
})

function showhide(flag, _id) {
  var logoImg = document.getElementById(_id);
  if(flag) {
    logoImg.style.display = "none";
  } else {
    logoImg.style.display = "block";
  }
}