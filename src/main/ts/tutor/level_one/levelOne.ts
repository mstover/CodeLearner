import {TestResult} from "../DesignTutor";

/**
 * Implement the StreamHandler for all lessons
 */
export interface StreamHandler {
  /**
   * The teacher will send any number of characters to this metho of the StreamHandler.  It will
   * be called any number of times.
   * @param character
   */
  accept(character: string): void;
}

/**
 * After any number of calls to the StreamHandler.accept method, the teacher will then ask for a
 * count of how many characters were sent to the StreamHandler.accept method.
 */
export interface LessonOne {
  /**
   * Return count of how many characters in total have streamed
   */
  getCount(): number;
}

export interface LessonTwo {
  getCountFor(character: string): number;
}

export class Teacher {

  /**
   * Send your provider here to be tested on Lesson One
   * @param student This is a function that returns your class to be tested.  Your class will be tested
   * multiple times so each time we start with a fresh instance.
   */
  testLessonOne(student: () => StreamHandler & LessonOne): TestResult {
    var finalResult: TestResult = new TestResult(true, "");
    [
      ["a", "b", "c", "d", "e", "f", "g"],
      ["Captain", " ", "Jim", "-", "bob"],
      ["sdaj239834543w5#$@^%$DFgdxaf"],
      [""],
      [" "],
      this.generateRandomLessonOne("Random Strings: ")].forEach((value, index, arr) => {
      console.log("Testing '" + value.join("', '") + "'");
      if (finalResult.success) {
        var result = this.test(student.apply(this), value);
        if (!result.success) finalResult = result;
      }
    });
    if (finalResult.success) console.log("Success!")
    else console.log("Incorrect: " + finalResult.response);
    return finalResult;
  }

  testLessonTwo(student: () => StreamHandler & LessonTwo) {

  }

  private generateRandomLessonOne(starterValue: string) {
    let numStrings = Math.floor(Math.random() * 10) + 1;
    var arr: string[] = [starterValue];
    for (let i = 1; i < numStrings + 1; i++) {
      let numCharacters = Math.floor(Math.random() * 10);
      var charArr: string = "";
      for (let j = 0; j < numCharacters; j++) {
        charArr += this.randomCharacter();
      }
      arr[i] = charArr;
    }
    return arr;
  }

  private randomCharacter(): string {
    let c = "A".charCodeAt(0) + Math.floor(Math.random() * 60);
    let out = String.fromCharCode(c);

    return out;
  }

  private test(student: StreamHandler & LessonOne, testStrings: string[]): TestResult {
    for (let i = 0; i < testStrings.length; i++) {
      var testString = testStrings[i];
      student.accept(testString);
    }
    let studentRes = student.getCount();
    let totalLength = testStrings.map(value => value.length)
    .reduce((tot: number, value: number, i: number, arr: number[]) => tot + value);
    if (studentRes == totalLength) return new TestResult(true, "");
    else return new TestResult(false, "Incorrect count for input string: '" + testStrings +
        "' expected " + totalLength + " but was " + studentRes);
  }
}
