//vamos a conectar lo que el placeholder nos de y buscar los valores.
function ValidateForm() {
    let email = document.getElementById(`InputEmail`).value
    let name = document.getElementById(`InputName`).value
    let phone = document.getElementById(`InputNumber`).value

    if (email === "") {
        alert("the field is required");
        return false;
    } else if (!email.includes(`@`)) {
        alert("the email is not valid");
        return false;
    }

    if (email === "") {
        alert("the field is required");
        return false;
    }

    if (email === "") {
        alert("the field is required");
        return false;
    }
}

// tenemos un stamente donde dice si el correo es igual a vacio nos retornara false y nos enviara un alert que dice "the field is required" y seguira hasta el else donde dice si el correo no incluye una arroba entonces nos retornara fals0 y mostrara un alert donde dice que el "the email is not valid".


