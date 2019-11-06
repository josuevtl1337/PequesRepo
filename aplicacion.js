// window.onload = function() {
$(document).ready(function() {
  const onda = document.getElementById("onda");
  const leche = document.getElementById("caja");
  // const textos = document.getElementById("textoContenedor");
  const textos = document.querySelectorAll(".miniatura, #textoContenedor");
  const miniatura = $(".miniatura");
  const vid = document.getElementById("videoNena");
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
      const tl1 = new TimelineMax({ delay: 0.5 });
      const tl3 = new TimelineMax({ delay: 0.5 });
      const section = destination.item;
      const title = section.querySelector("p");
      const video = document.getElementById("videoleche");
      const logo = document.getElementById("logo");
      var foto = $("#mejorcont");
      var parrafos1 = $("#accordion");
      var parrafos2 = $("#accordion2");
      var globos = $("#globos1");
      var pattern = $(".descripz");
      var info = $(".cntinfo");
      var cajaLeche = $(".cntcaja");
      const p1 = $("#parrafo1", "#parrafo2");
      const avion = $(".avion");
      const nubes = $("#nube1 , #nube2, #nube3,#nube4,#nube5");

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
          0.6,
          { x: "-200", opacity: 0 },
          { x: "0", opacity: 1 }
        );
        tl1.fromTo(
          parrafos2,
          0.6,
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1 }
        );
        tl3.fromTo(foto, 0.8, { y: -100, opacity: 0 }, { y: 0, opacity: 1 });
        tl3
          .fromTo(globos, 0.8, { x: -200, opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo(pattern, 0.8, { opacity: 0 }, { opacity: 1 })
          .fromTo(p1, 0.8, { opacity: 0 }, { opacity: 1 });
      } else if (destination.index === 2) {
        $(avion).animate(
          {
            opacity: 0
          },
          3500
        );
        var lechecomun = $(".cntlecheComun");
        tl.fromTo(cajaLeche, 0.8, { x: 400, opacity: 0 }, { x: 0, opacity: 1 });
        tl1
          .fromTo(
            lechecomun,
            0.8,
            { x: -400, opacity: 0 },
            { x: 0, opacity: 1 }
          )
          .fromTo(info, 1, { opacity: 0 }, { opacity: 1 });
        var pilotoSolo = $(".rayo");
        var piloto = $(".rayo , .cnticonos");
        // var bandera = $(".bandera");
        tl.fromTo(piloto, 1, { x: 400, opacity: 0 }, { x: 0, opacity: 1 })
          .fromTo(nubes, 1, { opacity: 0 }, { opacity: 1 })
          .fromTo(avion, 2, { x: -400, opacity: 0 }, { x: 0, opacity: 1 });
        const tl4 = new TimelineMax({ delay: 6 });
        tl4.fromTo(avion, 2, { x: 0, opacity: 1 }, { x: 400, opacity: 0 });
        // .fromTo(pilotoSolo, 1, { x: 0, opacity: 1 }, { x: -400, opacity: 0 });
        // .fromTo(bandera, 1, { x: -100, opacity: 0 }, { x: 0, opacity: 0.4 });
        // setTimeout("animandoIconos()", 5000);
        // var procesoId = window.setInterval(animandoIconos, "8000");

        //Animaciones del avion
        // const fligthPath = {
        //   curviness: 1.25,
        //   autoRotate: true,
        //   values: [{ x: -400, y: 0 }, { x: 0, y: 0 }]
        // };
        // const tween = new TimelineLite();
        // tween.add(
        //   TweenLite.to(".avion", 1, {
        //     bezier: fligthPath,
        //     ease: Power1.easeInOut
        //   })
        // );
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
  var play = $("#playbtn");
  $(miniatura).hover(function() {
    play.animate();
  });

  $(miniatura).on("click", function(e) {
    console.log(vid);
    e.preventDefault();
    vid.requestFullscreen();
  });
  // function animandoIconos() {
  //   var random = Math.floor(Math.random() * 4 + 1);
  //   console.log(random);

  //   if (random === 1) {
  //     omega.css({
  //       animation: "bounce 1s"
  //     });
  //   } else if (random === 2) {
  //     chzc.css({
  //       animation: "bounce 1s"
  //     });
  //   } else if (random === 3) {
  //     vitaminas.css({
  //       animation: "bounce 1s"
  //     });
  //   } else if (random === 4) {
  //     dha.css({
  //       animation: "bounce 1s"
  //     });
  //   }
  // }

  // window.onload = function() {
  //   // morphing.play();
  //   var btn = document.getElementById("btn-click");
  //   var welcome = document.getElementById("welcome");
  //   btn.classList.add("animated", "display", "flipInY");
  //   welcome.classList.add("animated", "display", "flipInY");
  //   btn.addEventListener("click", function() {
  //     $(".contenedor-welcome").hide();
  //     morphing.play();
  //   });
  //   // btn.css("display", "none");
  // };
  // document.addEventListener("DOMContentLoaded", function() {
  //   var btn = document.getElementById("btn-click");
  //   var welcome = document.getElementById("welcome");
  //   btn.classList.add("animated", "display", "flipInY");
  //   welcome.classList.add("animated", "display", "flipInY");
  //   btn.addEventListener("click", function() {
  //     $(".contenedor-welcome").hide();
  //     morphing.play();
  //   });
  // });
  /* Animaciones de los parrafos en la descripcion*/
  $(function() {
    $("#accordion").accordion({
      collapsible: true,
      active: false
    });
  });
  $(function() {
    $("#accordion2").accordion({
      collapsible: true,
      active: false
    });
  });

  /*    Animacion de la INFO COMPLETA     */
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("infonutric");
  var btntrigger = document.getElementById("btninfo");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  btntrigger.onclick = function() {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  };

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
});
