var submitButton = document.querySelector('[type="submit"]');

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  //collect input
  const inputs = document.querySelectorAll(".form-control");

  //validate input
  let failed = false;
  const required = [0, 1, 6];
  required.forEach((i) => {
    if (!inputs[i].value) {
      inputs[i].style.borderColor = "red";
      failed = true;
    } else {
      inputs[i].style.borderColor = inputs[7].style.borderColor;
    }
  });

  const warningBox = document.getElementById("warning");
  if (failed) {
    warningBox.className = "alert alert-warning";
    warningBox.setAttribute("role", "alert");
    warningBox.innerHTML = "Please fill out the highlighted fields.";
  } else {
    warningBox.className = "";
    warningBox.innerHTML = "";

    let data = {};
    inputs.forEach((input) => {
      data[input.id] = input.value;
    });

    const response = await postData("/api/handleForm", data);
    console.log(response);
  }

  async function postData(url, data) {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  }
});
