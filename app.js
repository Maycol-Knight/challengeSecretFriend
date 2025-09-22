// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];
let friendName = document.getElementById("amigo");
let friendsList = document.getElementById("listaAmigos");
let resultList = document.getElementById("resultado");

// Escuchar la tecla Enter en el input
friendName.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addFriends();
  }
});

function addFriends() {
  if (friendName.value !== "" && isNaN(friendName.value)) {
    renderFriends();
  } else {
    alert("Por favor ingresa un nombre");
    friendName.value = "";
  }
}

function renderFriends() {
  friendsList.innerHTML = "";
  friends.push(friendName.value);
  for (let i = 0; i < friends.length; i++) {
    friendsList.innerHTML = friendsList.innerHTML + `<li>${friends[i]}</li>`;
  }
  friendName.value = "";
}

function randomFriend() {
  friendsList.style.cssText = `display: none;`;
  let randomIndex = Math.floor(Math.random() * friends.length);
  resultList.innerHTML =
    resultList.innerHTML + `<li>${friends[randomIndex]}</li>`;
}
