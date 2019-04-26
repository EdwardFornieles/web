AFRAME.registerComponent('artgalleryframe', {
  schema: {
    name: {type: 'string'},
    rotated: {type: 'bool'},
    metadata: {type: 'string'},
  },
  init: function () {
    const contents = document.getElementById('contents')
    const container = document.getElementById('container')

    const {object3D, sceneEl} = this.el

    // Hide the image target until it is found
    object3D.visible = false

    const frameEl = document.createElement('a-entity')
    frameEl.setAttribute('scale', '1 1 1')
    frameEl.setAttribute('position', '0 0 0')
    frameEl.setAttribute('gltf-model', '#heineken')
    frameEl.setAttribute('rotation', '90 0 00')
    if (this.data.rotated) {
      // Rotate the frame for a landscape target
      frameEl.setAttribute('rotation', '0 90 90')
    }
    this.el.appendChild(frameEl)

    var oldPos = 0;

    // showImage handles displaying and moving the virtual object to match the image
    const showImage = ({detail}) => {
      // Updating position/rotation/scale using object3D is more performant than setAttribute

//      var a1 = oldPos.x - object3D.position.x;
      object3D.position.copy(detail.position)
      if(oldPos == 0)
      {
        object3D.quaternion.copy(detail.rotation)
        oldPos = 1;
      }
      object3D.scale.set(detail.scale, detail.scale, detail.scale)
      object3D.visible = true
      playSound();
      showhide(true, 'logo');
//      alert(a1);
    }

    // hideImage handles hiding the virtual object when the image target is lost
    const hideImage = () => {
      object3D.visible = false
      showhide(false, 'logo');
      oldPos = 0;
    }

    // These events are routed and dispatched by xrextras-generate-image-targets
    this.el.addEventListener('xrimagefound', showImage)
    this.el.addEventListener('xrimageupdated', showImage)
    this.el.addEventListener('xrimagelost', hideImage)

    console.log("loaded");
    showhide(false, 'logo');
    showhide(false, 'photo');
  }
})

// xrextras-generate-image-targets uses this primitive to automatically populate multiple image targets
AFRAME.registerPrimitive('artgallery-frame', {
  defaultComponents: {
    artgalleryframe: {},
  },

  mappings: {
    name: 'artgalleryframe.name',
    rotated: 'artgalleryframe.rotated',
    metadata: 'artgalleryframe.metadata',
  }
})

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}
function showhide(flag, _id) {
  var logo = document.getElementById(_id);
  if(flag) {
    logo.style.display = "none";
  } else {
    logo.style.display = "block";
  }
}
function takePhoto() {
  alert("clicked photo image");
}