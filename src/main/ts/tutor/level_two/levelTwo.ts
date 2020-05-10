export interface StreamTarget {
  accept(character: string,target:string): void;
}

export interface LessonOne {
  getCount(): number;
}

export class TeacherForLessonOne {
  run(student: StreamTarget & LessonOne): boolean {

    var success = this.test(student, "abcdefg");
    return success;
  }

  test(student: StreamTarget & LessonOne, testString: string): boolean {
    for (let i = 0; i < testString.length; i++) {
      student.accept(testString.charAt(i),"captain");
    }
    return student.getCount() == testString.length;
  }
}
