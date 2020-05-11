# Level One

## Lesson One

The very first task is very simple, but being the first, you need to get used to the project structure 
and how things work.  

Firstly, you'll be doing your work in the file: **src/main/ts/student/start.ts**

You can use notepad, wordpad, or textedit (on MacOS) or any other text editing application you like.  
Eventually, you will want to use and IDE, so that you can get help with writing your code.  For the first
task, it is not necessary.  We can dive right in and solve this problem.

First, by running `gradle npm_run`, you are actually running the tests that you will need to pass.  You'll
notice, the test results end with `Incorrect: Incorrect count for input string: 'a,b,c,d,e,f,g' expected 7 but was 0`.
That is because you haven't written the code that passes this test. 

To write the code to pass Lesson One, you should open the above start.ts file in a text editor.  There
are three parts to this file.  Here's the whole thing:

```
import {LessonOne, StreamHandler, Teacher} from "../tutor/level_one/levelOne";
   
   
class MySolution implements StreamHandler, LessonOne {
   
    accept(input: string): void {
    }
   
    getCount(): number {
        return 0;
    }
}
   
new Teacher().testLessonOne(() => new MySolution());
// new Teacher().testLessonTwo(() => new MySolution());
```

The first part (which you **do not need to understand now**)
```
import {LessonOne, StreamHandler, Teacher} from "../tutor/level_one/levelOne";
``` 
imports the code you need from the main
part of the projects.  In particular, you need the interfaces `StreamHandler` and `LessonOne` ([What is an interface](terms.md#interface)), and you need
the class `Teacher` ([What is a Class](terms.md#class)).  

The next part:

```
class MySolution implements StreamHandler, LessonOne {
   
    accept(character: string): void {
    }
   
    getCount(): number {
        return 0;
    }
}
```

This is the class that you need to finish implementing to pass Lesson One.  More on this later.

The last part:
```
new Teacher().testLessonOne(() => new MySolution());
```

This line of code first creates a new [object](terms.md#class) of type `Teacher`, and then calls the method 
that is available on the `Teacher` class, called "testLessonOne", and passes in a tiny little method
that creates an object of type `MySolution`, which is the class you are going to finish writing.  In 
other words, we're handing in the assignment, and the teacher is going to figure out if you did it right.

##### What is the assignment for Lesson One?
For Lesson One, you have a class that implements two [interfaces](terms.md#interface).  They are `StreamHandler`, 
which declares the method "accept(string)", and `LessonOne`, which declares the method "getCount()".  
[Declaring vs Defining](terms.md#declaring-vs-defining).  So, the question is, when will Teacher call those methods and what 
does Teacher expect you to do to get the right answer?

Here are the "requirements":
1. Teacher will call your "accept(string)" method one or more times, giving you some string object each time.  `string` objects have
a [property](terms.md#property) available called `length`, which will return the length of the string (ie, how many characters in the string).  
1. After Teacher calls your accept(string) method a bunch, Teacher will then call your `getCount()` method.  Teacher wants
to know the total number of characters that have been passed to your accept(string) method.

Currently, the getCount() method returns the number 0.  This is not correct.  In your accept method, you will need to call `input.length`
and do something with the value (hint: it probably involves [variables](terms.md#variables)).

After you have written your code, run `gradle npm_run` to run and see if you pass.

That's all!  Good Luck!  Once you finish, 
