const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
const start = async () => {
	const video = document.createElement("video");
	video.setAttribute("src, "./St. Joseph's University Bangalore.mp4"");
	vide.set Attribute("loop", "");

	video.oncanplay = () => {
		video.play();
	}
	const mindarThree = new window.MINDAR.IMAGE.MindARThree({
	container: document.body,
	imageTargetSRC: './targets.mind'
});

const {renderer, scene, camera} = mindThree;

const geometry = new THREE.PLaneGeometry(1, 1);
const videoTexture = new THREE.VideoTexture(video);
const material = new THREE.MeshBasicMaterial({map: videoTexture, side: THREE.FrontSide, toneMapped: false});
const plane = new THREE.Mesh(geometry,material);

const anchor = mindarThree.addAnchor(0):
anchor.group.add(plane);

await mindarthree.start();


renderer.setAnimationLoop(() => {
	renderer.render(scene, camera);
});

}

start();

});