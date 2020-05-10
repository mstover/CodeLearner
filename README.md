# CodeLearner
Begin Learning to Code with Typescript

## Introduction

CodeLearner is a Typescript framework for learning how to program.  The intention isn't to learn 
*Typescript* specifically, but rather to learn how to learn to program in general.  **CodeLearner** assume zero
knowledge of programming, though a knowledge of some computer basics will greatly help, such as:

- Knowing how to use a browser (you wouldn't be here at this page if you didn't use a **browser**, most likely)
- Knowing how to install programs (ie, such as Git and npm)
- Knowing in general how to edit text files
- Understanding the most basic concepts of what a *terminal*, or *command line* is

## Prior to Lesson One

Before you can begin lesson one, you must set up some things on your computer.  We call this setting
up your *environment*, in computing lingo.  Here are the steps you need to accomplish before you can
begin your first lesson:

1. Install **Git** ([Git Home Page](https://https://git-scm.com/)).  You should be able to go to the
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
command line application.  Once installed correctly, you should be able to run gradle commands. 
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
1. Now you are ready for [Lesson One](docs/lesson_one.md)
