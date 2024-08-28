# fillInTheBlank

jQuery plugin to create fill-in-the-blank questions using arbitrary delimiters

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# How to use

// Set arbitrary delimiters where you want to make fill-in-the-blank question

<pre>
   <p>Mt.Fuji is in ^Japan^.</p>
</pre>

// Execute after loading jQuery and fillInTheBlank.js

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
      alert("Sorry, that's incorrect."); 
    }
  });
});
</script>
</pre>
