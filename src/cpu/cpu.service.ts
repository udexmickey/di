import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  async compute(a: number, b: number) {
    console.log(`Drawing 10 watts of power from Power service`);
    const pService = await this.powerService.supplyPower(10);
    return a + b;
  }
}
