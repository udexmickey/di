import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get('/cpu')
  getCpu(a: 2, b: 4) {
    return this.cpuService.compute(a, b);
  }

  @Get('/disk')
  getDisk() {
    return this.diskService.disk();
  }
}
