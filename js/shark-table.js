"use strict";

/*=====================================================

   Shark Taxonomy TABLE
   Based on Tutorial 10 From New Perspectives Textbook
   Author: Kevin Kelly
   Date:   06/09/2021

======================================================*/



// Write the HTML for the sharkList table
var tableHTML = "<table id='sharkTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Common Name</th><th>Class</th><th>Order</th><th>Family</th><th>Genus</th><th>Species</th><th>Author</th><th>Alias</th><th>Learn More</th></tr>";


// Loop through the shark arrays and build each row
for (let i = 0; i < commonName.length; i++)
{
    tableHTML += "<tr>";
    tableHTML += "<td>" + commonName[i] + "</td>";
    tableHTML += "<td>" + classs[i] + "</td>"; // class spelled incorrectly here because it's a reserved keyword
    tableHTML += "<td>" + order[i] + "</td>";
    tableHTML += "<td>" + familiy[i] + "</td>";
    tableHTML += "<td>" + genus[i] + "</td>";
    tableHTML += "<td>" + species[i] + "</td>";
    tableHTML += "<td>" + author[i] + "</td>";
    tableHTML += "<td>" + alias[i] + "</td>";
    tableHTML += "<td>" + "<a href='" + learnmore[i] +"'>" + learnmore[i] + "</td>";
    tableHTML += "</tr>";
}

tableHTML += "</table>";

// Write everything from the above FOR LOOP into the HTML sharkList div
document.getElementById("sharkList").innerHTML = tableHTML;
