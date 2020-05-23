### Interface

And interface is a collection of [methods](#method) that must be implemented by any class that "implements" the interface.
It is like a promise to any code that receives your class, that they can call any of those methods on
your class. 

### Method

A *method* is a a chunk of code that can be called on an [object](#class), using the syntax `<obj>.<method>()`, 
where `<obj>` is some value you have of a type (an interface, or class), and `<method>` is the name of the method 
being called.  Some methods can be passed parameters.

### Property
A *property* is like a method, but it's just a value that an object holds.  Sometimes they are private
and cannot be accessed by external classes, but sometimes they are public, such as `string.length` and
can be accessed directly.  You can't pass a parameter though - it's not a method that does anything, it's 
just a value that can be retrieved.

### Class

Classes and Objects are the heart and soul of Object-Oriented programming.  Typescript is an Object-Oriented
programming language.  Your code describes *classes* and the methods one can call on those classes.  For
instance, there is a built-in class called `string`, which holds a list of characters, such as "house".  
Actually, the *class* doesn't hold any characters.  It describes what **objects** of *type* **class** can do.
So, if I create an object of type `string`, ie 
```$xslt
var obj:string = "house";
```

Then this means I have a value, a variable, named "obj", which is of type `string` and holds the value 
"house".  The class `string` defines a property called `length` that I can call on it, and if I call `obj.length` 
here, I will get the answer **5**.

### Variables
Variables are named instances in your code that hold values.  A value can be any simple value (like
a number, or a boolean, which is a value that can either be **true** or **false**, or an object).  Variables
in different places sometimes get called different names - a value passed to a method is often called
a "parameter".  A value declared in the scope of a method is usually called a variable.  A value declared
as belonging to a class, like:

```$xslt
class Example {
   myVariable:string = "house";
   
   getMyVariable() {
      returns this.house;
   }
}

var a = new Example();
console.log("Hey, a.myVariable = " + a.myVariable);
```
this will print "Hey, a.myVariagble = house".  These kinds of variables are sometimes called "fields", or
"instance members", because they are fields or members of a particular object, which is an instance of a 
class.

When using a field of a class within the code of that class, you must prefix your access to it with "this.".  So
`this.myVariable`.  Never just `myVariable`.  This is something of a *typescript* quirk - many other Object-Oriented
languages take the "this." as implicit.

### Declaring vs Defining
These two words can easily be confused, but when we talk about a method being *declared* vs being *defined*, we mean
the difference between an interface, which *declares* methods, but doesn't provide any code for how that
method works, and a class, which *defines* methods, and provides curly braces {} between which you will
find the code that says, "do this, then do that, and finally return this result".  

Why would we ever want to just declare a method??  Ah, well, this is the kind of thing you'll be learning 
in the coming weeks and months.  You could write all your code with no interfaces, everything "concrete" classes 
as we say, but I think eventually you will find you wished you had some interfaces!  It's not a concept I 
can just give you, you will have to see for yourself, the power of the interface.  However, you will note that
even Lesson One of the CodeLearner project defines some interfaces that make it easier for you to jump right
in.

### Comments in Code
In your files that hold code, you can write comments that the computer (the compiler, the interpreter)
will ignore.  These comments are for people to read to help understand the code.  For Typescript,
the two slashes, like ```//``` indicates the rest of that line is a comment.  For a larger, multiline
comment, we use ```/* Here is a big comment, many many lines */```.  The comment begins and ends with 
the combo  of / and *.

Sometimes we "comment out" lines of code so that they will not be run, but if we ever do want them
to run, all we have to do is removed the ```//``` at the start of the line.

### Conditionals
A conditional is some code that evaluates to a boolean value.  A boolean value is a value
that is either true or false.  A simple conditional expression is:

```3 > 0```

which evaluates to true.  Another:

```a == b```

which evaluates to true if a is equal to b, and false otherwise.  