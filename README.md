# tip-js
<h3>A function of javascript to show a tip message on the left or right of a screen.</h3>
<h2>How to use?</h2>
1: Add the js file to HTML.
2: Add [div] with id="tip" to [body], and the [div] should be at top of [body] to ensure [tip()] can display well.
3: Call tip(1, 2, 3, 4, 5) to show message.
parameter
    1: The message to display (String);
    2: Height to the top of screen (String);
    3: Z-index (String);
    4: Time to show (int);
    5: Position to display, false->left, true->right (boolean).
    
Example: tip("I will display on the left and margin-top 31% of screen height for 2000ms with z-index 1", "31%", "1", 2000, false);
