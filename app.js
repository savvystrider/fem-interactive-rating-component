const submitBtn = document.querySelector(".submit-btn");

const formContainer = document.querySelector(".form-container");
const successContainer = document.querySelector(".success-container");
const textOutput = document.getElementById("text-output");

const radioBtns = document.querySelectorAll(".radio-input");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let selectedValue = "";
  radioBtns.forEach((btn) => {
    if (btn.checked) {
      selectedValue = btn.value;
    }
  });

  if (selectedValue !== "") {
    formContainer.classList.add("inactive");
    successContainer.classList.add("active");
  } else {
    alert("Please select a rating to continue");
  }

  textOutput.textContent = `You selected ${selectedValue} out of 5`;
});
