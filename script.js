function getFormvalue() {
    // Get the form element
    let form = document.getElementById("form1");

    // Retrieve values of first name and last name fields
    let firstName = form.elements["fname"].value;
    let lastName = form.elements["lname"].value;

    // Show an alert with the full name
    alert(firstName + " " + lastName);
}
