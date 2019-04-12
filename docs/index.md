---
layout: default
title: Home
---

# [Moebot](http://moebot.design/)
## [Eric Moe's Portfolio](http://ericmoe.co/)
## [Eric Moe's Social](http://geomoetric.com/)

Moebot lets people design with machine intelligence on the web. Its algorithm models thinking, perception, and action to make designs. This proof-of-concept generates modernist layouts, typography, and geometry on the web. Designed by Eric Moe

## Controls

* <kbd>esc</kbd> : Refresh page and generate new design
* <kbd>tab</kbd> : Overlay grids for reference

## Process

### Project Speculation

Six years ago, I began thinking about Moebot thanks to a computer’s suggestion. The computer ran a [website](https://www.stumbleupon.com/) that directed me to [OpenProcessing.org](https://www.openprocessing.org/), and introduced me to the world of creative coding. This site boasted something few others could—developers and artists working together on code to create art. OpenProcessing opened my eyes to the possibilities of creating art with code.

> The obvious next question was—can you use code to make design?

As the years went by, this question burned in the back of my mind. Every time I found something interesting on artificial intelligence, generative art, or algorithmic design I bookmarked it. I took every opportunity to design projects around generative code. The result of these ruminations were the beginnings of my capstone.

<figure class="fullwidth">
<img src="/assets/images/mindmap.png" alt="Moebot">
</figure>

By the time summer of 2018 came to a close, I had plenty of material to work with but no focus. I knew I wanted to create something for the web, and I knew I wanted it to be on generative design, but I had no idea what the problem was.

___
### Research
When the evidence suggests that no one else is doing the work you are trying to do, is that a good or bad sign? That is the conundrum of AI-driven design—either you have functional machine intelligence or visually pleasing art experiments—rarely both. Regardless, I found a few examples:

- [algorithms.design](https://algorithms.design/)—The best collection of algorithmic design on the web.
- [inspirobot.me](http://inspirobot.me/)—A generator that creates inspiring quote images. Despite working with text and images, this project is too gimmicky to be used in most design contexts. 
- [randomatizm.hack.exchange](http://randomatizm.hack.exchange/)—The closest I got to the functionality of generative art while approaching some usability. A little goes a long way, even for constructivist posters!
- [Vox’s Algorithmic Redesign](https://product.voxmedia.com/2014/12/17/7405131/algorithmic-design-how-vox-picks-a-winning-layout-out-of-thousands)—Vox used Algorithmic design to generate its homepage, but once they got the layout they liked, Vox stopped the algorithm. It would be more interesting if your layout adapted itself for your needs rather than a one size fits all approach.
- [AI Generated Nude Portraits](https://robbiebarrat.github.io/oth/nude.html)—Again on the artistic side, but this project shows the high sophistication and the obvious pitfalls of this technology.

Meanwhile, my classes on artificial intelligence presented new obstacles and opportunity. AI is a discipline that comes with baggage that ranges from the virtual assistant in your pocket to the chrome skeletons time traveling to [terminate your existence](https://www.imdb.com/title/tt0088247/). It was vital for me to have a handy definition of AI that anyone could understand. I got halfway there through Dr. Henry Patrick Winston—Director of the MIT Artificial Intelligence Laboratory from 1972 to 1997:

> “[Artificial Intelligence is] about algorithms enabled by constraints exposed by representations that model targeted thinking, perception, and action.” —Dr. Henry Patrick Winston—Director of the MIT Artificial Intelligence Laboratory from 1972 to 1997

As you can imagine, everyone instantly understood that quote and even my Grandmother calls me to ask about neural networks. Or not. However, if you juxtapose that quote against famous designers describing design:

> “The difference between good design and great design is intelligence.” —Tibor Kalman, Founder of M & Co. and Colors magazine
> “Design is the method of putting form and content together.” —Paul Rand, Corporate Design Strategist, and Yale Professor

With that in mind, this is my simplified definition of Artificial intelligence:

> Artificial Intelligence models thinking, perception, and action to make.

___

### Rapid Prototyping

I found myself stuck in a rut toward the end of my research. The research was fine, but the focus was not—I still did not know what the problem was I wanted to solve. My solution was to rapidly prototype a couple of websites to show off the potentials of artificial intelligence and design.

<figure>
<img src="/assets/images/Youtube_MI.png" alt="Youtube AI Mockup">
</figure>

Here is a simple visual interpretation of machine intelligence. Youtube already calculates how likely you are to click on a video, so you can make the thumbnails larger or smaller based on that data. Arranging them in a Fibonacci spiral is just a plus when you have all that computational power at your disposal.

<figure>
<img src="/assets/images/Wikipedia_MI.png" alt="Wikipedia AI Mockup">
</figure>

What if Wikipedia needed a redesign? The last time they did it was [difficult and controversial](https://en.wikipedia.org/wiki/History_of_Wikipedia#Look_and_feel). To add a two column layout on a site as large as Wikipedia, you could use AI to comp through the site and figure out all the use-cases ahead of time, or to render it on the fly.

<figure>
<img src="/assets/images/Healthcare_MI.png" alt="Healthcare AI Mockup">
</figure>

Finally, we have Healthcare.gov. With all the potential users and user needs, perhaps AI could craft a custom experience for every user. Even if they misspell something, people have a right to access and take advantage of healthcare.

Here’s why this is important. The invention of the computer—at minimum a low-level machine intelligence—changed every aspect of our lives. We have realized that to get the most out of the computer, we have to shift our thinking to adapt and compliment this artificial intelligence. 

> We sacrifice potential design advancement when our digital design experiences simply mirror physical design processes. If we instead design in tandem with artificial intelligence, the possibilities increase exponentially.

The experiments above show off how this shift in thinking can impact web design. These experiments do not crystallize the AI-driven design experience. Someone could look at them and think “well I’m not building YouTube, so who cares.” Here is where my problem finally came into focus. 

> The Problem—AI Driven Design needs a prototypical poster-child that other designers can build on.

My charge is to make something that a designer can use to create design. The components are elemental—type, shape, and layout. The styling is black and white as not to distract. Finally, the project should be open source so others can iterate upon it. With that, I was ready to build.

___

### Pre-Alpha Development
<figure>
<img src="/assets/images/2.png" alt="Moebot">
</figure>

In the beginning, there was just a bunch of circles. For a while I had to configure nonvisual things like placement, grid, and interactivity, so circles were the star of the show.

<figure>
<img src="/assets/images/3.png" alt="Moebot">
</figure>

Then I added editable text boxes. As you can see here, I made a quick poster for my friend Max about his habit of solitaire during class. I included this to show some organic experimentation with the tool.

<figure>
<img src="/assets/images/8.png" alt="Moebot">
</figure>

The aliens are coming! There is something peaceful about this composition.

<figure>
<img src="/assets/images/4.png" alt="Moebot">
</figure>

Here you can see the grid, something you can activate with the <kbd>tab</kbd> key. In the beginning, I had difficulties with text aligning to the far right and overlapping out of the grid system—but I fixed it.

<figure>
<img src="/assets/images/5.png" alt="Moebot">
</figure>

At this point, I had some new shapes and Unicode symbols randomly arranging themselves on the grid. 

<figure>
<img src="/assets/images/6.png" alt="Moebot">
</figure>

Now fonts variably change when refreshed.

<figure>
<img src="/assets/images/7.png" alt="Moebot">
</figure>

I happened to think this was an interesting composition. As you can see, text no longer overlaps with the shapes. 

### Conclusion

At all times I had an idea for an alpha which I wanted to show for critique. An inflection point where this project can progress in any direction. I feel that I have hit this alpha, and I want to discuss my work warts and all. 
There have been many gratifying moments in this process. A certain paternal feeling occurs when you name your artificial intelligence after yourself. I was there for Moebot’s first steps, its first words, and I am here to guide it through adolescence. Like any proud parent, I am grateful that so many have been curious about this project—that so many people have offered their suggestions and enthusiasm. When I see the wheels start turning in people’s minds, that is when I know Moebot is doing its job

___
___

## Getting Started

Use these instructions to get a copy of the project up and running on your local machine for experimentation and extension.

### Prerequisites

Moe-Bot is developed and tested on Google Chrome (Version 70). Cross-browser testing is in the works! Please submit a pull request if you encounter any weirdness!

### Installation

Moe-Bot is super easy to install. Just download a copy of this repository and open the index.html file directly in your browser.

1. Download the latest version of Moe-Bot from [github.com/geomoetric/moe-bot/releases](https://github.com/geomoetric/moe-bot/releases).
2. Unzip the folder.
3. Open the index.html file in Google Chrome to view it—<kbd>cmd</kbd> + <kbd>o</kbd> to open from Chrome directly.

## Built With

* [p5.js](https://p5js.org/)—Core javascript graphics library.
* [Tesserae-Regular.otf](https://github.com/hlotvonen/glyph-drawing-club/blob/master/fonts/Tesserae-Regular.otf)—Open source modular symbol font used to generate shapes.
* [Symbola.otf](http://users.teilar.gr/~g1951d/)—Truly the best unicode symbol font. Using the Miscellaneous Symbol and Dingbat blocks from unicode.
* [Normalize.css](http://necolas.github.io/normalize.css/)—A stylesheet to standardize css across browsers.
* [Tufte CSS](https://edwardtufte.github.io/tufte-css/)—A stylesheet for the documentation, tweaked with Moebot branding.

## Authors

* **Eric Moe**—*Initial work*—[Design Portfolio](https://ericmoe.co)

## License

Moe-Bot falls under the Apache License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Kudos to the [UT Design Department](https://designcreativetech.utexas.edu/) and all the guest critics whose feedback significantly improved this project.
