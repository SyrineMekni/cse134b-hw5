HW5 Part 4 - Static Site Generator

For this part, I used Eleventy with Nunjucks.
I chose two pages from my Pudology website:
Home and Our Story.

To install the dependencies, run:

npm install

To build the website, run:

npx @11ty/eleventy

To preview the website locally, run:

npx @11ty/eleventy --serve

The two pages can be accessed at:

Home: http://localhost:8080/
Our Story: http://localhost:8080/about/

Both pages share the same footer, which is located
in _includes/footer.njk.

To test that the shared footer works, I added the
slogan "Superfood, super good." to the footer file.
After rebuilding and refreshing both pages, I
confirmed that the slogan appeared on both pages
without having to edit each page separately.
