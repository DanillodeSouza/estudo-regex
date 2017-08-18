var subject = 'Work like a captain, play like a pirate.';

document.write("Subject: " + subject + "<br>")
var pattern = /^\D{20,40}$/i
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")