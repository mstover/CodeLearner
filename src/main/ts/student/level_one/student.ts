import {LessonOne, StreamHandler, Teacher} from "../../tutor/level_one/levelOne";


class MySolution implements StreamHandler, LessonOne {

  accept(character: string): void {
  }

  getCount(): number {
    return 0;
  }
}


new Teacher().testLessonOne(() => new MySolution());
// new Teacher().testLessonTwo(() => new MySolution());