var subject = 'ok, i will do it';

document.write("Subject: " + subject + "<br>")
var pattern = /\b(ok(ay)?|sure|y(es)?)\b/i
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")

var subject = "okie dokie"
document.write("Subject: " + subject + "<br>")
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")

var subject = "Ahooy, Okay!!!"
document.write("Subject: " + subject + "<br>")
document.write("Pattern: " + pattern + "<br>")
var patt = new RegExp(pattern);
document.write("Matched: " + patt.test(subject))

document.write("<br><br><hr color='orange'><br>")

var subject = "why sure, i can go"
document.write("Subject: " + subject + "<br>")
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")

var subject = "ensure code is good"
document.write("Subject: " + subject + "<br>")
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")

var subject = "arr, yes matey"
document.write("Subject: " + subject + "<br>")
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")

var subject = "y"
document.write("Subject: " + subject + "<br>")
document.write("Pattern: " + pattern + "<br>")
document.write("Matched: " + subject.match(pattern))

document.write("<br><br><hr color='orange'><br>")