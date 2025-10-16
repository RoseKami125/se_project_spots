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

function handleProfileFormSubmit(evt){
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescEl.textContent = editProfileDescInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}

function handleAddCardSubmit(evt){
  evt.preventDefault();
  console.log(newPostDescInput.value);
  console.log(newPostLinkInput.value);
newPostModal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function() {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescInput.value = profileDescEl.textContent;
  editProfileModal.classList.add("modal_is-opened");
});

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

editCloseBtn.addEventListener("click", function() {
  editProfileModal.classList.remove("modal_is-opened")
});


newPostBtn.addEventListener("click", function(){
  newPostModal.classList.add("modal_is-opened")
});

newCloseBtn.addEventListener("click", function(){
  newPostModal.classList.remove("modal_is-opened")
});

newPostForm.addEventListener("submit", handleAddCardSubmit);