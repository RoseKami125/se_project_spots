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

function openModal(modalElement){
  modalElement.classList.add("modal_is-opened");
}

function closeModal(modalElement){
  modalElement.classList.remove("modal_is-opened");
}

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescEl.textContent = editProfileDescInput.value;
  closeModal(editProfileModal);
}

function handleAddCardSubmit(evt){
  evt.preventDefault();
  console.log(newPostDescInput.value);
  console.log(newPostLinkInput.value);
  closeModal(newPostModal);
}

editProfileBtn.addEventListener("click", function() {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescInput.value = profileDescEl.textContent;
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

newPostForm.addEventListener("submit", handleAddCardSubmit);