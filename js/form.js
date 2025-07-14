function handleFormSubmit(event) {
  event.preventDefault();
  console.log("Отправка!");
}

const applicantForm = document.getElementById("mars-once");
applicantForm.addEventListener("submit", handleFormSubmit);
