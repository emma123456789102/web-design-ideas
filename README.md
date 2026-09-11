


StepUp Dance Carousel
StepUp is a beginner-friendly website prototype for browsing dance lessons by difficulty. It contains three independent carousels: Beginner, Intermediate, and Advanced. Each card has arrows that let visitors look through its lessons without changing the other cards.

Project structure
Keep these files together in one project folder:

StepUp/
├── index.html
├── style.css
├── script.js
└── images/             # Optional: add your own dance images here
How to run the website
Create a folder named StepUp.

Add index.html, style.css, and script.js to that folder.

Paste the supplied code into the matching files.

Open index.html in a web browser.

You can normally open the site by double-clicking index.html. If you use Visual Studio Code, the Live Server extension can also open it for you.

How the carousels work
Each difficulty card contains several lesson sections. Only one lesson has the active class at a time, so only that lesson is visible.

When a visitor clicks an arrow, script.js:

Finds the lessons inside that particular card.

Removes active from the currently visible lesson.

Adds active to the next or previous lesson.

Updates the counter, such as 2 of 3.

The carousels loop. Clicking the right arrow on the final lesson returns to the first lesson, while clicking left on the first lesson moves to the final lesson.

How to add a lesson
Find the correct card in index.html, such as the Beginner card, and add another section inside its slides container:

<section class="slide">
  <img
    src="images/new-dance.jpg"
    alt="A dancer demonstrating the new lesson"
  >

  <div class="lesson-information">
    <p class="lesson-number">Beginner lesson</p>
    <h3>New Dance Lesson</h3>
    <p>A short explanation of what the lesson teaches.</p>
    <a href="#">View lesson →</a>
  </div>
</section>
You do not need to change script.js. It automatically counts the lessons inside each card.

Only the first lesson in each card should have both classes:

<section class="slide active">
Every other lesson should use:

<section class="slide">
How to use your own images
Create an images folder beside index.html.

Place your dance image inside it.

Give the image a simple filename, such as beginner-salsa.jpg.

Replace the placeholder image address in index.html:

src="images/beginner-salsa.jpg"
Image names are case-sensitive on many web servers. For example, Salsa.jpg and salsa.jpg may be treated as different files.

Portrait-shaped images work best because the cards are tall. The CSS uses object-fit: cover, so an image may be cropped slightly to fill the card.

Connecting a full lesson page
The current View lesson links use href="#", which keeps the visitor on the same page. After creating a lesson page, change the link to its filename:

<a href="two-step.html">View lesson →</a>
You could make a separate page for each lesson or create one reusable lesson page later.

Customising colours
The main colours are set in style.css:

Bright green: #c8ff38

Purple: #6d28d9

Dark background: #17171c

Pink: #db2777

Search for these colour values in style.css and replace them with your preferred colours.

Common problems
The arrows do not work
Confirm that the file is named exactly script.js.

Confirm that index.html contains <script src="script.js" defer></script>.

Make sure each card still has the data-carousel attribute.

Make sure its buttons still have data-previous and data-next.

The styling is missing
Confirm that the file is named exactly style.css.

Confirm that index.html contains <link rel="stylesheet" href="style.css">.

Keep style.css in the same folder as index.html.

An image does not appear
Check that the image is inside the images folder.

Check its spelling and file extension (.jpg, .jpeg, .png, or .webp).

Avoid spaces in filenames; use names such as hip-hop-groove.jpg.

All lessons appear at once
Confirm that style.css includes:

.slide {
  display: none;
}

.slide.active {
  display: block;
}
Current features
Responsive navigation and hero area

Optional category sidebar

Three independent lesson carousels

Previous and next arrows

Automatic lesson counters

Looping navigation

Mobile-friendly card layout

Keyboard-accessible carousel buttons

Possible next steps
Replace the placeholders with dance photographs.

Create full lesson pages with videos and instructions.

Add a search bar.

Add instructor profiles.

Save completed or favourite lessons.

Add carousel dots below each image.

Technologies
HTML for the page content

CSS for the design and responsive layout

JavaScript for the carousel controls

