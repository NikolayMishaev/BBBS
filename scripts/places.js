const popupAdviceForm = document.querySelector(".popup-advice");
const buttonAdviceForm = document.querySelector(".block-message__button");
const buttonFormSelect = document.querySelector(".popup__select");
const popupAdviceContainer = document.querySelector(
  ".popup__container_type_advice"
);

buttonAdviceForm.addEventListener("click", () => {
  openPopup(popupAdviceForm);
});

buttonFormSelect.addEventListener("click", () => {
  buttonFormSelect.classList.toggle("popup__select_type_active");
});

popupAdviceContainer.addEventListener("click", (e) => {
  e.target.classList.contains("popup__select")
    ? ""
    : buttonFormSelect.classList.remove("popup__select_type_active");
});
