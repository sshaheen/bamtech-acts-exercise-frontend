import { Component, Input } from '@angular/core';
import { AstronautDuty } from '../models/astronaut-duty';

@Component({
  selector: 'app-display-astronaut-duty',
  imports: [],
  templateUrl: './display-astronaut-duty.html',
  styleUrl: './display-astronaut-duty.css',
})
export class DisplayAstronautDuty {
  @Input({ required: true }) astronautDuty!: AstronautDuty;
}
