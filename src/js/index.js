window.onload = () => {

  showOffOnInputCartNumber();

  const fakeInputsRadioList = document.querySelectorAll(".fake-radio-button");
  const inputsRadioList = document.querySelectorAll("input[type='radio']");

  fakeInputsRadioList.forEach((input) =>
    input.addEventListener("click", ({ target }) => {
      const currentInput = target.parentNode.querySelector("input");
      if (currentInput) {
        currentInput.click();
      }
    })
  );

  inputsRadioList.forEach((input) =>
    input.addEventListener("click", ({ target }) => {
      const currentFakeInput = target.parentNode.querySelector("div");
      if (currentFakeInput) {
        fakeInputsRadioList.forEach((input) =>
          input.classList.remove("active")
        );
        showOffOnInputCartNumber();
      }
    })
  );

  function showOffOnInputCartNumber() {
    const checkedInputRadio = document.querySelector(
      'input[type="radio"]:checked'
    );

    const inputCartNumber = document.getElementById("cart-number");
    inputCartNumber.style.display = checkedInputRadio.value != 1 ? "block" : "none";

    const checkedFakeInputRadio = checkedInputRadio
      ? checkedInputRadio.parentNode.querySelector("div")
      : null;

    if (checkedFakeInputRadio) {
      checkedFakeInputRadio.classList.add("active");
    }
  }
};
