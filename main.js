

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000);

	var renderer = new THREE.WebGLRenderer(
		{
			antialias: true
		}
	);
//var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.TetrahedronGeometry(1);
var material = new THREE.MeshBasicMaterial({
	color: 0xcccccc,
	//wireframe: true,
	//transparent: true
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

var light = new THREE.AmbientLight( 0x004040 ); // soft white light scene.add( light );
scene.add(light);

camera.position.z = 5;

function render(){
	requestAnimationFrame(render);
	renderer.render(scene, camera);

	//cube.rotation.x += 0.01;
	//cube.rotation.y += 0.01;
}

render();



