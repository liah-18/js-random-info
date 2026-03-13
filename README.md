# Display Random Information with JavaScript

## Overview

This project demonstrates how JavaScript can respond to user interaction and update the content of a webpage.

When the user clicks a button, JavaScript randomly selects one item from an array and displays it on the page.

In this example the array contains cat names, but the code is written in a general way so that it could easily be reused to display other kinds of content such as quotes, facts, tips, or messages.

This exercise introduces several important JavaScript concepts including arrays, functions, events, and updating the page dynamically.

---

## Learning Goals

By completing this exercise, you should understand how to:

- Store multiple values in a JavaScript array
- Create a function that performs a task
- Trigger that function using a button click
- Generate a random number in JavaScript
- Use that random number to select an item from an array
- Target an HTML element using `document.getElementById()`
- Change the text inside an HTML element with JavaScript
- Understand how HTML, CSS, and JavaScript work together

---

## How the Page Works

The interaction on this page follows a simple sequence.

1. The page loads in the browser.
2. The browser builds the page from the HTML.
3. The JavaScript file is loaded using the `defer` attribute.
4. The user clicks the button.
5. The button triggers a JavaScript function named `showInfo()`.
6. The function generates a random number.
7. That number is used to select one item from the array.
8. JavaScript finds the element with the ID `info`.
9. The selected value is placed inside that element.
10. The page updates immediately without reloading.

This pattern—triggering a function, processing data, and updating the page—is extremely common in modern web development.

---

## Files in This Project

### index.html

This file contains the structure of the webpage.

### styles.css

This file controls the visual appearance of the page.


### reset.css

Browsers apply their own default styles to many HTML elements.  
A reset stylesheet removes or reduces those default styles so that the page looks more consistent across different browsers.

### random-info.js

This file contains the JavaScript that powers the page interaction.

The script includes:

- an array that stores possible values
- a function that runs when the button is clicked
- code that generates a random number
- code that selects one item from the array
- code that updates the HTML element on the page

---

## The Button Element

This project introduces the `<button>` element.

Earlier in Web Design I and Web Design II, most clickable elements were created using the `<a>` (anchor) element. That made sense at the time because those elements were used for navigation, such as:

- linking to a different page
- linking to another site


The `<a>` element is intended for navigation to another location.

The `<button>` element is intended for actions within the same page.

Examples of actions include:

- triggering JavaScript
- submitting a form
- opening or closing an interface element
- showing or hiding content
- performing calculations

In this project, clicking the button does not navigate anywhere. Instead, it performs an action by running a JavaScript function and updating the page. Because of that, `<button>` is the correct element to use.

A simple rule to remember is:

Use `<a>` for navigation.  
Use `<button>` for actions.

---

## Why This Project Uses `onclick`

The button in this project uses an inline event handler:

`<button onclick="showInfo()">Show a Cat</button>`

In modern web development, JavaScript is usually attached using event listeners instead of inline HTML attributes. For example:

`document.getElementById("myButton").addEventListener("click", showInfo);`

Inline event handlers like `onclick` are often discouraged these days because they mix HTML and JavaScript together and can make larger projects harder to maintain.

However, in this exercise `onclick` is used intentionally because it clearly shows the connection between the button and the function it triggers.

button → click → function

For beginners, this direct relationship is easier to understand. Later we will introduce the more modern event listener approach.

---

## How the JavaScript Works

### The Array

The script begins by creating an array that stores the possible values that can appear on the page.

```javascript
var infoArray = [
   "Ivan",
   "Cookie",
   "Vlad",
   "Demeter",
   "Josie",
   "Gomez"
];
```

An array allows multiple related values to be stored together in one variable.

---

### The Function

The script defines a function named `showInfo()`.

```javascript
function showInfo() {
```

A function is a block of code that performs a task but does not run until it is called. In this project, the function runs when the button is clicked.

---

### Generating a Random Number

The script generates a random number with the following line:

```javascript
var randomNumber = Math.floor(Math.random() * infoArray.length);
```

Here is what each part does:

- `Math.random()` generates a random decimal number between 0 and 1.
- Multiplying by `infoArray.length` scales the number based on the number of items in the array.
- `Math.floor()` rounds the result down to the nearest whole number.

Because array positions start at zero, this produces a valid random index for the array.

---

### Selecting a Random Item

