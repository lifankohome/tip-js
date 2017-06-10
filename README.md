# tip-js
<h3>A function of javascript to show a tip message on the left or right of a screen.</h3>
<h2>How to use?</h2>
<p>1: Add the js file to HTML.</p>
<p>2: Add [div] with id="tip" to [body], and the [div] should be at top of [body] to ensure [tip()] can display well.</p>
<p>3: Call tip(1, 2, 3, 4, 5) to show message.</p>
<p></p>
<p>　parameter:<br>　　1: The message to display (String);<br>　　2: Height to the top of screen (String);<br>　　3: Z-index (String);<br>　　4: Time to show (int);<br>　　5: Position to display, false->left, true->right (boolean).</p>
    
<h4>Example: tip("I will display on the left and at 30% height of screen for 2000ms with z-index 1", "30%", "1", 2000, false);</h4>
