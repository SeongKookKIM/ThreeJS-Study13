import { Mesh } from "three";
import { cm1, geo, mat } from "./common";

export class SideLight {
  constructor(info) {
    const container = info.container || cm1.scene;

    this.name = info.name || "";
    this.x = info.x || 0;
    this.y = info.y || 0;
    this.z = info.z || 0;

    this.geometry = geo.sideLight;
    this.matrial = mat.sideLight;

    this.mesh = new Mesh(this.geometry, this.matrial);
    this.mesh.position.set(this.x, this.y, this.z);
    // this.mesh.castShadow = true;
    // this.mesh.receiveShadow = true;
    container.add(this.mesh);
  }
}
