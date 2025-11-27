const initialCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
   {
    name: "Reataurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },
   {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },
   {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },
   {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },
   {
    name: "Mountain House",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

const editProfileBtn = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editCloseBtn = editProfileModal.querySelector(".modal__close-button");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector("#profile-name-input");
const editProfileDescInput = editProfileModal.querySelector("#profile-desc-input");

const newPostBtn = document.querySelector(".profile__post-button");
const newPostModal = document.querySelector("#new-post-modal");
const newCloseBtn = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostDescInput = newPostModal.querySelector("#card-caption-input");
const newPostLinkInput = newPostModal.querySelector("#card-image-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescEl = document.querySelector(".profile__description");

const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

const previewModal = document.querySelector("#preview-modal");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-button");
const previewImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__caption");

function escapeModal(event){
   document.addEventListener("keydown", (event) => {
    if (event.key === `Escape`){
      modalElement.classList.remove("modal_is-opened");
    }
   });
  }

function openModal(modalElement){
  modalElement.classList.add("modal_is-opened");
}

function closeModal(modalElement){
  modalElement.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", escapeModal)
}

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescEl.textContent = editProfileDescInput.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt){
  evt.preventDefault();
  const cardEl = getCardElement({
    name: newPostDescInput.value,
    link: newPostLinkInput.value,
  });
  cardsList.prepend(cardEl);
  evt.target.reset();
  disableButton(newPostBtn);
  closeModal(newPostModal);
  newPostForm.reset();
}

function getCardElement(data){
  const cardElement = cardTemplate.cloneNode(true);
  const cardTitleEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");

  cardTitleEl.textContent = data.name;
  cardImageEl.src = data.link;
  cardImageEl.alt = data.name;

  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_clicked");
  });

  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
  cardDeleteBtn.addEventListener("click", () => {
    cardElement.remove();
  });

  cardImageEl.addEventListener("click", () => {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
  });

  return cardElement;
}

editProfileBtn.addEventListener("click", function() {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescInput.value = profileDescEl.textContent;
  resetValidation(editProfileForm, [editProfileNameInput,editProfileDescInput ]);
  openModal(editProfileModal);
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

editCloseBtn.addEventListener("click", function() {
closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function() {
openModal(newPostModal);
});

newCloseBtn.addEventListener("click", function() {
closeModal(newPostModal);
});

previewModalCloseBtn.addEventListener("click", () => {
closeModal(previewModal);
});

newPostForm.addEventListener("submit", handleAddCardSubmit);

initialCards.forEach(function (item) {
  const cardEl = getCardElement(item);
  cardsList.append(cardEl);
});