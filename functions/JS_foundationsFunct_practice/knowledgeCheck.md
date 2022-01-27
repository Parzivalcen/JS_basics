# What are functions Useful for? 

Function are useable for reducing your code size, and for it not be scattered all around.

# How do You Invoke a Function?

A function is invoked like this `funtion {name} (parameters) { --body-- }`

# What are anonymous Functions?

Is for example when we call a function inside an `addEventListener` like 

```

  textBlock.addEventListener('keydown', function(e) {
   console.log(e.key);
  })

```

The function here has no name.

# What is function Scope

There are two types of **functions**, **expressions**;

``` 
let hi = function {
 alert('Greetings')
}
```

and **declarations**:

```
function hi(){
 alert('Greetings')
}
```
**The Scope** look at these differently the *Declaration* is Global, meaning that in can be seen from anywhere in the code, the *expressions* can only be seen once the code/compiler reached that point

# What are return values?

Return values are values returned by a function when its completed 

# What are arrow functions?

They are a shorter way of writing functions example 
 
 ```
let hi = function {
 alert('Greetings')
}

let hi () => alert('Greeting');
 ```

It works best with anonymous function IMO:
```
function ask(question, yes no){
 if(confirm(question)) yes();
 else no();

 ask(
  'do you want it',
  () => alert('great'),
  () => alert('you canceled it')
 );
}
```