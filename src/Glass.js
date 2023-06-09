import { Mesh } from "three";
import { Stuff } from "./Stuff";
import { cm1, geo, mat } from "./common";

export class Glass extends Stuff {
  constructor(info) {
    super(info);

    this.type = info.type;
    this.geometry = geo.glass;
    switch (this.type) {
      case "normal":
        this.matrial = mat.glass1;
        break;
      case "strong":
        this.matrial = mat.glass2;
        break;
    }

    this.mesh = new Mesh(this.geometry, this.matrial);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.mesh.name = this.name;
    cm1.scene.add(this.mesh);
  }
}
