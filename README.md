# tip-js

**A javascript function to show a pretty tip message on browser**

### How to use?

+ Link the tip.js/tip.min.js file

+ Add code to HTML:
```
<div id="tip"></div>
```

+ Use tip(...) function at script

You may have a look at demo.html if you are really confused.

### Parameter:

```
tip(text, top, period, index, side)
```

Required parameters:

```
text  : (String) The text you want to show
top   : (String) Margin top attribute of text
period: (String) Time to display
```

Optional parameters:

```
index : (int) z-index attribute of text
side  : (boolean) To show on Left or right
```

### Comprehensive example:

tip("I will display on right and margin-top 30%  for 2000ms with z-index 1", "30%", 2000, "1", true);

### Special situation:

You may call 'tip' function when a tip text is showing, what would happen under this circumstances?
 + The later caller will cancel the earlier caller, so the showing text will hide immediately, then the latest 'tip' will show.