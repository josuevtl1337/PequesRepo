// window.onload = function() {
$(document).ready(function() {
  const onda = document.getElementById("onda");
  const leche = document.getElementById("caja");
  // const textos = document.getElementById("textoContenedor");
  const textos = document.querySelectorAll("#miniatura, #textoContenedor");
  const miniatura = document.getElementById("miniatura");
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
    .fromTo(logo, 0.6, { y: "-200", opacity: 0 }, { y: "0", opacity: 1 });

  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination) => {
      const tl = new TimelineMax({ delay: 0.5 });
      const section = destination.item;
      const title = section.querySelector("h1");
      const video = document.getElementById("videoleche");
      const logo = document.getElementById("logo");
      const textos = document.getElementById("textoContenedor");

      if (destination.index === 0) {
        // const tl = new TimelineMax({ delay: 0.5 });
        tl.fromTo(onda, 0.3, { y: "200", opacity: 0 }, { y: "0", opacity: 1 })
          .fromTo(leche, 0.3, { x: "200", opacity: 0 }, { x: "0", opacity: 1 })
          .fromTo(
            textos,
            0.5,
            { x: "-100", opacity: 0 },
            { x: "0", opacity: 1 }
          )
          .fromTo(
            miniatura,
            0.2,
            { x: "-100", opacity: 0 },
            { x: "0", opacity: 1 }
          )
          .fromTo(logo, 0.6, { y: "-200", opacity: 0 }, { y: "0", opacity: 1 });

        // console.log(destination.item);

        video.currentTime = 0;
        video.play();
      } else {
        tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        console.log(destination.item);
      }
    }
  });
});
