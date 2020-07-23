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
    if (!await this.sim.hasReadPermission()) {
      try {
        await this.sim.requestReadPermission();
      } catch (e) {
        return;
      }
    }

    try {
      console.log(await this.sim.getSimInfo());
      this.phoneNo = (await this.sim.getSimInfo() as any).phoneNumber;
    } catch (e) {
      console.log(e);
    }

  }
}
