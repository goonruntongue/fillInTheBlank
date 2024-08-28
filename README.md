# fillInTheBlank

jQuery plugin to create fill-in-the-blank questions using arbitrary delimiters

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# How to use

// Set arbitrary delimiters where you want to make fill-in-the-blank question

<pre>
&lt;pre&gt;
    Mt.Fuji is in ^Japan^.
&lt;/pre&gt;
</pre>

// Execute after loading jQuery and fillInTheBlank.js

//initialize
<pre>
<script>
  $("pre").fillInTheBlank();
</script>
</pre>

//options
<pre>
<script>
$("pre").each(function() {
  $(this).fillInTheBlank({
    delimiter: "^", // Delimiter to use -- default "^"
    event: "change", // Event that triggers the check　--default "change"
    correct: function() {
      alert("Correct!"); // When event is occured and answer is collect..
    },
    wrong: function() {
      alert("Sorry, that's incorrect."); // When event is occured and answer is wrong..
    }
  });
});
</script>
</pre>
<table>
  <tr>
    <th>OPTION NAME</th><th>TYPE</th><th>DEFAULT VALUE</th>
  </tr>
  <tr>
    <td>delimiter</td><td>string</td><td>"^"</td>
  </tr>
  <tr>
    <td>event</td><td>string</td><td>"change"</td>
  </tr>
  <tr>
    <td>correct</td><td>function</td><td>null</td>
  </tr>
    <td>wrong</td><td>function</td><td>null</td>
</table>
