const buttonDeleteStoryCard = document.querySelector(
  ".personal-story__button-delete"
);
const popupDeleteStoryCard = document.querySelector(".popup-delete-story-card");
const buttonCancelDeleteStoryCard = document.querySelector(
  ".popup-delete-story-card__button-cancel"
);
const buttonChangeCityHeader = document.querySelector(".header__change-city");
const popupChangeCity = document.querySelector(".popup-city");
const buttonExitAccount = document.querySelector(".header__exit-account");

const storyFormMarkText = document.querySelector(".story-form__text");
const buttonFormMarkGreat = document.querySelector(
  ".story-form__mark_type_great"
);
const buttonFormMarkNormal = document.querySelector(
  ".story-form__mark_type_normal"
);
const buttonFormMarkBad = document.querySelector(".story-form__mark_type_bad");

buttonDeleteStoryCard.addEventListener("click", () => {
  popupDeleteStoryCard.classList.add("visible-block");
});
buttonCancelDeleteStoryCard.addEventListener("click", () => {
  popupDeleteStoryCard.classList.remove("visible-block");
});
buttonChangeCityHeader.addEventListener("click", () => {
  popupChangeCity.classList.add("visible-block");
});
buttonExitAccount.addEventListener("click", () => {
  window.location.href = "./index.html";
});

// просто, примитивно. Для демонстрации..

buttonFormMarkGreat.addEventListener("click", () => {
  buttonFormMarkGreat.classList.toggle("story-form__mark_type_great-active");
  if (
    buttonFormMarkGreat.classList.contains("story-form__mark_type_great-active")
  ) {
    storyFormMarkText.textContent = "Было классно!";
    storyFormMarkText.classList.remove("story-form__text_type_normal");
    storyFormMarkText.classList.remove("story-form__text_type_bad");
    storyFormMarkText.classList.add("story-form__text_type_great");
    buttonFormMarkNormal.classList.remove(
      "story-form__mark_type_normal-active"
    );
    buttonFormMarkBad.classList.remove("story-form__mark_type_bad-active");
  } else {
    storyFormMarkText.textContent = "Оцените проведенное время";
    storyFormMarkText.classList.remove("story-form__text_type_great");
  }
});
buttonFormMarkNormal.addEventListener("click", () => {
  buttonFormMarkNormal.classList.toggle("story-form__mark_type_normal-active");
  if (
    buttonFormMarkNormal.classList.contains(
      "story-form__mark_type_normal-active"
    )
  ) {
    storyFormMarkText.textContent = "Нормально";
    storyFormMarkText.classList.remove("story-form__text_type_great");
    storyFormMarkText.classList.remove("story-form__text_type_bad");
    storyFormMarkText.classList.add("story-form__text_type_normal");
    buttonFormMarkGreat.classList.remove("story-form__mark_type_great-active");
    buttonFormMarkBad.classList.remove("story-form__mark_type_bad-active");
  } else {
    storyFormMarkText.textContent = "Оцените проведенное время";
    storyFormMarkText.classList.remove("story-form__text_type_normal");
  }
});
buttonFormMarkBad.addEventListener("click", () => {
  buttonFormMarkBad.classList.toggle("story-form__mark_type_bad-active");
  if (
    buttonFormMarkBad.classList.contains("story-form__mark_type_bad-active")
  ) {
    storyFormMarkText.textContent = "Что-пошло не так";
    storyFormMarkText.classList.remove("story-form__text_type_great");
    storyFormMarkText.classList.remove("story-form__text_type_normal");
    storyFormMarkText.classList.add("story-form__text_type_bad");
    buttonFormMarkNormal.classList.remove(
      "story-form__mark_type_normal-active"
    );
    buttonFormMarkGreat.classList.remove("story-form__mark_type_great-active");
  } else {
    storyFormMarkText.textContent = "Оцените проведенное время";
    storyFormMarkText.classList.remove("story-form__text_type_bad");
  }
});
