import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  disk() {
    console.log(`under the disk service 20 power was supplied`);
    this.powerService.supplyPower(20);
    return 'a + b';
  }
}
