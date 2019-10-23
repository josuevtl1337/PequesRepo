// window.onload = function() {
$(document).ready(function() {
  const onda = document.getElementById("onda");
  const leche = document.getElementById("caja");
  var omega = $(".omega");
  var chzc = $(".chzc");
  var vitaminas = $(".vitaminas");
  var dha = $(".dha");
  // const textos = document.getElementById("textoContenedor");
  const textos = document.querySelectorAll("#miniatura, #textoContenedor");
  const miniatura = document.getElementById("miniatura");
  // const flecha = document.getElementById("flechaContenedor");
  // const svg = document.getElementById("flecha").getSVGDocument();
  const tl = new TimelineMax({ delay: 0.5 });
  // tl.fromTo(onda, 0.2, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
  // tl.fromTo(leche, 0.5, { x: "100", opacity: 0 }, { x: "0", opacity: 1 });
  // tl.fromTo(textos, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
  // tl.fromTo(logo, 0.5, { y: "-200", opacity: 0 }, { y: "0", opacity: 1 });
  // tl.fromTo(miniatura, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 });
  tl.fromTo(onda, 0.3, { y: "200", opacity: 0 }, { y: "0", opacity: 1 })
    .fromTo(leche, 0.3, { x: "200", opacity: 0 }, { x: "0", opacity: 1 })
    .fromTo(textos, 0.5, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 })
    // .fromTo(miniatura, 0.2, { x: "-100", opacity: 0 }, { x: "0", opacity: 1 })
    .fromTo(logo, 0.9, { y: "-200", opacity: 0 }, { y: "0", opacity: 1 });

  new fullpage("#fullpage", {
    controlArrows: true,
    autoScrolling: true,
    navigation: true,
    scrollHorizontally: true,
    onLeave: (origin, destination) => {
      const tl = new TimelineMax({ delay: 0.5 });
      const tl1 = new TimelineMax({ delay: 0.7 });
      const section = destination.item;
      const title = section.querySelector("p");
      const video = document.getElementById("videoleche");
      const logo = document.getElementById("logo");
      var foto = $("#mejorcont");
      var parrafos1 = $("#text1, #text2");
      var parrafos2 = $("#text3, #text4");
      var globos = $("#globos1");
      var pattern = $(".descripz");
      var info = $(".cntinfo");
      var cajaLeche = $(".cntcaja");

      if (destination.index === 0) {
        // const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(leche, 0.3, { x: "200", opacity: 0 }, { x: "0", opacity: 1 })
          .fromTo(
            textos,
            0.5,
            { x: "-100", opacity: 0 },
            { x: "0", opacity: 1 }
          )
          .fromTo(logo, 0.9, { y: "-200", opacity: 0 }, { y: "0", opacity: 1 });

        // console.log(destination.item);

        video.currentTime = 0;
        video.play();
      } else if (destination.index === 1) {
        tl.fromTo(
          parrafos1,
          0.3,
          { x: "-200", opacity: 0 },
          { x: "0", opacity: 1 }
        )
          .fromTo(parrafos2, 0.3, { x: 200, opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo(foto, 0.7, { y: -20, opacity: 0 }, { y: 0, opacity: 1 })
          .fromTo(globos, 0.8, { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo(pattern, 0.8, { opacity: 0 }, { opacity: 1 });
      } else if (destination.index === 2) {
        tl.fromTo(cajaLeche, 0.5, { x: 400, opacity: 0 }, { x: 0, opacity: 1 });
        tl.fromTo(info, 0.5, { x: -400, opacity: 0 }, { x: 0, opacity: 1 });
        tl.fromTo(omega, 0.3, { y: "200", opacity: 0 }, { y: "0", opacity: 1 });
        tl.fromTo(chzc, 0.4, { y: "200", opacity: 0 }, { y: "0", opacity: 1 });
        tl.fromTo(
          vitaminas,
          0.4,
          { y: "200", opacity: 0 },
          { y: "0", opacity: 1 }
        );
        tl.fromTo(dha, 0.4, { y: "200", opacity: 0 }, { y: "0", opacity: 1 });
        // setTimeout("animandoIconos()", 5000);
        var procesoId = window.setInterval(animandoIconos, "8000");
      } else {
        tl.fromTo(section, 0.5, { y: 0, opacity: 0 }, { y: 0, opacity: 1 });
        console.log(destination.item);
      }
    }
  });

  // var flechaa = document.querySelector("svg");
  // console.log(flechaz);
  // const svg = document.getElementById("flecha").getSVGDocument();
  // console.log(svg);

  // console.log(svg);
  var flecha = cargarFlecha();
  function cargarFlecha() {
    if (flecha !== "undefined") {
      var flecha = document.getElementById("flecha");
      console.log(flecha);
      // cargarFlecha();
    } else {
      alert("funciona");
    }
  }
  $(flecha).click(function() {
    // destination.index = 1;
    alert("funciona");
  });
  function animandoIconos() {
    var random = Math.floor(Math.random() * 4 + 1);
    console.log(random);

    if (random === 1) {
      omega.css({
        animation: "bounce 1s"
      });
    } else if (random === 2) {
      chzc.css({
        animation: "bounce 1s"
      });
    } else if (random === 3) {
      vitaminas.css({
        animation: "bounce 1s"
      });
    } else if (random === 4) {
      dha.css({
        animation: "bounce 1s"
      });
    }
  }
});
