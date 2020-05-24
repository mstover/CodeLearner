# CodeLearner
Begin Learning to Code with Typescript

## Introduction

CodeLearner is a Typescript framework for learning how to program.  The intention isn't to learn 
*Typescript* specifically, but rather to learn how to learn to program in general.  **CodeLearner** 
assumes zero
knowledge of programming, though a knowledge of some computer basics will greatly help, such as:

- Knowing how to use a browser (you wouldn't be here at this page if you didn't use a **browser**, most likely)
- Knowing how to install programs (ie, such as Git and java)
- Knowing in general how to edit text files
- Understanding the most basic concepts of what a *terminal*, or *command line* is and how to use one ./..

## Prior to Lesson One

Before you can begin lesson one, you must set up some things on your computer.  We call this setting
up your *environment*, in computing lingo.  Here are the steps you need to accomplish before you can
begin your first lesson:

1. Install **Git** ([Git Home Page](https://git-scm.com/)).  You should be able to go to the
Downloads page and install the appropriate version for you OS (Mac, Windows, Linux, they are all covered).
   1. If you read the instructions provided on Git's website, you should be able to get Git correctly 
   installed.  If you're unsure, you may need to seek help from a friend, parent, or teacher.
   1. Once installed, Git is a *command line* application, meaning you need to open a command line to use it.
   1. If you are on Windows, open a "Command Prompt" and type "git".  If it is successfully installed, you should
   see git's help output.
1. Install **Java**.  This may already be done on many computers.  Try opening your command line and type 
"java -version".  Hopefully you will see output that looks like:
    ```
    java version "1.8.0_121"
    Java(TM) SE Runtime Environment (build 1.8.0_121-b13)
    Java HotSpot(TM) 64-Bit Server VM (build 25.121-b13, mixed mode)
    ```
    If instead you get a message that no java could be found, or you have an older version, then you 
    will need to install java from [JDK Downloads](https://www.oracle.com/java/technologies/javase-downloads.html)
1. Install **Gradle** ([Gradle Home Page](https://gradle.org)).  Gradle is like Git in that it's a 
command line application.  Once installed correctly (which just means unzipping it to where you want 
it to be), you should be able to run gradle commands. 
1. Once you have these three applications installed (git, java, gradle), you need them to be on your 
executable *PATH* for it all to work correctly.  
   1. Add the gradle/bin directory to your executable path ([?](#how-to-configure-your-executable-path)).  
   1. Add the jdk/bin directory to your executable path.  Add git to your executable path (usually 
git's installer does that for you).
   1. You may need to add an environment variable for JAVA_HOME (set to the main jdk directory, not the bin directory)
1. Clone this project.  
    1. Open your command line and "cd" to a directory where you want to recreate the CodeLearner project.
    1. once there, type "git clone https://github.com/mstover/CodeLearner.git codelearner".  That will download the project
    into a new directory called "codelearner".  If you wish to name the directory something else, change that
    part of the command.
    1. cd to the new "codelearner" directory
    1. run "gradle npm_run".  This should download and install npm and Node.js for you and should run the first lesson with the following output:
       ```
       Testing 'a', 'b', 'c', 'd', 'e', 'f', 'g'
       Testing 'Captain', ' ', 'Jim', '-', 'bob'
       Testing 'sdaj239834543w5#$@^%$DFgdxaf'
       Testing ''
       Testing ' '
       Testing 'Random Strings: ', '`', 'YF'
       Incorrect: Incorrect count for input string: 'a,b,c,d,e,f,g' expected 7 but was 0
       ```
## Structure of CodeLearner
 You are now ready to start [Level One](docs/level_one.md)
 
 CodeLearner  is a progressive plan that takes you from the very simplist exercise through to some very 
complex programming tasks.  You will get there step by step, and you will build on your own code the 
whole time.  

There are multiple goals. One is to simply learn how to write programming code.  But in addition, there is a focus
on teaching you how to write *good* code, that is easily maintained, extended, flexible, understandable, etc.  Because
you will need to reuse your own code.  Each lesson builds on previous lessons, with the idea that what you
built for a previous lesson is likely to be at least somewhat relevant to future lessons.  If you write
code well, you will find you're able to reuse your code easily and quickly.  If you write badly designed
code (and you will!), you will find yourself facing the headache of upgrading previous code to handle some new
challenge, while still needing to handle previous challenges.

That is what programming is really about.  How your design choices affect how powerful your code is in the face
 of changing circumstance, and changing requirements.  Something every programmer quickly becomes familiar with.
 
 What CodeLearner is not, is a Computer Science course.  The focus is on practical matters of coding, and code
 design, as opposed to learning about low-level algorithms and mathematical constructs.  Naturally we will go over
 sorting, hashing, data structures, but I we won't be expecting you to write a sort algorithm or a HashMap.  Rather, 
 we'll teach you how to use them.
 
 Each Level in CodeLearner has many Lessons.  As you finish all the lessons
 
 So, [get started](docs/level_one.md)!

## Some References
Full lesson list:
1. [Lesson One](docs/level_one.md#lesson-one)
1. [Lesson Two](docs/level_one.md#lesson-two)
1. [Lesson Three](docs/level_one.md#lesson-three)
1. [Lesson Four](docs/level_one.md#lesson-four)

### How to configure your executable path

1. If you are on [Windows, read this](https://www.architectryan.com/2018/03/17/add-to-the-path-on-windows-10/)
1. If you are on a Mac, edit your $HOME_DIRECTORY/.bash_profile file and add a line that says 
   ```
   export PATH=$PATH:<directory-containing-executable>
   ``` 
   and replace the <directory-containing-executable> 
   with the right value.
