#jQuery.exampleRunner
Parse and run example JavaScript code from a convenient select list.

##Overview
Allows for the demonstration of various bits of JavaScript code or different options for a plugin without having to re-write the code more than once. Instead, the plugin will just parse and execute the sample code. In addition it will create a `<select>` list that will allow for the hiding and loading of different demos or snippets.

##Example
The following markup will create a `<select>` list with two options based on the example titles: "Alert Message 1" and "Alert Message 2." Everything in the corresponding `<div>` will be shown and hidden when the select list is changed, and everything inside a `<code>` tag will be executed.

	<div id="examples">
		<div title="Alert Message 1">
			<p>This is some other stuff.</p>
			<code>
				alert("Example 1");
			</code>
		</div>
		<div title="Alert Message 2">
			<code>
				alert("Example 2");
			</code>
			<p>More things.</p>
		</div>
	</div>