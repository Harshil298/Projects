function saveData(event) {
  event.preventDefault();
  let name = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let user_record = JSON.parse(localStorage.getItem("users")) || [];

  user_record.push({
    name: name,
    email: email,
    password: password,
  });

  localStorage.setItem("users", JSON.stringify(user_record));
}
