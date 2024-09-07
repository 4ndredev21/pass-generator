let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ1234567890";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
  sizePassword.innerHTML = this.value;
};

function generatePassword() {
  let pass = "";
  for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  novaSenha = pass;
  containerPassword.classList.remove("hide");
  password.textContent = pass; // Usando textContent em vez de innerHTML
}

function copyPassword() {
  if (novaSenha) {
    navigator.clipboard.writeText(novaSenha).then(() => {
      alert("Senha copiada!");
    }).catch(err => {
      alert("Falha ao copiar a senha!");
      console.error(err);
    });
  } else {
    alert("Nenhuma senha gerada para copiar.");
  }
}
