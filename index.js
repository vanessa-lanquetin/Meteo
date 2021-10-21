function actualisation(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=df2fe288c24ad27ca426caafdfb045f0&units=metric";
  console.log(url);

  let requete = new XMLHttpRequest();
  requete.open("GET", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        document.querySelector("#temperature_label").textContent =
          reponse.main.temp;
        document.querySelector("#ville").textContent = reponse.name;
      }
    }
  };
}

let button = document.querySelector("#changer");
button.addEventListener("click", () => {
  console.log("gfdyhd");
  let changerVille = prompt("Choisissez une ville :");
  actualisation(changerVille);
});
actualisation("Paris");
