import { Mesh } from "three";
import { Stuff } from "./Stuff";
import { cm1, geo, mat, sounds } from "./common";

export class Glass extends Stuff {
  constructor(info) {
    super(info);

    this.type = info.type;
    this.step = info.step;

    this.geometry = geo.glass;
    switch (this.type) {
      case "normal":
        this.matrial = mat.glass1;
        this.mass = 1;

        break;
      case "strong":
        this.matrial = mat.glass2;
        this.mass = 0;
        break;
    }

    this.width = this.geometry.parameters.width;
    this.height = this.geometry.parameters.height;
    this.depth = this.geometry.parameters.depth;

    this.mesh = new Mesh(this.geometry, this.matrial);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.name = this.name;
    this.mesh.step = this.step;
    this.mesh.type = this.type;
    cm1.scene.add(this.mesh);

    this.setCannonBody();

    this.cannonBody.addEventListener("collide", playSound);

    const sound = sounds[this.type]; // sounds.normal === sounds['normal']
    function playSound(e) {
      const strength = e.contact.getImpactVelocityAlongNormal();
      if (strength > 5) {
        sound.currentTime = 0;
        sound.play();
        // console.log(strength);
      }
    }
  }
}
