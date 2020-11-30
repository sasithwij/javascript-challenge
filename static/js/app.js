// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// display dataset as default

tableData.forEach((report) => {
    console.log(report);
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

// select the submit button
var submit = d3.select("#filter-btn");

//Click event of datetime filter
submit.on("click", function() {

// remove existing table
d3.select("tbody").html("");

// stop page from refreshing
d3.event.preventDefault();

// retrieve the value of the input element
var dateTime = d3.select("#datetime").property("value");
console.log(dateTime);

// Filter reports
var filteredData = tableData.filter(record => record.datetime === dateTime);
console.log(filteredData);

// display the table filtered on input date
filteredData.forEach((report) => {
    var row = tbody.append('tr');

    Object.entries(report).forEach(([key, value]) => {
        console.log(key, value);
        var cell = row.append('td');
        cell.text(value);
    });
});

});