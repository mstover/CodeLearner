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
    getCountWithinQuotes(): number;
}

export interface LessonThree {
    getWholeString(): string;
}

export interface LessonFour {
    getQuotedString(): string;
}

export class Teacher {

    /**
     * Send your provider here to be tested on Lesson One
     * @param student This is a function that returns your class to be tested.  Your class will be tested
     * multiple times so each time we start with a fresh instance.
     */
    testLessonOne(student: () => StreamHandler & LessonOne): TestResult {
        console.log("\nTesting Lesson One");
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
                var result = this._testLessonOne(student.apply(this), value);
                if (!result.success) finalResult = result;
            }
        });
        if (finalResult.success) console.log("Success!")
        else console.log("Incorrect: " + finalResult.response);
        return finalResult;
    }

    testLessonTwo(student: () => StreamHandler & LessonOne & LessonTwo) {
        console.log("\nTesting Lesson Two");
        let testResult = new TestResult(true, "");
        [
            ["a", '"', "b", "c", "d", "e", '"', "f", "g"],
            ["Captain", " ", '"', "Jim", "-", "bob", '"'],
            ["sda", '"', "j239", '"', "8345", '"', "43w5#", '"', "$@^%$", '"', "DFgdx", '"', "af"],
            [""],
            [" "],
            ['"', "", "", '"'],
            this.generateRandomLessonTwo("Random Strings: ")
        ].forEach((value, index, arr) => {
            console.log("Testing '" + value.join("', '") + "'");
            if (testResult.success) {
                var result = this._testLessonTwo(student.apply(this), value);
                if (!result.success) testResult = result;
            }
        });
        if (testResult.success) console.log("Success!")
        else console.log("Incorrect: " + testResult.response);
        return testResult;
    }

    public testLessonThree(student: () => StreamHandler & LessonOne & LessonTwo & LessonThree) {
        console.log("\nTesting Lesson Three");
        let testResult = new TestResult(true, "");
        [
            ["H", "e", "l", "lo", " ", "W", "o", "r", "l", "d"],
            ["This", " ", "is", " ", "Lesson", " ", "Three"],
            this.generateRandomLessonTwo("Randome Strings: ")
        ].forEach((value, index, arr) => {
            console.log("Testing '" + value.join("', '") + "'");
            if (testResult.success) {
                var result = this._testLessonThree(student.apply(this), value);
                if (!result.success) testResult = result;
            }
        });
        if (testResult.success) console.log("Success!")
        else console.log("Incorrect: " + testResult.response);
        return testResult;
    }

    public testLessonFour(student: () => StreamHandler & LessonFour) {
        console.log("\nTesting Lesson Four");
        let testResult = new TestResult(true, "");
        [
            ["H", "e", "l", "lo", "=", '"', "W", "o", "r", "l", "d", '"'],
            ["This", '"', "is", '"', "Lesson", " ", '"', "Three", '"'],
            this.generateRandomLessonTwo("Randome Strings: ")
        ].forEach((value, index, arr) => {
            console.log("Testing '" + value.join("', '") + "'");
            if (testResult.success) {
                var result = this._testLessonFour(student.apply(this), value);
                if (!result.success) testResult = result;
            }
        });
        if (testResult.success) console.log("Success!")
        else console.log("Incorrect: " + testResult.response);
        return testResult;
    }

    private generateRandomLessonTwo(starterValue: string) {
        let numStrings = Math.floor(Math.random() * 20) + 3;
        var arr: string[] = [starterValue];
        var qCount = 0;
        for (let i = 1; i < numStrings + 1; i++) {
            if (Math.random() > 0.8) {
                arr[i] = '"';
                qCount++;
            } else {
                let numCharacters = Math.floor(Math.random() * 10);
                var charArr: string = "";
                for (let j = 0; j < numCharacters; j++) {
                    charArr += this.randomCharacter();
                }
                arr[i] = charArr;
            }
        }
        if (qCount % 2 == 1) arr[arr.length] = '"';
        return arr;
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

    private _testLessonOne(student: StreamHandler & LessonOne, testStrings: string[]): TestResult {
        this.sendTestStrings(testStrings, student);
        let studentRes = student.getCount();
        let totalLength = testStrings.map(value => value.length)
            .reduce((tot: number, value: number, i: number, arr: number[]) => tot + value);
        if (studentRes == totalLength) return new TestResult(true, "");
        else return new TestResult(false, "Incorrect count for input string: '" + testStrings +
            "' expected " + totalLength + " but was " + studentRes);
    }

    private _testLessonTwo(student: StreamHandler & LessonOne & LessonTwo, testStrings: string[]) {
        this.sendTestStrings(testStrings, student);
        let studentRes = student.getCountWithinQuotes();
        var inQuote = false;
        let inQuoteArr = testStrings
            .filter(s => {
                if (s == '"') {
                    inQuote = !inQuote;
                    return false;
                } else return inQuote;
            })
            .map(value => value.length);
        let totalLength = inQuoteArr.length > 0 ? inQuoteArr
                .reduce((tot: number, value: number, i: number, arr: number[]) => tot + value)
            : 0;
        if (studentRes == totalLength) return new TestResult(true, "");
        else return new TestResult(false, "Incorrect count for input string: '" + testStrings +
            "' expected " + totalLength + " but was " + studentRes);
    }

    private sendTestStrings(testStrings: string[], student: StreamHandler) {
        for (let i = 0; i < testStrings.length; i++) {
            var testString = testStrings[i];
            student.accept(testString);
        }
    }

    private _testLessonThree(student: StreamHandler & LessonThree, testStrings: string[]) {
        this.sendTestStrings(testStrings, student);
        let studentResponse = student.getWholeString();
        let correctAnswer = testStrings.join("");
        if (studentResponse == correctAnswer) return new TestResult(true, "");
        else return new TestResult(false, "Incorrect whole string for input string: '" + testStrings +
            "' expected " + correctAnswer + " but was " + studentResponse);
    }

    private _testLessonFour(student: StreamHandler & LessonFour, testStrings: string[]) {
        this.sendTestStrings(testStrings, student);
        let studentRes = student.getQuotedString();
        var inQuote = false;
        let inQuoteArr = testStrings
            .filter(s => {
                if (s == '"') {
                    inQuote = !inQuote;
                    return false;
                } else return inQuote;
            });
        let quotedString = inQuoteArr.length > 0
            ? inQuoteArr.join("")
            : 0;
        if (studentRes == quotedString) return new TestResult(true, "");
        else return new TestResult(false, "Incorrect count for input string: '" + testStrings +
            "' expected '" + quotedString + "' but was '" + studentRes+"'");
    }
}
