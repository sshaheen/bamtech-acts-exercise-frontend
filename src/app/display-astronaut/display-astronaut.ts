import { Component, Input } from '@angular/core';
import { Astronaut } from '../models/astronaut';
import { required } from '@angular/forms/signals';
import { DisplayAstronautDuty } from '../display-astronaut-duty/display-astronaut-duty';

@Component({
  selector: 'app-display-astronaut',
  imports: [],
  templateUrl: './display-astronaut.html',
  styleUrl: './display-astronaut.css',
})
export class DisplayAstronaut {
  @Input({ required: true }) astronaut!: Astronaut;
}
