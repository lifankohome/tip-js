# tip-js

**A javascript function to show a pretty tip message on browser**

tip.min.js - **ECMASCRIPT5**

### How to use?

+ Link the tip.js/tip.min.js file

+ Use tip(...) function at script

You may have a look at demo.html if you are really confused.

### CDN:
http://cdn.lifanko.cn/tip10.min.js

### Parameter:

```
tip(text, top, period, index, side)
```

Required parameters:

```
text  : (String) The text you want to show
top   : (String) Margin top attribute of text
period: (int) Time to display
```

Optional parameters:

```
index : (String) z-index attribute of text
side  : (boolean) To show on Left or right
```

### Comprehensive example:

tip("I will display on right and margin-top 30%  for 2000ms with z-index 1", "30%", 2000, "1", true);

### Special situation:

You may call 'tip' function when a tip text is showing, what would happen under this circumstances?
 + The later caller will cancel the earlier caller, so the showing text will hide immediately, then the latest 'tip' will show.