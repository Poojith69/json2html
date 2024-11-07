export default function json2html(data) {
    // Start with the table definition and add the data-user attribute as required
    let html = '<table data-user="poojithareddymaligireddy@gmail.com"><thead>';
    html += '<tr><th>Name</th><th>Age</th><th>Gender</th></tr></thead><tbody>';

    // Iterate through each object in the array to create table rows
    data.forEach(item => {
        html += <tr><td>${item.Name}</td><td>${item.Age}</td><td>${item.Gender}</td></tr>;
    });

    // Close the table tag
    html += '</tbody></table>';

    // Return the resulting HTML string
    return html;
}