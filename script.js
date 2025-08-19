const dataCasamento = new Date("Dec 29, 2015 16:00:00").getTime();


setInterval(() => {
  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;

  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("contador").innerHTML =
    dias + " dias " + horas + "h " + minutos + "m restantes";
}, 1000);
