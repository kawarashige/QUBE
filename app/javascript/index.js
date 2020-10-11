const { AxesHelper, TangentSpaceNormalMap } = require("./three");

window.addEventListener("DOMContentLoaded", init);

function init() {
  const width = 960;
  const height = 540;
  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(width, height);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45,
    width / height,
    1,
    10000
  );
  camera.position.set(0, 1000, +1000); //cameraを指定しなければ表示されない！
  camera.lookAt(new THREE.Vector3(0, 0, 0));
  const controls = new THREE.OrbitControls(camera);
  
  

  const cube1 = new CubeBlue();
  cube1.position.set(
    -100,
    -100,
    -100
  );
  scene.add(cube1);
  

  const cube2 = new CubeGreen();
  cube2.position.set(
    0,
    -100,
    -100
  );
  scene.add(cube2);

  const cube3 = new CubeRed();
  cube3.position.set(
    100,
    -100,
    -100
  );
  scene.add(cube3);

  const cube4 = new CubeGreen();
  cube4.position.set(
    -100,
    -100,
    0
  );
  scene.add(cube4);

  const cube5 = new CubeRed();
  cube5.position.set(
    0,
    -100,
    0
  );
  scene.add(cube5)

  const cube6 = new CubeBlue();
  cube6.position.set(
    100,
    -100,
    0
  );
  scene.add(cube6);

  const cube7 = new CubeRed();
  cube7.position.set(
    -100,
    -100,
    100
  );
  scene.add(cube7);

  const cube8 = new CubeBlue();
  cube8.position.set(
    0,
    -100,
    100
  );
  scene.add(cube8);

  const cube9 = new CubeGreen();
  cube9.position.set(
    100,
    -100,
    100
  );
  scene.add(cube9);

  const cube10 = new CubeGreen();
  cube10.position.set(
    -100,
    0,
    -100
  );
  scene.add(cube10);
  

  const cube11 = new CubeRed();
  cube11.position.set(
    0,
    0,
    -100
  );
  scene.add(cube11);

  const cube12 = new CubeBlue();
  cube12.position.set(
    100,
    0,
    -100
  );
  scene.add(cube12);

  const cube13 = new CubeRed();
  cube13.position.set(
    -100,
    0,
    0
  );
  scene.add(cube13);

  const cube14 = new CubeBlue();
  cube14.position.set(
    0,
    0,
    0
  );
  scene.add(cube14)

  const cube15 = new CubeGreen();
  cube15.position.set(
    100,
    0,
    0
  );
  scene.add(cube15);

  const cube16 = new CubeBlue();
  cube16.position.set(
    -100,
    0,
    100
  );
  scene.add(cube16);

  const cube17 = new CubeGreen();
  cube17.position.set(
    0,
    0,
    100
  );
  scene.add(cube17);

  const cube18 = new CubeRed();
  cube18.position.set(
    100,
    0,
    100
  );
  scene.add(cube18);

  const cube19 = new CubeRed();
  cube19.position.set(
    -100,
    100,
    -100
  );
  scene.add(cube19);
  

  const cube20 = new CubeBlue();
  cube20.position.set(
    0,
    100,
    -100
  );
  scene.add(cube20);

  const cube21 = new CubeGreen();
  cube21.position.set(
    100,
    100,
    -100
  );
  scene.add(cube21);

  const cube22 = new CubeBlue();
  cube22.position.set(
    -100,
    100,
    0
  );
  scene.add(cube22);

  const cube23 = new CubeGreen();
  cube23.position.set(
    0,
    100,
    0
  );
  scene.add(cube23)

  const cube24 = new CubeRed();
  cube24.position.set(
    100,
    100,
    0
  );
  scene.add(cube24);

  const cube25 = new CubeGreen();
  cube25.position.set(
    -100,
    100,
    100
  );
  scene.add(cube25);

  const cube26 = new CubeRed();
  cube26.position.set(
    0,
    100,
    100
  );
  scene.add(cube26);

  const cube27 = new CubeBlue();
  cube27.position.set(
    100,
    100,
    100
  );
  scene.add(cube27);

  const plane1 = new PlaneOrange();
  plane1.position.set(
    -100,
    -100,
    -151
  );
  scene.add(plane1)

  const plane2 = new PlaneOrange();
  plane2.position.set(
    0,
    -100,
    -151
  );
  scene.add(plane2)

  const plane3 = new PlaneOrange();
  plane3.position.set(
    100,
    -100,
    -151
  );
  scene.add(plane3)

  const plane4 = new PlaneOrange();
  plane4.position.set(
    -100,
    0,
    -151
  );
  scene.add(plane4)

  const plane5 = new PlaneOrange();
  plane5.position.set(
    0,
    0,
    -151
  );
  scene.add(plane5)

  const plane6 = new PlaneOrange();
  plane6.position.set(
    100,
    0,
    -151
  );
  scene.add(plane6)

  const plane7 = new PlaneOrange();
  plane7.position.set(
    -100,
    100,
    -151
  );
  scene.add(plane7)

  const plane8 = new PlaneOrange();
  plane8.position.set(
    0,
    100,
    -151
  );
  scene.add(plane8)

  const plane9 = new PlaneOrange();
  plane9.position.set(
    100,
    100,
    -151
  );
  scene.add(plane9)

  const plane10 = new PlaneBlue();
  plane10.position.set(
    -151,
    -100,
    -100
  );
  plane10.rotation.y = Math.PI/2; 
  scene.add(plane10)

  const plane11 = new PlaneBlue();
  plane11.position.set(
    -151,
    -100,
    0
  );
  plane11.rotation.y = Math.PI/2; 
  scene.add(plane11)

  const plane12 = new PlaneBlue();
  plane12.position.set(
    -151,
    -100,
    100
  );
  plane12.rotation.y = Math.PI/2; 
  scene.add(plane12)

  const plane13 = new PlaneBlue();
  plane13.position.set(
    -151,
    0,
    -100
  );
  plane13.rotation.y = Math.PI/2; 
  scene.add(plane13)

  const plane14 = new PlaneBlue();
  plane14.position.set(
    -151,
    0,
    0
  );
  plane14.rotation.y = Math.PI/2; 
  scene.add(plane14)

  const plane15 = new PlaneBlue();
  plane15.position.set(
    -151,
    0,
    100
  );
  plane15.rotation.y = Math.PI/2; 
  scene.add(plane15)

  const plane16 = new PlaneBlue();
  plane16.position.set(
    -151,
    100,
    -100
  );
  plane16.rotation.y = Math.PI/2; 
  scene.add(plane16)

  const plane17 = new PlaneBlue();
  plane17.position.set(
    -151,
    100,
    0
  );
  plane17.rotation.y = Math.PI/2; 
  scene.add(plane17)

  const plane18 = new PlaneBlue();
  plane18.position.set(
    -151,
    100,
    100
  );
  plane18.rotation.y = Math.PI/2; 
  scene.add(plane18)

  const plane19 = new PlaneYellow();
  plane19.position.set(
    -100,
    151,
    -100
  );
  plane19.rotation.x = Math.PI/2; 
  scene.add(plane19)

  const plane20 = new PlaneYellow();
  plane20.position.set(
    0,
    151,
    -100
  );
  plane20.rotation.x = Math.PI/2; 
  scene.add(plane20)

  const plane21 = new PlaneYellow();
  plane21.position.set(
    100,
    151,
    -100
  );
  plane21.rotation.x = Math.PI/2; 
  scene.add(plane21)

  const plane22 = new PlaneYellow();
  plane22.position.set(
    -100,
    151,
    0
  );
  plane22.rotation.x = Math.PI/2; 
  scene.add(plane22)

  const plane23 = new PlaneYellow();
  plane23.position.set(
    0,
    151,
    0
  );
  plane23.rotation.x = Math.PI/2; 
  scene.add(plane23)

  const plane24 = new PlaneYellow();
  plane24.position.set(
    100,
    151,
    0
  );
  plane24.rotation.x = Math.PI/2; 
  scene.add(plane24)

  const plane25 = new PlaneYellow();
  plane25.position.set(
    -100,
    151,
    100
  );
  plane25.rotation.x = Math.PI/2; 
  scene.add(plane25)

  const plane26 = new PlaneYellow();
  plane26.position.set(
    0,
    151,
    100
  );
  plane26.rotation.x = Math.PI/2; 
  scene.add(plane26)

  const plane27 = new PlaneYellow();
  plane27.position.set(
    100,
    151,
    100
  );
  plane27.rotation.x = Math.PI/2; 
  scene.add(plane27)

  const plane28 = new PlaneRed();
  plane28.position.set(
    -100,
    -100,
    151
  );
  scene.add(plane28)

  const plane29 = new PlaneRed();
  plane29.position.set(
    0,
    -100,
    151
  );
  scene.add(plane29)

  const plane30 = new PlaneRed();
  plane30.position.set(
    100,
    -100,
    151
  );
  scene.add(plane30)

  const plane31 = new PlaneRed();
  plane31.position.set(
    -100,
    0,
    151
  );
  scene.add(plane31)

  const plane32 = new PlaneRed();
  plane32.position.set(
    0,
    0,
    151
  );
  scene.add(plane32)

  const plane33 = new PlaneRed();
  plane33.position.set(
    100,
    0,
    151
  );
  scene.add(plane33)

  const plane34 = new PlaneRed();
  plane34.position.set(
    -100,
    100,
    151
  );
  scene.add(plane34)

  const plane35 = new PlaneRed();
  plane35.position.set(
    0,
    100,
    151
  );
  scene.add(plane35)

  const plane36 = new PlaneRed();
  plane36.position.set(
    100,
    100,
    151
  );
  scene.add(plane36)

  const plane37 = new PlaneGreen();
  plane37.position.set(
    151,
    -100,
    -100
  );
  plane37.rotation.y = Math.PI/2; 
  scene.add(plane37)

  const plane38 = new PlaneGreen();
  plane38.position.set(
    151,
    -100,
    0
  );
  plane38.rotation.y = Math.PI/2; 
  scene.add(plane38)

  const plane39 = new PlaneGreen();
  plane39.position.set(
    151,
    -100,
    100
  );
  plane39.rotation.y = Math.PI/2; 
  scene.add(plane39)

  const plane40 = new PlaneGreen();
  plane40.position.set(
    151,
    0,
    -100
  );
  plane40.rotation.y = Math.PI/2; 
  scene.add(plane40)

  const plane41 = new PlaneGreen();
  plane41.position.set(
    151,
    0,
    0
  );
  plane41.rotation.y = Math.PI/2; 
  scene.add(plane41)

  const plane42 = new PlaneGreen();
  plane42.position.set(
    151,
    0,
    100
  );
  plane42.rotation.y = Math.PI/2; 
  scene.add(plane42)

  const plane43 = new PlaneGreen();
  plane43.position.set(
    151,
    100,
    -100
  );
  plane43.rotation.y = Math.PI/2; 
  scene.add(plane43)

  const plane44 = new PlaneGreen();
  plane44.position.set(
    151,
    100,
    0
  );
  plane44.rotation.y = Math.PI/2; 
  scene.add(plane44)

  const plane45 = new PlaneGreen();
  plane45.position.set(
    151,
    100,
    100
  );
  plane45.rotation.y = Math.PI/2; 
  scene.add(plane45)

  const plane46 = new PlaneWhite();
  plane46.position.set(
    -100,
    -151,
    -100
  );
  plane46.rotation.x = Math.PI/2; 
  scene.add(plane46)

  const plane47 = new PlaneWhite();
  plane47.position.set(
    0,
    -151,
    -100
  );
  plane47.rotation.x = Math.PI/2; 
  scene.add(plane47)

  const plane48 = new PlaneWhite();
  plane48.position.set(
    100,
    -151,
    -100
  );
  plane48.rotation.x = Math.PI/2; 
  scene.add(plane48)

  const plane49 = new PlaneWhite();
  plane49.position.set(
    -100,
    -151,
    0
  );
  plane49.rotation.x = Math.PI/2; 
  scene.add(plane49)

  const plane50 = new PlaneWhite();
  plane50.position.set(
    0,
    -151,
    0
  );
  plane50.rotation.x = Math.PI/2; 
  scene.add(plane50)

  const plane51 = new PlaneWhite();
  plane51.position.set(
    100,
    -151,
    0
  );
  plane51.rotation.x = Math.PI/2; 
  scene.add(plane51)

  const plane52 = new PlaneWhite();
  plane52.position.set(
    -100,
    -151,
    100
  );
  plane52.rotation.x = Math.PI/2; 
  scene.add(plane52)

  const plane53 = new PlaneWhite();
  plane53.position.set(
    0,
    -151,
    100
  );
  plane53.rotation.x = Math.PI/2; 
  scene.add(plane53)

  const plane54 = new PlaneWhite();
  plane54.position.set(
    100,
    -151,
    100
  );
  plane54.rotation.x = Math.PI/2; 
  scene.add(plane54)

  const light = new THREE.AmbientLight(0xFFFFFF, 1.0);
  scene.add(light);

  tick();

  function tick(){

    requestAnimationFrame(tick);
    // cube1.rotation.x += 0.005;
    // cube1.rotation.y += 0.005;
    // cube2.rotation.x += 0.005;
    // cube2.rotation.y += 0.005;
    // cube3.rotation.x += 0.005;
    // cube3.rotation.y += 0.005;
    // cube4.rotation.x += 0.005;
    // cube4.rotation.y += 0.005;
    // cube5.rotation.x += 0.005;
    // cube5.rotation.y += 0.005;
    // cube6.rotation.x += 0.005;
    // cube6.rotation.y += 0.005;
    // cube7.rotation.x += 0.005;
    // cube7.rotation.y += 0.005;
    // cube8.rotation.x += 0.005;
    // cube8.rotation.y += 0.005;
    // cube9.rotation.x += 0.005;
    // cube9.rotation.y += 0.005;
    // cube10.rotation.x += 0.005;
    // cube10.rotation.y += 0.005;
    // cube11.rotation.x += 0.005;
    // cube11.rotation.y += 0.005;
    // cube12.rotation.x += 0.005;
    // cube12.rotation.y += 0.005;
    // cube13.rotation.x += 0.005;
    // cube13.rotation.y += 0.005;
    // cube14.rotation.x += 0.005;
    // cube14.rotation.y += 0.005;
    // cube15.rotation.x += 0.005;
    // cube15.rotation.y += 0.005;
    // cube16.rotation.x += 0.005;
    // cube16.rotation.y += 0.005;
    // cube17.rotation.x += 0.005;
    // cube17.rotation.y += 0.005;
    // cube18.rotation.x += 0.005;
    // cube18.rotation.y += 0.005;
    // cube19.rotation.x += 0.005;
    // cube19.rotation.y += 0.005;
    // cube20.rotation.x += 0.005;
    // cube20.rotation.y += 0.005;
    // cube21.rotation.x += 0.005;
    // cube21.rotation.y += 0.005;
    // cube22.rotation.x += 0.005;
    // cube22.rotation.y += 0.005;
    // cube23.rotation.x += 0.005;
    // cube23.rotation.y += 0.005;
    // cube24.rotation.x += 0.005;
    // cube24.rotation.y += 0.005;
    // cube25.rotation.x += 0.005;
    // cube25.rotation.y += 0.005;
    // cube26.rotation.x += 0.005;
    // cube26.rotation.y += 0.005;
    // cube27.rotation.x += 0.005;
    // cube27.rotation.y += 0.005;
    // plane1.rotation.x += 0.005;
    // plane1.rotation.y += 0.005;
    // plane2.rotation.x += 0.005;
    // plane2.rotation.y += 0.005;
    // plane3.rotation.x += 0.005;
    // plane3.rotation.y += 0.005;
    // plane4.rotation.x += 0.005;
    // plane4.rotation.y += 0.005;
    // plane5.rotation.x += 0.005;
    // plane5.rotation.y += 0.005;
    // plane6.rotation.x += 0.005;
    // plane6.rotation.y += 0.005;
    // plane7.rotation.x += 0.005;
    // plane7.rotation.y += 0.005;
    // plane8.rotation.x += 0.005;
    // plane8.rotation.y += 0.005;
    // plane9.rotation.x += 0.005;
    // plane9.rotation.y += 0.005;
    // plane10.rotation.x += 0.005;
    // plane10.rotation.y += 0.005;
    // plane11.rotation.x += 0.005;
    // plane11.rotation.y += 0.005;
    // plane12.rotation.x += 0.005;
    // plane12.rotation.y += 0.005;
    // plane13.rotation.x += 0.005;
    // plane13.rotation.y += 0.005;
    // plane14.rotation.x += 0.005;
    // plane14.rotation.y += 0.005;
    // plane15.rotation.x += 0.005;
    // plane15.rotation.y += 0.005;
    // plane16.rotation.x += 0.005;
    // plane16.rotation.y += 0.005;
    // plane17.rotation.x += 0.005;
    // plane17.rotation.y += 0.005;
    // plane18.rotation.x += 0.005;
    // plane18.rotation.y += 0.005;
    // plane19.rotation.x += 0.005;
    // plane19.rotation.y += 0.005;
    // plane20.rotation.x += 0.005;
    // plane20.rotation.y += 0.005;
    // plane21.rotation.x += 0.005;
    // plane21.rotation.y += 0.005;
    // plane22.rotation.x += 0.005;
    // plane22.rotation.y += 0.005;
    // plane23.rotation.x += 0.005;
    // plane23.rotation.y += 0.005;
    // plane24.rotation.x += 0.005;
    // plane24.rotation.y += 0.005;
    // plane25.rotation.x += 0.005;
    // plane25.rotation.y += 0.005;
    // plane26.rotation.x += 0.005;
    // plane26.rotation.y += 0.005;
    // plane27.rotation.x += 0.005;
    // plane27.rotation.y += 0.005;
    // plane28.rotation.x += 0.005;
    // plane28.rotation.y += 0.005;
    // plane29.rotation.x += 0.005;
    // plane29.rotation.y += 0.005;
    // plane30.rotation.x += 0.005;
    // plane30.rotation.y += 0.005;
    // plane31.rotation.x += 0.005;
    // plane31.rotation.y += 0.005;
    // plane32.rotation.x += 0.005;
    // plane32.rotation.y += 0.005;
    // plane33.rotation.x += 0.005;
    // plane33.rotation.y += 0.005;
    // plane34.rotation.x += 0.005;
    // plane34.rotation.y += 0.005;
    // plane35.rotation.x += 0.005;
    // plane35.rotation.y += 0.005;
    // plane36.rotation.x += 0.005;
    // plane36.rotation.y += 0.005;
    // plane37.rotation.x += 0.005;
    // plane37.rotation.y += 0.005;
    // plane38.rotation.x += 0.005;
    // plane38.rotation.y += 0.005;
    // plane39.rotation.x += 0.005;
    // plane39.rotation.y += 0.005;
    // plane40.rotation.x += 0.005;
    // plane40.rotation.y += 0.005;
    // plane41.rotation.x += 0.005;
    // plane41.rotation.y += 0.005;
    // plane42.rotation.x += 0.005;
    // plane42.rotation.y += 0.005;
    // plane43.rotation.x += 0.005;
    // plane43.rotation.y += 0.005;
    // plane44.rotation.x += 0.005;
    // plane44.rotation.y += 0.005;
    // plane45.rotation.x += 0.005;
    // plane45.rotation.y += 0.005;
    // plane46.rotation.x += 0.005;
    // plane46.rotation.y += 0.005;
    // plane47.rotation.x += 0.005;
    // plane47.rotation.y += 0.005;
    // plane48.rotation.x += 0.005;
    // plane48.rotation.y += 0.005;
    // plane49.rotation.x += 0.005;
    // plane49.rotation.y += 0.005;
    // plane50.rotation.x += 0.005;
    // plane50.rotation.y += 0.005;
    // plane51.rotation.x += 0.005;
    // plane51.rotation.y += 0.005;
    // plane52.rotation.x += 0.005;
    // plane52.rotation.y += 0.005;
    // plane53.rotation.x += 0.005;
    // plane53.rotation.y += 0.005;
    // plane54.rotation.x += 0.005;
    // plane54.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  

}

