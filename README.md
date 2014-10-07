# Wireframing with AngularJS

This is a site setup for HTML wireframes. Each view has associated JSON files for storing demo content. Intended for static-ish business brochure sites.

There are very, very few styles - the layout is based on [Brad Frost's HTML wireframes](bradfrostweb.com/blog/post/html-wireframes/) for the Food Bank project, and the concept comes from Stephen Hay's "content reference wireframes" in his RWD workflow - nice write up by Brad Frost [here](http://bradfrostweb.com/blog/mobile/bdconf-stephen-hay-presents-responsive-design-workflow/) (what would we do without him?!).

Good stuff! The repo is currently set up for one of my projects, the redoing of [dijifi.com](http://dijifi.com), hopefully the structure will be similar to something you are working on.

### What's here?

The project was started with the [Yoeman Angular App generator](http://yeoman.io/codelab.html), so all technologies are what's included with that - Grunt, Bower, Sass, et al.

It also includes the Bootstrap grid for easy layout work (but don't do any layout until later! Mobile first, baby!).

### How to use it

No guarantee this will work out of the box, and these are probably vague instructions, but here's the gist:

1. ```npm install```
2. ```bower install```
3. ```grunt serve```
4. Adjust the naming of the views and controllers to your liking
5. Add your own JSON test data
6. Adjust the templates to correlate with that data

### Enjoy!