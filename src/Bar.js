import { Mesh } from "three";
import { Stuff } from "./Stuff";
import { cm1, geo, mat } from "./common";

export class Bar extends Stuff {
  constructor(info) {
    super(info);

    this.geometry = geo.bar;
    this.matrial = mat.bar;

    this.width = this.geometry.parameters.width;
    this.heigh = this.geometry.parameters.height;
    this.depth = this.geometry.parameters.depth;

    this.mesh = new Mesh(this.geometry, this.matrial);
    this.mesh.position.set(this.x, this.y, this.z);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    cm1.scene.add(this.mesh);

    this.setCannonBody();
  }
}
