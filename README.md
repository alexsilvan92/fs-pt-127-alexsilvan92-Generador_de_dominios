<!-- hide -->
# Domain Generator

This project generates domain name combinations using JavaScript.  
The user can generate domains from lists of pronouns, adjectives, nouns, and domain extensions.

---

## 📂 Project structure

```text
/src
   ├─ app.js // Version that generates the domains and prints them in the console
   ├─ index.js // Version that generates the domains and displays them in the HTML
   ├─ index.html // main HTML
   └─ style.css // Optional styles
```

---

## 📝 Description of JavaScript files

### 1️⃣ `app.js`
- Contains the basic logic to generate all possible domains.  
- **Output:** prints all domains to the editor console.  
- **Use:** useful for quick tests and to verify that the logic is working correctly.

### 2️⃣ `index.js`
- Contains the same domain generation logic, but interacts with the HTML.  
- **Output:** Adds each domain as a `<li>` element inside a `<ul>` on the page.  
- Includes a button that, when pressed, generates and displays the domains in the HTML.

---

## 💻 How to use the project

### Major version (required)
1. Run `app.js` in the editor console with Node.js.  
2. The generated domains will be printed to the console with `console.log()`.

### Optional version (interactive in HTML)
1. Open `index.html` in a browser.  
2. Click the Generate domains button.  
3. Domains will be dynamically listed on the page as `<li>` elements inside a `<ul>`.  
> This version is used to see the result directly on the page and practice interaction with the DOM.

---

## 🛠 Technologies used

- HTML5
-CSS3
- JavaScript (Vanilla JS)
- Bootstrap 5 (optional for list and button styles)

---

## ✨ Summary

This project demonstrates:

- Use of arrays and nested loops to generate combinations.
- DOM manipulation to display results dynamically.
- Difference between generating results in the console (`app.js`) and in the HTML (`index.js`).