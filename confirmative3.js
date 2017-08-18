var subject = 'The rougher the seas, the smthr we sail.';

document.write("Subject: " + subject + "<br>")
var pattern = /\b[^aeiouy\s]+\b/i
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")
