class Camera {
    
    constructor( _fov, _aspect, _near, _far, _position){

        this.camera = new THREE.PerspectiveCamera(_fov, _aspect, _near, _far);
         
        this.camera.position.x = _position[0];
        this.camera.position.y = _position[1];
        this.camera.position.z = _position[2];

        this.rotationMagnitude = 0.25;
        this.translationMagnitude = 0.25;
    }

    getCamera(){
        return this.camera;
    }

    moveCamera(_direction){
        switch (_direction) {
            case "Forward":

                this.camera.translateZ(-this.translationMagnitude);

                break;
            case "Backward":

                this.camera.translateZ(this.translationMagnitude);

                break;
            case "Left":
                
                this.camera.translateX(-this.translationMagnitude);

                break;
            case "Right":
                
                this.camera.translateX(this.translationMagnitude);
            
            break;
            default:
                break;
        }
    }
    rotateCamera(_direction)
    {
        switch (_direction) {
            case "Up":
                
                this.camera.rotation.x += this.rotationMagnitude;

                break;
            case "Down":

                this.camera.rotation.x -= this.rotationMagnitude;

                break;
            case "Left":

                this.camera.rotation.y += this.rotationMagnitude;

                break;
            case "Right":

                this.camera.rotation.y -= this.rotationMagnitude;

                break;
            default:
                break;
        }
    }
}