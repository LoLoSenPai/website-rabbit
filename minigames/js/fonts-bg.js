function afficherContenuMobile() {
  let url = "../html/fonts-bg.html";
  let request = new XMLHttpRequest();
  request.onreadystatechange = afficher;
  request.open("GET", url);
  request.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  request.send(null);

  function afficher() {
    if (request.readyState == 4) {
      let emplacement = document.getElementById("contenuMobile");
      let texte = request.responseText;

      emplacement.innerHTML = texte;
    }
  }
}
