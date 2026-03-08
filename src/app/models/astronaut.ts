import { Person } from './person';
import { AstronautDuty } from './astronaut-duty';

export interface Astronaut extends Person {
  currentRank: string;
  currentDutyTitle: string;
  careerStartDate: string;
  careerEndDate: string;
}
