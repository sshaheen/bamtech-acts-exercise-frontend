import { Person } from './person';

export interface Astronaut extends Person {
  currentRank: string;
  currentDutyTitle: string;
  careerStartDate: string;
  careerEndDate: string;
}
