//Im going to connect what the placeholder gives us and look for the values.
// ValidateForm function to validate form input fields
function ValidateForm() {
    let email = document.getElementById('InputEmail').value;
    let name = document.getElementById('InputName').value;
    let phone = document.getElementById('InputNumber').value;

    if (email === "") {
        alert("The email field is required");
        return false;
    } else if (!email.includes('@')) {
        alert("The email is not valid");
        return false;
    }

    if (name === "") {
        alert("The name field is required");
        return false;
    }

    if (phone === "") {
        alert("The phone field is required");
        return false;
    }

    return true;
}

// We have a state where it says if the email is equal to empty, it will return false and send us an alert that says "the field is required" and it will continue to the else where it says if the email does not include an at sign then it will return false  and show an alert where it says that "the email is not valid". and the same will happen with the others if

// ReadData function to read data from localStorage and display it in the table
function ReadData() {
    let listPeople;

    if (localStorage.getItem('listPeople') === null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem('listPeople'));
    }

    let html = "";
    listPeople.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class="btn btn-danger">Delete</button>';
        html += '<button onclick="editData(' + index + ')" class="btn btn-warning">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector('#tableData tbody').innerHTML = html;
}

//function ReadData() {This function is responsible for reading the data stored in localStorage and displaying it in a table in the HTML document. A variable is initialized and a condition is added that says if an element arrives at the localStorage with key, it is parsed from JSON to a JavaScript object using JSON.parse() and assigned to listPeople if it is not taken as an empty array.

//continuing to initialize another variable let html = ""; which will take the information and send it to an anonymous function that is passed as an argument to the forEach method. that will go through the information and add space and the index.



// Set window.onload to call ReadData when the page loads
window.onload = function () {
    ReadData();
};

// AddData function to add data to localStorage
function AddData() {
    if (ValidateForm()) {
        let email = document.getElementById('InputEmail').value;
        let name = document.getElementById('InputName').value;
        let phone = document.getElementById('InputNumber').value;

        let listPeople;

        if (localStorage.getItem('listPeople') === null) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem('listPeople'));
        }

        listPeople.push({
            email: email,
            name: name,
            phone: phone
        });

        localStorage.setItem('listPeople', JSON.stringify(listPeople));

        ReadData();

        document.getElementById('InputEmail').value = "";
        document.getElementById('InputName').value = "";
        document.getElementById('InputNumber').value = "";
    }
}

//This function is responsible for validating the data entered in a form, adding it to a list stored in localStorage, updating the data table displayed on the page, and finally clearing the form fields.

// deleteData function to remove data from localStorage
function deleteData(index) {
    let listPeople = JSON.parse(localStorage.getItem('listPeople'));
    listPeople.splice(index, 1);
    localStorage.setItem('listPeople', JSON.stringify(listPeople));
    ReadData();
}

// editData function to edit data in the form and remove the original entry
function editData(index) {
    let listPeople = JSON.parse(localStorage.getItem('listPeople'));
    let person = listPeople[index];
    document.getElementById('InputEmail').value = person.email;
    document.getElementById('InputName').value = person.name;
    document.getElementById('InputNumber').value = person.phone;
    deleteData(index);
}

//and finally we have an AddData() Function
//This function is responsible for handling the addition of data entered in a form to a list stored in localStorage, updating the display of the list in an HTML table, and cleaning up the form fields after the addition.






