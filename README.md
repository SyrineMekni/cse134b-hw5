
CSE 134B - Homework 5

Repository:
https://github.com/SyrineMekni/cse134b-hw5

Deployed website:
https://cse134b-hw5-43t.pages.dev/

Web Component

For this homework, I added a Fun Facts component to the home page of my Pudology website. I also added a button to show or hide details and used localStorage to save the user's preference even after refreshing the page.

Part 4 - Static Site Generator

I used Eleventy with Nunjucks to generate two pages from my existing website, Home and Our Story.

The exercise is located in the ssg-exercise folder. Both pages share the same footer, located in _includes/footer.njk.

I tested the shared footer by adding the Pudology slogan and rebuilding the website. The change appeared on both pages without editing them separately.

The instructions to install, build, and preview both pages are in ssg-exercise/README.md.

Design Note

The goal of my component is to allow visitors to discover new facts while exploring my website.

When the visitor clicks the Get New Fact button, JavaScript uses fetch() to request a random fact from an API. While waiting for the response, the visitor sees a loading message.

If the request is successful, JavaScript updates the text in the DOM with the new fact and displays a success message. If the request fails, the visitor sees an error message asking them to try again.

