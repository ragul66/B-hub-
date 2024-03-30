import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const CardPages = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections;
    let page;
    let main;
    let scrollTrigger;
    let tl;
    let win;

    // Init
    const init = () => {
      sections = document.querySelectorAll("section");
      page = document.querySelector("#page");
      main = document.querySelector("main");
      win = {
        w: window.innerWidth,
        h: window.innerHeight,
      };

      setupTimeline();
      setupScrollTrigger();
      window.addEventListener("resize", onResize);
    };

    // Setup ScrollTrigger
    const setupScrollTrigger = () => {
      page.style.height = getTotalScroll() + win.h + "px";

      scrollTrigger = ScrollTrigger.create({
        id: "mainScroll",
        trigger: "main",
        animation: tl,
        pin: true,
        scrub: true,
        snap: {
          snapTo: (value) => {
            let labels = Object.values(tl.labels);

            const snapPoints = labels.map((x) => x / tl.totalDuration());
            const proximity = 0.1;

            for (let i = 0; i < snapPoints.length; i++) {
              if (
                value > snapPoints[i] - proximity &&
                value < snapPoints[i] + proximity
              ) {
                return snapPoints[i];
              }
            }
          },
          duration: { min: 0.2, max: 0.6 },
        },
        start: "top top",
        end: "+=" + getTotalScroll(),
      });
    };

    // Setup timeline
    const setupTimeline = () => {
      tl = gsap.timeline();
      tl.addLabel("label-initial");

      sections.forEach((section, index) => {
        const nextSection = sections[index + 1];
        if (!nextSection) return;

        tl.to(nextSection, {
          y: -1 * nextSection.offsetHeight,
          duration: nextSection.offsetHeight,
          ease: "linear",
        }).addLabel(`label${index}`);
      });
    };

    // On resize
    const onResize = () => {
      win = {
        w: window.innerWidth,
        h: window.innerHeight,
      };

      reset();
    };

    // Reset
    const reset = () => {
      if (typeof ScrollTrigger.getById("mainScroll") === "object") {
        ScrollTrigger.getById("mainScroll").kill();
      }

      if (typeof tl === "object") {
        tl.kill();
        tl.seek(0);
      }

      document.body.scrollTop = document.documentElement.scrollTop = 0;
      init();
    };

    // Get total scroll
    const getTotalScroll = () => {
      let totalScroll = 0;
      sections.forEach((section) => {
        totalScroll += section.offsetHeight;
      });
      totalScroll -= win.h;
      return totalScroll;
    };

    init();

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div id="page" className="h-screen overflow-hidden">
      <main className="relative h-full overflow-hidden">
        <section className="gradient-green h-screen flex justify-center items-center">
          <h2 className="text-white text-6xl">1</h2>
        </section>
        <section className="gradient-purple h-screen flex justify-center items-center">
          <h2 className="text-white text-6xl">2</h2>
        </section>
      </main>
    </div>
  );
};

export default CardPages;
