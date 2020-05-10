import {LessonOne, StreamHandler, Teacher} from "../../tutor/level_one/levelOne";


class MySolution implements StreamHandler, LessonOne {
  count: number = 0;

  accept(character: string): void {
    this.count += character.length;
  }

  getCount(): number {
    return this.count;
  }
}


new Teacher().testLessonOne(() => new MySolution());
// new Teacher().testLessonTwo(() => new MySolution());