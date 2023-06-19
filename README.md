# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](/assets/images/desktop-screenshot.png.jpg)

### Links

- Solution URL: [View Code](https://github.com/tunajim/Email-sign-up-component)
- Live Site URL: [Visit Site](https://tunajim.github.io/Email-sign-up-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This project was a helpful review of JavaScript form validation.  Since we are not sending the information to a back-end server to be sanitized and stored, we had to control how the HTML form behaves.  This is done by preventing its default behavior on submit, while checking to see if the user has properly filled out the form. Depending on whether the form entry is valid or not, we will store the user's input into a variable and use string interpolation to display the success message.  


### Continued development

My goals are to continue honing my HTML, CSS, and JavaScript skills and learn the best practices for writing accessible applications. 


## Author

- Frontend Mentor - [@tunajim](https://www.frontendmentor.io/profile/tunajim)
