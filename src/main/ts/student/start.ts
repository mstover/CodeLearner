import {LessonOne, StreamHandler, Teacher} from "../tutor/level_one/levelOne";


class MySolution implements StreamHandler, LessonOne {

  accept(input: string): void {input.length
  }

  getCount(): number {
    return 0;
  }
}


new Teacher().testLessonOne(() => new MySolution());
// new Teacher().testLessonTwo(() => new MySolution());