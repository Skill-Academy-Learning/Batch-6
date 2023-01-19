function submit() {
  const userNameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");

  if (userNameInput.value === "") {
    alert("Please enter username!");

    return;
  }

  if (passwordInput.value === "") {
    alert("Please enter password!");

    return;
  }

  console.log({
    username: userNameInput.value,
    password: passwordInput.value,
  });
}
