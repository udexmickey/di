import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
  async supplyPower(watts: number) {
    console.log(`supplying ${watts} worth of power`);
  }
}
