/*!
 * fillInTheBlank jQuery Plugin
 * 
 * @version 1.0.0
 * @license MIT
 * 
 * Copyright (c) 2024 [Your Name or Your Organization]
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

(function($) {
    $.fn.fillInTheBlank = function(options) {
        // Default options
        const settings = $.extend({
            delimiter: "^",
            event: "change",
            correct: function() { alert("Correct!"); },
            wrong: function() { alert("Wrong!"); }
        }, options);

        // Remove previous event listeners
        $(document).off(settings.event, ".question");

        // Escape the delimiter to use it in a regular expression
        const delimiter = settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`${delimiter}(.*?)${delimiter}`, "g");

        // Execute the process for each element
        this.each(function() {
            let $el = $(this);
            let tmpSpan = $el.html().replace(regex, "<span class='tmpSpan'>$1</span>");
            $el.html(tmpSpan);

            $el.find(".tmpSpan").each(function() {
                let $span = $(this);
                $span.css({
                    "display": "inline-block"
                });

                let tmpContent = $span.text();
                let spanWidth = $span[0].getBoundingClientRect().width;
                let newInput = $("<input>");
                newInput.css("width", spanWidth);
                newInput.attr("data-answer", tmpContent);
                newInput.addClass("question");
                $span.replaceWith(newInput);
            });
        });

        // Set up the correct/wrong handling with events
        $(document).on(settings.event, ".question", function() {
            let result = $(this).attr("data-answer") == $(this).val();
            if (result) {
                $(this).trigger("correctAnswer");
                settings.correct.call(this); // On correct answer
            } else {
                $(this).trigger("wrongAnswer");
                settings.wrong.call(this); // On wrong answer
            }
        });

        return this;
    };
})(jQuery);