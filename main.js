
var IS_ROTATING = true;

var config = {
	isRotating: true,
};


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 3000);

	var renderer = new THREE.WebGLRenderer(
		{
			antialias: true
		}
	);
//var renderer = new THREE.CanvasRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var size = 200;
var geometry = new THREE.TetrahedronGeometry(size);
geometry.verticesNeedUpdate = true;
geometry.colorsNeedUpdate = true;

var faceIndices = ['a', 'b', 'c', 'd'];
var color, f, n, vertexIndex;

for (var i = 0; i < geometry.faces.length; i++) {
	
	f = geometry.faces[i];

	n = (f instanceof THREE.Face3) ? 3 : 4;

	color = new THREE.Color(0xffffff);
	var gray = 1 * (i / n);
	gray = 255;
	color.setRGB(gray, gray, gray);
	f.color = color;

	//for (var j = 0; j < n; j++) {
			
		//vertexIndex = f[ faceIndices[j] ];
		//p = geometry.vertices[vertexIndex];

		//color = new THREE.Color(0xffffff);
		//color.setHSL( ( p.y / size + 1 ) / 2, 1.0, 0.5 );

		//f.vertexColors[j] = color;
	//}

}

var materials = [
	new THREE.MeshLambertMaterial({
		color: 0xffffff,
		shading: THREE.FlatShading,
		vertexColors: THREE.VertexColors
	}),

	new THREE.MeshBasicMaterial({
		color: 0xcccccc,
		shading: THREE.FlatShading,
		wireframe: true,
		transparent: true
	}),
];


var group = THREE.SceneUtils.createMultiMaterialObject(geometry, materials);
scene.add(group);

var light = new THREE.AmbientLight( 0xffffff ); // soft white light scene.add( light );
scene.add(light);

camera.position.z = 1000;


function render(){
	requestAnimationFrame(render);
	renderer.render(scene, camera);


	if (config.isRotating) {
		group.rotation.x += 0.01;
		group.rotation.y += 0.01;
	}

	//console.log(group);


}

render();


$('.control-button').on('click', function(e){
	
	var targetButton = $(this);
	
	targetButton.toggleClass('on');

	config[targetButton.attr('control-attr')] = config[targetButton.attr('control-attr')] ? false : true;

});


