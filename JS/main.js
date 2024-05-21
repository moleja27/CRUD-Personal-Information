//vamos a conectar lo que el placeholder nos de y buscar los valores.
function ValidateForm() {
    let email = document.getElementById('InputEmail').value
    let name = document.getElementById('InputName').value
    let phone = document.getElementById('InputNumber').value

    if (email === "") {
        alert("the field is required");
        return false;
    } else if (!email.includes(`@`)) {
        alert("the email is not valid");
        return false;
    }

    if (name === "") {
        alert("the field is required");
        return false;
    }

    if (phone === "") {
        alert("the field is required");
        return false;
    }

    return true;
}

// tenemos un stamente donde dice si el correo es igual a vacio nos retornara false y nos enviara un alert que dice "the field is required" y seguira hasta el else donde dice si el correo no incluye una arroba entonces nos retornara fals0 y mostrara un alert donde dice que el "the email is not valid". y sucedera lo mismo con los demas if

function ReadData() {
    let listPeople;

    if (localStorage.getItem('listPeople') === null) {
        listPeople = [];
    } else {
        listPeople = JSON.parse(localStorage.getItem(listPeople))
    }

    let html = "";
    listPeople.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.email + "</td>";
        html += "<td>" + element.name + "</td>";
        html += "<td>" + element.phone + "</td>";
        html += '<td><button onclick="deleteData(' + index + ')" class= "btn btn-danger"> Delete data </button><button onclick="editData(' + index + ')" class= "btn btn-warning"> Editar data </button>';
        html += "</tr>";
    });

    document.querySelector('#tableData').innerHTML = html;;

}

document.onload = ReadData();

function addData() {
    if (ValidateForm === true) {
        let email = document.getElementById('InputEmail').value
        let name = document.getElementById('InputName').value
        let phone = document.getElementById('InputNumber').value

        var listPeople;

        if (localStorage.getItem('listpeople' == null)) {
            listPeople = [];
        } else {
            listPeople = JSON.parse(localStorage.getItem(listPeople))
        }

        listPeople.push({
            email: email,
            name: name,
            phone: phone
        });

        localStorage.setItem('listPeople', JSON.stringify());

        ReadData();
        document.getElementById('InputEmail').value = "";
        document.getElementById('InputName').value = "";
        document.getElementById('InputNumber').value = "";
    }
}






