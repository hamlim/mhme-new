---
title: 'Attribute Selectors FTW'
author: Matthew Hamlin
date: 2016-08-21
tags: ['development']
---

I have recently been reading a lot of interesting articles and looking at a few interesting Codepen's that deal with attribute selectors. The two links that stand out the most are <a href="https://css-tricks.com/weird-design-languages-with-attributes/">this article</a> about making a design language with attribute selectors and <a href="http://codepen.io/alexzaworski/pen/xOBmXP">this</a> Codepen about making a color mixer from attribute selectors.

After I saw these two ideas expressed I began to think about specificity. Regularly when dealing with css developers need to keep in mind the number of selectors they use to style specific parts of a website. It really only gets complicated when managing a large codebase with several developers all authoring new code and also updating old code. <em>So if you are looking for a solution for a large company (more than 5 developers) this is probably not the way to go.</em>

The large reason why I began to see Attribute Selectors as being awesome is because I wouldn't need to arbitrarily increase my specificity just to style things like id specific elements. This becomes immediately valuable when dealing with any links that link to a specific element on the current document.

```CSS
#id {
color: red;
}
[id="id"] {
color: red;
}
```

These two snippets of css are exactly the same, except for their specificity, because attribute selectors are equivalent to class selectors and id selectors are equivalent to 0,1,0,0. In case you can't tell yet, this s huge! Now the only time that developers have to worry about specificity is when nesting rules in preprocessors like SASS or LESS.

But wait, theres more! You actually don't have to worry about nesting selectors either! Attribute selectors are so smart that you can build out "nested"-like selectors simply with their own operators. Attribute selectors have this sweet functionality with matching attributes. These are fully explained in this great article by CSS-Tricks which can be found <a href="https://css-tricks.com/attribute-selectors/">here</a>. The gist is that you can select based on if the attribute is exactly equal to something, begins with a certain value, ends with a certain value, is in a space separated list, and is in a dash separated list.

##### Exactly Equal to:
```css
[attribute="something"] {
  prop: value;
}
```

##### Begins with a value:
```css
[attribute^="something"] {
  prop: value;
}
```

##### Ends with a value:
```css
[attribute$="something"] {
  prop: value;
}
```

##### Space separated list:
```css
[attribute~="something"] {
  prop: value;
}
```
##### Dash separated list:
```css
[attribute|="something"] {
  prop: value;
}
```

##### Substring match:
```css
[attribute*="something"] {
  prop: value;
}
```
##### Case Insensitivity<sup>[^1]:
```css
[attribute="something" i] {
  prop: value;
}
```

With all these we can make basically any nested structure you might make in SASS or in LESS.

I haven't yet updated my css for this site to use attribute selectors but it is on my list. The main reason I haven't done it yet is because its really semantic. So far it includes a lot of typing whereas a simple class syntax and nesting classes with preprocessors is really easy to type and is still really powerful. I will be replacing all id selectors with attribute selectors however because it will make my code a lot easier to manage in the long run.

----
#### Footnotes:
[^1]:Note: Operator here can be any of the predefined operations in the above examples, such as `=`, `~=`, `|=`, `^=`, `$=`, and `*=`. Also the `i` can be lowercase or uppercase.
