class Scene{
    constructor(_ambientColo, _diffuseColor){
        /* create the scene */
        this.scene = new THREE.Scene();

        /* Add some lights */ 
        this.ambientLight = new THREE.AmbientLight(0xd2f6f7, 0.35);
        this.directionalLight = new THREE.DirectionalLight( 0xffffff, 1, 100 );
        this.directionalLight.position.set( 0, 1, -1 ); 
        this.directionalLight.castShadow = true;		
        

        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.scene.add(this.cube);

        this.geometry = new THREE.PlaneGeometry( 5, 20, 32 );
        this.material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
        this.plane = new THREE.Mesh( this.geometry, this.material );
        this.scene.add( this.plane );

        this.scene.add(this.ambientLight);
        this.scene.add(this.directionalLight);
    }

    getScene(){
        return this.scene;
    }
}