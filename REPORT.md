# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:**  
Space Weight Calculator

**What does your calculator do?**  
This calculator determines your weight on other planets based on your weight on Earth. It provides a message for each celestial body in our solar system by request.

---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |

| Your Name | - | User's name |

| Your Weight | kg | User body weight |

| Select Planet | list of planents | The planet in which users want to know their weight |

Explain in words:  
"Your Name" input is for recognize user's name, so it will be personalized. "Your Weight" input is needed to calculate the final weight on another planet, because formula is finalWeight = weight * gravityFactor. "Select Planet" input is to choose "gravityFactor" (which already written in code) for formula.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
finalWeight = weight * gravityFactor


**Steps:**
1. Get input values from HTML  
2. Perform calculation 
3. Store result in variable  

---

## 4. Conditional Logic (if / else)

Explain how your program interprets the result.

if name === "" || isNaN(weight) || weight <= 0 → "Пожалуйста, введите корректное имя и вес!"

Explaination : calculator can't calculate the user's weight on another planet without actual wight on earth, so it's necessary. And the name for a personal messange.

---

## 5. Output

What does your program show to the user?

"(name) your weight on (planetName) is (finalWeight) kg !"
- Personalized information (name)
- Planet that user chooses (PlanetName)
- Final Weight on another planet (calculated value, finalwheight)
    
---

## 6. Edge Cases / Unusual Inputs

What happens if:

- User enters nothing in "Your Name" → "Пожалуйста, введите корректное имя и вес!"
- User enters negative number or zero in "Your Weight" → "Пожалуйста, введите корректное имя и вес!"
- User leaves input empty → "Пожалуйста, введите корректное имя и вес!"

Explaination : In the code to handle this, I used if-else constructs. 
  if (name === "" || isNaN(weight) || weight <= 0) {
        resultDiv.innerHTML = "Пожалуйста, введите корректное имя и вес!";
        
---

## 7. Optional Features

 - Validation messages : if the entered data is not valid, the messange "Пожалуйста, введите корректное имя и вес!" appears.

---

## 8. How to Run the Project

1. Download or clone repository  
2. Open `index.html` in browser  
3. Enter input values  
4. Click calculate button  

---

## 9. AI Usage (If Used)

Did you use AI tools?  
Yes
I asked AI formula for calculating weight on another planet and then asked to make a calculatour with js, css and html. 
I didn't modify anything.

---

## 10. Reflection

What did you learn from this assignment?
I learned some new functions and how to build code correctly (not fully, but still). JavaScript syntax was new to me, as I'd only worked with Python before, but it was interesting. I can't say I can program now, but at least I understand how it works.

