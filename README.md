gh-pages url : http://masoodgit.github.io/frontend-nanodegree-mobile-portfolio/build/index.html

## Changes made to improve performance

### index.html

1. inline css from style.css
2. use @fontface for google "open sans"
3. add async to js file related to google analytics and performance js.
4. optimized images using karken.io.
5. repeated the above for project-2048.html,project-mobile.html,project-webperf.html.

### pizza.html
1. inline css from style.css
2. using gulp-uncss reduce bootstrap-grid.css and then inline it in pizza.html

### main.js

1. reduce the number of background pizza from 200 to 32
   (this helped in avoiding to add logic to check the size of the viewport for the background images)
   ```
   https://piazza.com/class/i0sf6tsmg0r7do?cid=1068
   ```
2. refactor function changePizzaSizes(size)
    move fetching of elements out of the for loop
    move calculation of delta out of the for loop
    move calculation of newwith out of the for loop
    iterate the NodeList and update the width

    ```
    https://developer.mozilla.org/en/docs/Web/API/NodeList
    ```
3.  refactor function updatePositions()
    moved the part of phase calculation out of the for loop

4.  opitimize calculation of phase by moving sin function outside of the loop.

5.  use of getElementsByClassName, getElementByID as needed in place of querySelectorAll and querySelector.

6.  experimented with use / modification of cssRule acessing the document.Stylesheets.

7.  most significant improvement in fps was seen with addition of "backface-visibility: hidden" to the .mover class

### References

1. uncss :
    https://piazza.com/class/i0sf6tsmg0r7do?cid=1019 ,
    http://addyosmani.com/blog/removing-unused-css/
2. gulp :
    http://www.sitepoint.com/introduction-gulp-js/
3. others :
    https://piazza.com/class/i0sf6tsmg0r7do?cid=1074 ,
    https://www.youtube.com/watch?v=sqesm0euf9M&index=13&list=PL1B4F4863AEE2B122
    https://piazza.com/class/i0sf6tsmg0r7do?cid=614 
4. Optimization Office hours:
    https://github.com/udacity/fend-office-hours/tree/master/Web%20Optimization/Effective%20Optimizations%20for%2060%20FPS

5. http://www.hunlock.com/blogs/Totally_Pwn_CSS_with_Javascript


## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>

### Sample Portfolios

Feeling uninspired by the portfolio? Here's a list of cool portfolios I found after a few minutes of Googling.

* <a href="http://www.reddit.com/r/webdev/comments/280qkr/would_anybody_like_to_post_their_portfolio_site/">A great discussion about portfolios on reddit</a>
* <a href="http://ianlunn.co.uk/">http://ianlunn.co.uk/</a>
* <a href="http://www.adhamdannaway.com/portfolio">http://www.adhamdannaway.com/portfolio</a>
* <a href="http://www.timboelaars.nl/">http://www.timboelaars.nl/</a>
* <a href="http://futoryan.prosite.com/">http://futoryan.prosite.com/</a>
* <a href="http://playonpixels.prosite.com/21591/projects">http://playonpixels.prosite.com/21591/projects</a>
* <a href="http://colintrenter.prosite.com/">http://colintrenter.prosite.com/</a>
* <a href="http://calebmorris.prosite.com/">http://calebmorris.prosite.com/</a>
* <a href="http://www.cullywright.com/">http://www.cullywright.com/</a>
* <a href="http://yourjustlucky.com/">http://yourjustlucky.com/</a>
* <a href="http://nicoledominguez.com/portfolio/">http://nicoledominguez.com/portfolio/</a>
* <a href="http://www.roxannecook.com/">http://www.roxannecook.com/</a>
* <a href="http://www.84colors.com/portfolio.html">http://www.84colors.com/portfolio.html</a>