The random number is then used to select an item from the array.

```javascript
var randomInfo = infoArray[randomNumber];
```

For example:

- If the random number is 0, the selected value will be "Ivan".
- If the random number is 3, the selected value will be "Demeter".

---

### Finding the HTML Element

The script then finds the HTML element where the result will be displayed.

```javascript
var infoElement = document.getElementById("info");
```

This targets the element in the HTML that has the ID `info`.

---

### Updating the Page

Finally, the script updates the page with the selected value.

```javascript
infoElement.textContent = randomInfo;
```

This replaces the text inside the element with the randomly selected value.

The browser updates the page instantly without reloading.

---

## Glossary

**Array**  
A JavaScript structure used to store multiple values inside a single variable.

**Attribute**  
Additional information inside an HTML tag, such as `id`, `class`, or `onclick`.

**Button**  
An HTML element designed to trigger actions such as running JavaScript.

**Element**  
A building block of HTML such as `<p>`, `<div>`, `<button>`, or `<h1>`.

**Event**  
An action detected by JavaScript, such as a click, key press, or page load.

**Event Handler**  
A piece of code that runs when a specific event occurs.

**Function**  
A reusable block of JavaScript code that runs when called.

**ID**  
A unique identifier used to target a specific HTML element.

**Math.floor()**  
A JavaScript method that rounds a number down to the nearest whole number.

**Math.random()**  
A JavaScript method that generates a random decimal between 0 and 1.

**onclick**  
An HTML event handler that runs JavaScript when an element is clicked.

**textContent**  
A JavaScript property used to change the text inside an HTML element.

**Variable**  
A named container used to store a value in JavaScript.

**document.getElementById()**  
A JavaScript method used to find an HTML element by its ID.


---

## Common Mistakes

When working with JavaScript for the first time, there are a few common errors students run into. If your script is not working, check these first.

### The ID does not match

The JavaScript looks for this element:

```javascript
document.getElementById("info")
```

That means the HTML must contain an element with the exact same ID:

```html
<div id="info"></div>
```

If the ID is different in either place, JavaScript will not find the element and the script will fail.

---

### The function name does not match

The button calls the function like this:

```html
<button onclick="showInfo()">Show a Cat</button>
```

That means the JavaScript must define a function with the same name:

```javascript
function showInfo() {
```

If the names do not match exactly, the function will not run.

---

### Missing parentheses when calling the function

The parentheses are required when calling a function.

Correct:

```
showInfo()
```

Incorrect:

```
showInfo
```

Without the parentheses, the function will not execute.

---

### JavaScript file not linked correctly

The HTML must include the script tag:

```html
<script src="random-info.js" defer></script>
```

If the filename or path is wrong, the browser will not load the JavaScript.

You can check this using the browser developer console.

---

### Syntax errors in JavaScript

Even a small typo can prevent JavaScript from running.

Examples include:

- missing semicolons
- missing quotation marks
- missing brackets
- extra commas in arrays

If something stops working, open the browser's **Developer Tools Console** to see error messages.

---

## Things to Try

Once the basic version is working, try experimenting with the code.

### Add more items to the array

Add more names to the array:

```javascript
var infoArray = [
   "Ivan",
   "Cookie",
   "Vlad",
   "Demeter",
   "Josie",
   "Gomez",
   "Luna",
   "Oliver",
   "Milo"
];
```

The script will automatically include them in the random selection.

---

### Change the theme

Instead of cat names, try using something else:

- random quotes
- favorite movies
- city names
- colors
- programming tips

Only the array needs to change. The rest of the code can stay the same.

---

### Style the output

Modify the CSS to make the result stand out more.

For example:

```css
#info {
    font-size: 2rem;
    color: darkblue;
}
```

---

### Display a message with the result

Instead of showing only the name, add text around it:

```javascript
infoElement.textContent = "Random Cat: " + randomInfo;
```

This shows how JavaScript can combine text and variables.



---

## Why This Exercise Is Important

This small project demonstrates one of the most common patterns in web development:

1. Wait for user interaction  
2. Run a function  
3. Process some data  
4. Update the page  

You will see this same pattern used in many interactive features such as:

- image sliders
- random quote generators
- quizzes
- tabbed interfaces
- filters
- calculators
- search tools

Learning this pattern provides a foundation for much more complex JavaScript projects later.
