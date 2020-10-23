
function init() {
  const width = 430;
  const height = 430;

  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();


  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    45, width / height, 1, 10000);

  const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#myCanvas")});
  
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  renderer.setSize(width, height);
  renderer.shadowMap.enabled = false;

  camera.position.set(-4000, 3000, 0); //cameraを指定しなければ表示されない！
  camera.lookAt(scene.position);

  const spotLight = new THREE.SpotLight(0xfff);
  spotLight.position.set(-40, 60, -10);
  spotLight.castShadow = true;
  scene.add(spotLight);

  const orbitControls = new THREE.OrbitControls(camera);
  // orbitControls.update();
  // orbitControls.addEventListener('change', tick);

  // const transControls = new THREE.TransformControls(camera);
  // transControls.addEventListener('change', tick);

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  // documnet.addEventListener('mousemove', ondocumentMouseMove, false);



  // const groupCube = new THREE.Group();
  // const cubes = [];
  // cubes.push(new THREE.MeshBasicMaterial({color: 0xC41E3A}));
  // cubes.push(new THREE.MeshBasicMaterial({color: 0xff5800}));
  // cubes.push(new THREE.MeshBasicMaterial({color: 0xffd500}));
  // cubes.push(new THREE.MeshBasicMaterial({color: 0xffffff}));
  // cubes.push(new THREE.MeshBasicMaterial({color: 0x0051ba}));
  // cubes.push(new THREE.MeshBasicMaterial({color: 0x009e60}));

  // const face = new THREE.MultiMaterial(cubes);

  // for (let x = -1; x <= 1; x++) {
  //   for (let y = -1; y <= 1; y++) {
  //     for (let z = -1; z <= 1; z++) {
  //       const geoCube = new THREE.BoxGeometry(90, 90, 90);
  //       const cube = new THREE.Mesh(geoCube, face)

  //       cube.position.set(
  //         100 * x,
  //         100 * y,
  //         100 * z 
  //         );

  //       groupCube.add(cube);
  //     }
  //   }
  // }

  // scene.add(groupCube);



  // const groupCubesWr = new THREE.Group();
  // const groupCubesWc = new THREE.Group();
  // const groupCubesWl = new THREE.Group();

  // const groupCubesHf = new THREE.Group();
  // const groupCubesHc = new THREE.Group();
  // const groupCubesHb = new THREE.Group();

  // const groupCubesDu = new THREE.Group();
  // const groupCubesDc = new THREE.Group();
  // const groupCubesDd = new THREE.Group();


  const cube1 = new Cube();
  cube1.position.set(
    -100,
    -100,
    -100 
  );
  scene.add(cube1);
  // groupCubesWl.add(cube1);
  // groupCubesHf.add(cube1);
  // groupCubesDd.add(cube1);



  const cube2 = new Cube();
  cube2.position.set(
    0,
    -100,
    -100
  );
  scene.add(cube2);
  // groupCubesWc.add(cube2);
  // groupCubesHf.add(cube2);
  // groupCubesDd.add(cube2);


  const cube3 = new Cube();
  cube3.position.set(
    100,
    -100,
    -100
  );
  scene.add(cube3);
  // groupCubesWr.add(cube3);
  // groupCubesHf.add(cube3);
  // groupCubesDd.add(cube3);


  const cube4 = new Cube();
  cube4.position.set(
    -100,
    -100,
    0
  );
  scene.add(cube4);
  // groupCubesWl.add(cube4);
  // groupCubesHc.add(cube4);
  // groupCubesDd.add(cube4);


  const cube5 = new Cube();
  cube5.position.set(
    0,
    -100,
    0
  );
  scene.add(cube5);
  // groupCubesWc.add(cube5);
  // groupCubesHc.add(cube5);
  // groupCubesDd.add(cube5);


  const cube6 = new Cube();
  cube6.position.set(
    100,
    -100,
    0
  );
  scene.add(cube6);
  // groupCubesWr.add(cube6);
  // groupCubesHc.add(cube6);
  // groupCubesDd.add(cube6);


  const cube7 = new Cube();
  cube7.position.set(
    -100,
    -100,
    100
  );
  scene.add(cube7);
  // groupCubesWl.add(cube7);
  // groupCubesHb.add(cube7);
  // groupCubesDd.add(cube7);


  const cube8 = new Cube();
  cube8.position.set(
    0,
    -100,
    100
  );
  scene.add(cube8);
  // groupCubesWc.add(cube8);
  // groupCubesHb.add(cube8);
  // groupCubesDd.add(cube8);


  const cube9 = new Cube();
  cube9.position.set(
    100,
    -100,
    100
  );
  scene.add(cube9);
  // groupCubesWr.add(cube9);
  // groupCubesHb.add(cube9);
  // groupCubesDd.add(cube9);


  const cube10 = new Cube();
  cube10.position.set(
    -100,
    0,
    -100
  );
  scene.add(cube10);
  // groupCubesWl.add(cube10);
  // groupCubesHf.add(cube10);
  // groupCubesDc.add(cube10);

  const cube11 = new Cube();
  cube11.position.set(
    0,
    0,
    -100
  );
  scene.add(cube11);
  // groupCubesWc.add(cube11);
  // groupCubesHf.add(cube11);
  // groupCubesDc.add(cube11);

  const cube12 = new Cube();
  cube12.position.set(
    100,
    0,
    -100
  );
  scene.add(cube12);
  // groupCubesWr.add(cube12);
  // groupCubesHf.add(cube12);
  // groupCubesDc.add(cube12);

  const cube13 = new Cube();
  cube13.position.set(
    -100,
    0,
    0
  );
  scene.add(cube13);
  // groupCubesWl.add(cube13);
  // groupCubesHc.add(cube13);
  // groupCubesDc.add(cube13);
  

  const cube14 = new Cube();
  cube14.position.set(
    0,
    0,
    0
  );
  scene.add(cube14);
  // groupCubesWc.add(cube14);
  // groupCubesHc.add(cube14);
  // groupCubesDc.add(cube14);

  const cube15 = new Cube();
  cube15.position.set(
    100,
    0,
    0
  );
  scene.add(cube15);
  // groupCubesWr.add(cube15);
  // groupCubesHc.add(cube15);
  // groupCubesDc.add(cube15);

  const cube16 = new Cube();
  cube16.position.set(
    -100,
    0,
    100
  );
  scene.add(cube16);
  // groupCubesWl.add(cube16);
  // groupCubesHb.add(cube16);
  // groupCubesDc.add(cube16);

  const cube17 = new Cube();
  cube17.position.set(
    0,
    0,
    100
  );
  scene.add(cube17);
  // groupCubesWc.add(cube17);
  // groupCubesHb.add(cube17);
  // groupCubesDc.add(cube17);

  const cube18 = new Cube();
  cube18.position.set(
    100,
    0,
    100
  );
  scene.add(cube18);
  // groupCubesWr.add(cube18);
  // groupCubesHb.add(cube18);
  // groupCubesDc.add(cube18);


  const cube19 = new Cube();
  cube19.position.set(
    -100,
    100,
    -100
  );
  scene.add(cube19);
  // groupCubesWl.add(cube19);
  // groupCubesHf.add(cube19);
  // groupCubesDu.add(cube19);
  

  const cube20 = new Cube();
  cube20.position.set(
    0,
    100,
    -100
  );
  scene.add(cube20);
  // groupCubesWc.add(cube20);
  // groupCubesHf.add(cube20);
  // groupCubesDu.add(cube20);

  const cube21 = new Cube();
  cube21.position.set(
    100,
    100,
    -100
  );
  scene.add(cube21);
  // groupCubesWr.add(cube21);
  // groupCubesHf.add(cube21);
  // groupCubesDu.add(cube21);

  const cube22 = new Cube();
  cube22.position.set(
    -100,
    100,
    0
  );
  scene.add(cube22);
  // groupCubesWl.add(cube22);
  // groupCubesHc.add(cube22);
  // groupCubesDu.add(cube22);

  const cube23 = new Cube();
  cube23.position.set(
    0,
    100,
    0
  );
  scene.add(cube23);
  // groupCubesWc.add(cube23);
  // groupCubesHc.add(cube23);
  // groupCubesDu.add(cube23);

  const cube24 = new Cube();
  cube24.position.set(
    100,
    100,
    0
  );
  scene.add(cube24);
  // groupCubesWr.add(cube24);
  // groupCubesHc.add(cube24);
  // groupCubesDu.add(cube24);

  const cube25 = new Cube();
  cube25.position.set(
    -100,
    100,
    100
  );
  scene.add(cube25);
  // groupCubesWl.add(cube25);
  // groupCubesHb.add(cube25);
  // groupCubesDu.add(cube25);

  const cube26 = new Cube();
  cube26.position.set(
    0,
    100,
    100
  );
  scene.add(cube26);
  // groupCubesWc.add(cube26);
  // groupCubesHb.add(cube26);
  // groupCubesDu.add(cube26);

  const cube27 = new Cube();
  cube27.position.set(
    100,
    100,
    100
  );
  scene.add(cube27);
  // groupCubesWr.add(cube27);
  // groupCubesHb.add(cube27);
  // groupCubesDu.add(cube27);





  // scene.add(groupCubesWr);
  // scene.add(groupCubesWc);
  // scene.add(groupCubesWl);





  // scene.add(groupCubesHf);
  // scene.add(groupCubesHc);
  // scene.add(groupCubesHb);



  

  // scene.add(groupCubesDu);
  // scene.add(groupCubesDc);
  // scene.add(groupCubesDd);


  // scene.add(transControls);
  // transControls.setMode('translate')

  function onDocumentMouseDown(event) {
    let vector = new THREE.Vector3(
      (event.clientX / width) * 2 - 1,
      -(event.clientY / height) * 2 + 1,
      0.5
    );
    vector = vector.unproject(camera);


    const raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());
    raycaster.setFromCamera( mouse, camera );


    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

    const intersects = raycaster.intersectObjects([cube1, cube2, cube3, cube4, cube5, cube6, cube7, cube8, cube9, cube10,
    cube11, cube12, cube13, cube14, cube15, cube16, cube17, cube18, cube19, cube20, cube21, cube22, cube23, cube24, cube25, cube26, cube27]);

    if (intersects.length > 0) {

      console.log(intersects[0]);
      intersects[0].object.material.transparent = true;
      intersects[0].object.material.opacity = 0.1;
    }
  }

  render();


  function render(){
    // groupCubesDu.rotation.y += 0.005;
    // groupCubesDc.rotation.y += -0.005;
    // groupCubesDd.rotation.y += 0.005;
    requestAnimationFrame(render);
    renderer.render(scene, camera);

  }
  

}
window.onload = init;

class Cube extends THREE.Mesh {
  constructor () {
    const geometry = new THREE.BoxGeometry(90, 90, 90);

    const cubes = [
    new THREE.MeshBasicMaterial({color: 0xC41E3A}),
    new THREE.MeshBasicMaterial({color: 0xff5800}),
    new THREE.MeshBasicMaterial({color: 0xffd500}),
    new THREE.MeshBasicMaterial({color: 0xffffff}),
    new THREE.MeshBasicMaterial({color: 0x0051ba}),
    new THREE.MeshBasicMaterial({color: 0x009e60}),
    new THREE.MeshBasicMaterial({color: 0xC41E3A}),
    new THREE.MeshBasicMaterial({color: 0xff5800}),
    new THREE.MeshBasicMaterial({color: 0xffd500}),
    new THREE.MeshBasicMaterial({color: 0xffffff}),
    new THREE.MeshBasicMaterial({color: 0x0051ba}),
    new THREE.MeshBasicMaterial({color: 0x009e60})
  ];

    super(geometry, cubes);
  } 
}