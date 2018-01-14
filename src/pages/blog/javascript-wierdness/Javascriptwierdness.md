---
title: 'Javascript Weirdness'
author: Matthew Hamlin
date: 2017-03-26
tags: ['development']
---

Okay, in case you didn't know already, Javascript is a funky language.

I am currently working on a simple calendar web app using CSS Grid and a bit of react, so I wanted to generate an 
array of arrays storing the days in each month in each year. I was hoping to do this with some fancy forEach loops 
so I started with the following code:

```Javascript
const year = (new Array(12)).fill([]);
```

I was hoping this would return something like this:

```Javascript
year = [[], [], [], [], [], [], [], [], [], [], [], []];
```

but it instead returned essentially this:

```Javascript
year = [12 x []];
```

which basically boils down to an array of 12 pointers all pointing to the same virtual array. It took about 45 minutes 
debugging this with one of my friends because it kept returning an array of 12 arrays each holding 365 items.

The way that I got around this issue was by setting `year` to:

```Javascript
const year = [[], [], [], [], [], [], [], [], [], [], []];
```

Then I could add in all my days within each array.
