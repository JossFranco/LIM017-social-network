// eslint-disable-next-line import/no-cycle
import {
  registerWithEmail,
  registerWithGoogle,
  sendEmail,
} from "../firebase/auth.js";

// eslint-disable-next-line import/no-cycle
import { onNavigate } from "../main.js";
import { fnLocalStorage } from "../firebase/funtions.js";

export const register = () => {
  const registerDiv = document.createElement("div");
  registerDiv.setAttribute("class", "divRegister");

  const logoImgRegister = document.createElement("IMG");
  logoImgRegister.setAttribute("src", "./Image/webLogo.png");
  logoImgRegister.setAttribute("class", "logoImg");

  const inputEmail = document.createElement("input");
  inputEmail.setAttribute("type", "email");
  inputEmail.setAttribute("placeholder", "E-mail");
  inputEmail.setAttribute("class", "inputStyle");
  inputEmail.setAttribute("id", "inputEmail");

  const inputPass = document.createElement("input");
  inputPass.setAttribute("type", "password");
  inputPass.setAttribute("id", "inputPass");
  inputPass.setAttribute("placeholder", "Contraseña");
  inputPass.setAttribute("class", "inputStyle");
  inputPass.setAttribute("min", "6");

  const inputPassword = document.createElement("input");
  inputPassword.setAttribute("type", "password");
  inputPassword.setAttribute("id", "inputPassword");
  inputPassword.setAttribute("placeholder", "Confirmar contraseña");
  inputPassword.setAttribute("class", "inputStyle");
  inputPassword.setAttribute("min", "6");

  const btnLogin = document.createElement("button");
  btnLogin.setAttribute("class", "btnStyleText");

  const btnRegisterUser = document.createElement("button");
  btnRegisterUser.setAttribute("class", "btnStyle");
  btnRegisterUser.setAttribute("id", "btnRegisterUser");

  const btnGoogleRegister = document.createElement("button");
  btnGoogleRegister.setAttribute("class", "btnGoogle");

  const imgRegister = document.createElement("IMG");
  imgRegister.setAttribute("src", "./Image/img2.svg");
  imgRegister.setAttribute("class", "imgRegister");

  const informationRegisterDiv = document.createElement("div");
  informationRegisterDiv.setAttribute("id", "informationRegister");
  informationRegisterDiv.setAttribute(
    "class",
    "information informationRegister"
  );

  const informationRegisterErr = document.createElement("div");
  informationRegisterErr.setAttribute("id", "informationRegisterErr");
  informationRegisterErr.setAttribute(
    "class",
    "information informationRegisterErr"
  );

  btnGoogleRegister.textContent = "Registrarme con Google";
  btnRegisterUser.textContent = "Registrarme";
  btnLogin.textContent = "¿Ya tienes una cuenta? Iniciar Sesión";

  btnLogin.addEventListener("click", () => onNavigate("/"));

  btnRegisterUser.addEventListener("click", () => {
    if (inputPass.value === inputPassword.value) {
      registerWithEmail(inputEmail.value, inputPass.value)
        .then((user) => {
          sendEmail();
          // const uid = user.uid;
          // console.log(uid);
          fnLocalStorage(inputEmail.value);
          onNavigate("/register");
          document.getElementById("informationRegister").style.display =
            "block";
          document.getElementById("informationRegister").textContent =
            "Confírmanos que la  dirección de correo electrónico agregada te pertenece. Hazlo a través del correo electrónico que te envíamos.";
        })
        .catch((error) => {
          const errorCode = error.code;
          // console.log(errorCode);
          const errorMessage = error.message;
          // console.log(errorMessage);
          if (errorCode === "auth/email-already-in-use") {
            document.getElementById("informationRegister").style.display =
              "block";
            document.getElementById("informationRegister").textContent =
              "El correo electrónico ya esta asociado a una cuenta.";
          }
          if (errorCode === "auth/invalid-email") {
            document.getElementById("informationRegister").style.display =
              "block";
            document.getElementById("informationRegister").textContent =
              "Ingrese los datos correctamente.";
          }
        });
    } else {
      document.getElementById("informationRegisterErr").style.display = "block";
      document.getElementById("informationRegisterErr").textContent =
        "Las contraseñas no coinciden.";
    }
  });

  btnGoogleRegister.addEventListener("click", () => {
    registerWithGoogle();
  });

  registerDiv.appendChild(logoImgRegister);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(inputPass);
  registerDiv.appendChild(inputPassword);
  registerDiv.appendChild(btnRegisterUser);
  registerDiv.appendChild(informationRegisterDiv);
  registerDiv.appendChild(informationRegisterErr);
  registerDiv.appendChild(btnGoogleRegister);
  registerDiv.appendChild(btnLogin);
  registerDiv.appendChild(imgRegister);

  return registerDiv;
};