class CubeBlue extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000
    });
    super(geometry, material);
  } 
}

class CubeGreen extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000
    });
    super(geometry, material);
  } 
}

class CubeRed extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.BoxGeometry(100, 100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0x000000
    });
    super(geometry, material);
  } 
}

class PlaneRed extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.PlaneGeometry(92, 92);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xff0000, side: THREE.DoubleSide 
    });
    super(geometry, material);
  }
}

class PlaneBlue extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.PlaneGeometry(92, 92);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x0000ff, side: THREE.DoubleSide 
    });
    super(geometry, material);
  }
}

class PlaneYellow extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.PlaneGeometry(92, 92);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffff00, side: THREE.DoubleSide
    });
    super(geometry, material);
  }
}

class PlaneOrange extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.PlaneGeometry(92, 92);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0xfd7e00, side: THREE.DoubleSide 
    });
    super(geometry, material);
  }
}

class PlaneGreen extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.PlaneGeometry(92, 92);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x00ff00, side: THREE.DoubleSide 
    });
    super(geometry, material);
  }
}

class PlaneWhite extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.PlaneGeometry(92, 92);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffffff, side: THREE.DoubleSide
    });
    super(geometry, material);
  }
}

// class PlaneBlue extends THREE.Mesh {
//   constructor () {
//     const geometry = new THREE.BoxGeometry(0, 100, 100);
//     const material = new THREE.MeshStandardMaterial({
//       color: 0xffffff
//     });
//     super(geometry, material);
//   } 
// }