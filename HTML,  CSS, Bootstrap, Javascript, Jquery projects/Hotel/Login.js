function saveData(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user_record = JSON.parse(localStorage.getItem("users")) || [];

    if (user_record.some((e) => e.email === email && e.password === password)) {
        /* alert("Login Successful"); */
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 5000
          });
        window.location.href = "/admin.html";
    } else {
        /* alert("Login Fail"); */
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
}
