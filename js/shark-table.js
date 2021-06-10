"use strict";

/*=====================================================

   Shark Taxonomy TABLE
   Based on Tutorial 10 From New Perspectives Textbook
   Author: Kevin Kelly
   Date:   06/09/2021

======================================================*/



// Write the HTML for the sharkList table
var tableHTML = "<table class='content-table' id='sharkTable'>";
tableHTML += "<thead><tr><th>Common Name</th><th>Class</th><th>Order</th><th>Family</th><th>Genus</th><th>Species</th><th>Author</th><th>Alias</th></tr></thead><tbody>";


// Loop through the shark arrays and build each row
for (let i = 0; i < commonName.length; i++)
{
    tableHTML += "<tr>";
    tableHTML += "<td><a href='" + learnMore[i] +"'>" + commonName[i] + "</a></td>";
    tableHTML += "<td>" + classs[i] + "</td>"; // "class" spelled incorrectly due to reserved keyword status
    tableHTML += "<td>" + order[i] + "</td>";
    tableHTML += "<td>" + family[i] + "</td>";
    tableHTML += "<td>" + genus[i] + "</td>";
    tableHTML += "<td>" + species[i] + "</td>";
    tableHTML += "<td>" + author[i] + "</td>";
    tableHTML += "<td>" + alias[i] + "</td>";
    tableHTML += "</tr>";
}

tableHTML += "</tbody></table>";

// Write everything from the above FOR LOOP into the HTML sharkList div
document.getElementById("sharkList").innerHTML = tableHTML;
