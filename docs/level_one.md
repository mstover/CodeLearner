# Level One

## Lesson One

Before you can work on lesson one, you will need to open your command line application (Command Prompt in Windows, Terminal on a Mac), and "cd" to the codelearner directory
you created in the introduction.  For me, this looks like:
  ```
 cd Development  
 cd codelearner
  ```
Then make sure you are up-to-date with the current codelearner project:
```git pull```

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

#### What is the assignment for Lesson One?
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

That's all!  Good Luck!
 
 ## Lesson Two
 For Lesson Two, again you will need to open your commmand prompt, change directory to the codelearner
 project, and get updated with ```git pull```.  
 
 You will continue working in the file **src/main/ts/student/start.ts**.  There is a commented out
 line at the bottom [what does commented out mean?](terms.md#comments-in-code):
 
 ```// new Teacher().testLessonTwo(() => new MySolution());```

By removing the slashes, we will "activate" this line of code, which will test your solution for
lesson two.  Go ahead and uncomment it, and run the tests (```gradle npm_run```).  See how it 
does not pass to begin.  Keep the test for lesson one - your solution to lesson two needs to continue
to pass lesson 1!

#### What is the assignment for Lesson Two?

For Lesson Two, we need to update the ```MySolution``` class to implement the "LessonTwo" interface. 
Remember [What is and Interface](terms.md#interface).  Go ahead and append ```, LessonTwo``` to 
the end of the line ```class MySolution implements StreamHandler, LessonOne```.

Run ```gradle npm_run```.

Why run it now?  We both know it won't pass, but by frequently getting feedback on everything
you do in the code, you will get a sense of what each and every change means and what impact it has.  
For instance, after making the change above and then running, you will see that there is now
a different failure - a more serious one than just not passing the test.  The code doesn't [compile](terms.md#compile)!

Now we see:

```
src/main/ts/student/start.ts(4,54): error TS2304: Cannot find name 'LessonTwo'.
   
   FAILURE: Build failed with an exception.
   
   * What went wrong:
   Execution failed for task ':compileTypeScript'.
   ...<more-info below>...
```

The compiler is telling us it can't find "LessonTwo", which we added as an interface that
our class is going to implement.  If we go back to the very first line in our code:

```import {LessonOne, StreamHandler, Teacher} from "../tutor/level_one/levelOne";```

You may notice this list - *LessonOne*, *StreamHandler*, *Teacher*, is everything our file 
was using previously.  Now, we have added a new element - *LessonTwo* - and likewise, we 
need to ["import"](terms.md#import) it.  So let's update it like so:

```import {LessonOne, LessonTwo, StreamHandler, Teacher} from "../tutor/level_one/levelOne```

To know where to go to get these tools, programmers read documentation and/or they read code.  
Or they learn by example or from their friends where to find the classes they want to use in
their own code.  For now, you have learned by reading this documentation!

You will then need to update your MySolution class with a new method called "getCountWithinQuotes".
The requirements are:
1. Same as Lesson One - your method ```getCount()``` must still return a total count of
characters sent in strings.
2. The ```accept(input:string)``` method may be called with an input that contains a 
single quote character ```"```. It will then receive more strings, and will later be
called with another single quote character.  Your solution must keep track of how many
total characters come between two quotes.
1. Return the total between quotes when ```getCountWithinQuotes``` is called.

To accomplish this, you will need more [class fields](terms.md#variables), and you will
need to learn how to use [conditionals](terms.md#conditionals).  Conditionals can be used
in "if" statements that can cause one block of code to be executed if the conditional is
true, and another block of code if the conditional is false:

```
if(a == '"') {
    // do one thing
} else {
    // do something else
}
```

The above asks if the variable "a" is equal to a string that contains just a single 
quote character.  You can see how that might be useful for this assignment!





