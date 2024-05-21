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






