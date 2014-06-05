# How Do I Rivets

A buddy recently turned me on to [rivets js](http://www.rivetsjs.com/). Besides being bundled with the epic [ember js](http://emberjs.com/) framework, it's a sleek little stand alone lib. Rivets is a [templating system](http://en.wikipedia.org/wiki/JavaScript_templating), which in and of itself is not so revolutionary, except unlike handlebars or mustache it has built in two-way binding. This means that, assuming everything is configured properly, when you update your data object the DOM will auto-magically update, and when you update properly associated DOM elements the data model will update. A one and done, one stop shop, configure your page and don't worry about your view and your data falling out of sync again.

### Hello Rivets

The most basic thing you could do in rivets is use it's handlebars-like syntax to populate parts of the dom with data. This is called &ldquo;text content interpolation&rdquo;, but for our purposes it basically means defining where you want data to appear in the DOM by wrapping it in curly brackets: `{ somedata }`.

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
      <h1 rv-text="data.title"></h1>
    </div>
    
    <script type="text/javascript" src="candy-shop.js"></script>
  </body>
</html>
```