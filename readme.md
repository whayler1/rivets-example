# How Do I Rivets

A buddy recently turned me on to [rivets js](http://www.rivetsjs.com/). Besides being bundled with the epic [ember js](http://emberjs.com/) framework, it's a sleek little stand alone lib. Rivets is a [templating system](http://en.wikipedia.org/wiki/JavaScript_templating), which in and of itself is not so revolutionary, except unlike handlebars or mustache it has built in two-way binding. This means that, assuming everything is configured properly, when you update your data object the DOM will auto-magically update, and when you update properly associated DOM elements the data model will update. A one and done, one stop shop, configure your page and don't worry about your view and your data falling out of sync again.

This tutorial is going to walk you through building a small mock-shopping app with a product array, a shopping bag and a bill calculator. This app will be for a candy shop.

### Hello Rivets

The most basic thing you could do in rivets is use it's handlebars-like syntax to populate parts of the dom with data. This is called "text content interpolation", but for our purposes it basically means defining where you want data to appear in the DOM by wrapping it in curly brackets: `{ somedata }`.

#### html

Make a new html file and write the below markup in it.

```html
<!DOCTYPE html>
<html>
  <title>Candy Shop</title>
    
  <link rel="stylesheet" href="candy-shop.css">
  <script type="text/javascript" 
      src="http://cdn.rawgit.com/mikeric/rivets/master/dist/rivets.min.js"></script>
  <body>
    <div id="candy-shop">
      <h1>{ data.title }</h1>
    </div>
    
    <script type="text/javascript" src="candy-shop.js"></script>
  </body>
</html>
```

In the head we pull in rivets script. Inside the body we are creating a div with an h1 tag. The h1 tag has `{ data.title }` in it. If you've used templating engines before this should look familiar to you.

#### css

We won't be editing this css at all. I'd just cut and paste it and name the file "candy-shop.css". This will just help the app fit on your screen a bit nicer, but is not in any way necessary to this tutorial.

```css
ul {
  margin-left: 0;
  padding-left: 0;
}

li {
  display: inline-block;
  padding: 0 20px;
  border-left: 1px dotted grey;
}

li:first-child {
  padding-left: 0;
  border-left: none;
}
```

#### js

This is where things will start to get fun. Name this file "candy-shop.js".

```js
var data = {
    title: 'Welcome to the Candy Shop'
    };

rivets.bind(document.querySelector('#candy-shop'), {
  data: data
});
```