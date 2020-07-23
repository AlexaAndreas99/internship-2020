import { Component, OnInit } from '@angular/core';
import { Sim } from '@ionic-native/sim/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  phoneNo: string;

  constructor(private sim: Sim) { }

  async ngOnInit() {
    if (!await this.hasReadPermission()) {
      try {
        await this.requestPermission();
      } catch (e) {
        return;
      }
    }

    try {
      this.phoneNo = (await this.getSimInfo() as any).phoneNumber;
    } catch (e) {
      console.log(e);
    }

  }

  getSimInfo = () => new Promise((res, rej) => this.sim.getSimInfo().then(res, rej));

  hasReadPermission = () => new Promise((res, rej) => this.sim.hasReadPermission().then(res, rej));

  requestPermission = () => new Promise((res, rej) => this.sim.requestReadPermission().then(res, rej));

}
