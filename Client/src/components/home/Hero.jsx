import { useEffect, useRef } from "react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  // GSAP controls these wrappers only
  const copyScrollRef = useRef(null);
  const artScrollRef = useRef(null);
  const imageRef = useRef(null);
  const ringOneRef = useRef(null);
  const ringTwoRef = useRef(null);
  const auraRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const copyScroll = copyScrollRef.current;
    const artScroll = artScrollRef.current;
    const image = imageRef.current;
    const ringOne = ringOneRef.current;
    const ringTwo = ringTwoRef.current;
    const aura = auraRef.current;

    if (
      !hero ||
      !copyScroll ||
      !artScroll ||
      !image ||
      !ringOne ||
      !ringTwo ||
      !aura
    ) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set([copyScroll, artScroll, image, aura], {
        clearProps: "all",
      });

      return;
    }

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ==========================================
      // DESKTOP
      // ==========================================
      mm.add("(min-width: 992px)", () => {
        /* Continuous floating character.
         * Only the image itself is animated here. */
        const floatTween = gsap.to(image, {
          y: -14,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        /*
         * Slow decorative ring rotation
         */
        const ringOneTween = gsap.to(ringOne, {
          rotation: "+=360",
          duration: 40,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });

        const ringTwoTween = gsap.to(ringTwo, {
          rotation: "-=360",
          duration: 50,
          repeat: -1,
          ease: "none",
          transformOrigin: "50% 50%",
        });


        const scrollTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        scrollTimeline
          .fromTo(
            copyScroll,
            {
              y: 0,
              opacity: 1,
            },
            {
              y: -65,
              opacity: 0.35,
              ease: "none",
            },
            0
          )
          .fromTo(
            artScroll,
            {
              x: 0,
              y: 0,
              scale: 1,
            },
            {
              x: -55,
              y: 75,
              scale: 1.08,
              ease: "none",
            },
            0
          )
          .fromTo(
            aura,
            {
              scale: 1,
              opacity: 1,
            },
            {
              scale: 1.25,
              opacity: 0.5,
              ease: "none",
            },
            0
          );

        /*
         * Mouse parallax
         */
        let mouseMoveHandler = null;
        let mouseLeaveHandler = null;

        if (window.matchMedia("(pointer: fine)").matches) {
          const imageX = gsap.quickTo(image, "x", {
            duration: 0.8,
            ease: "power3.out",
          });

          const imageRotation = gsap.quickTo(image, "rotation", {
            duration: 0.8,
            ease: "power3.out",
          });

          mouseMoveHandler = (event) => {
            const bounds = hero.getBoundingClientRect();

            const normalizedX =
              (event.clientX - bounds.left) / bounds.width - 0.5;

            imageX(normalizedX * 20);
            imageRotation(normalizedX * 1.5);
          };

          mouseLeaveHandler = () => {
            imageX(0);
            imageRotation(0);
          };

          hero.addEventListener("mousemove", mouseMoveHandler);
          hero.addEventListener("mouseleave", mouseLeaveHandler);
        }

        return () => {
          floatTween.kill();
          ringOneTween.kill();
          ringTwoTween.kill();
          scrollTimeline.kill();

          if (mouseMoveHandler) {
            hero.removeEventListener(
              "mousemove",
              mouseMoveHandler
            );
          }

          if (mouseLeaveHandler) {
            hero.removeEventListener(
              "mouseleave",
              mouseLeaveHandler
            );
          }
        };
      });

      // ==========================================
      // TABLET / MOBILE
      // ==========================================
      mm.add("(max-width: 991px)", () => {
        const mobileFloat = gsap.to(image, {
          y: -8,
          duration: 3.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        const mobileScroll = gsap.fromTo(
          artScroll,
          {
            y: 0,
          },
          {
            y: 35,
            ease: "none",

            scrollTrigger: {
              trigger: hero,
              start: "40% center",
              end: "bottom top",
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );

        return () => {
          mobileFloat.kill();
          mobileScroll.kill();
        };
      });

      /*
       * Refresh positions only after browser layout is ready.
       */
      const refreshTimer = window.setTimeout(() => {
        ScrollTrigger.refresh();
      }, 150);

      return () => {
        window.clearTimeout(refreshTimer);
        mm.revert();
      };
    }, hero);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      className="home-hero"
      ref={heroRef}
    >
      {/* Background grid */}
      <div className="hero-grid" />

      {/* Background glows */}
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      {/* Decorative stars */}
      <div className="hero-star hero-star-one">
        ✦
      </div>

      <div className="hero-star hero-star-two">
        ✦
      </div>

      <div className="hero-star hero-star-three">
        ✦
      </div>

      <div className="site-container hero-content">

        {/* ========================================
            LEFT SIDE
        ======================================== */}

        <div
          ref={copyScrollRef}
          className="hero-copy-scroll"
        >
          <motion.div
            className="hero-copy"
            initial={{
              opacity: 0,
              y: 32,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="hero-badge">
              <Sparkles size={14} />

              <span>
                The universe made for fans
              </span>
            </div>

            <h1>
              YOUR FANDOM.

              <span>
                YOUR UNIVERSE.
              </span>
            </h1>

            <p>
              One place for the worlds you obsess over.
              Discover stories, characters, communities,
              events and everything shaping fandom culture.
            </p>

            <div className="hero-actions">

              <a
                className="hero-primary-btn"
                href="#discover"
              >
                Explore the universe

                <ArrowRight size={18} />
              </a>

              <button
                className="hero-secondary-btn"
                type="button"
              >
                <span className="play-circle">
                  <Play
                    size={15}
                    fill="currentColor"
                  />
                </span>

                Watch the story
              </button>

            </div>

            <div className="hero-meta">

              <div>
                <strong>08+</strong>
                <span>Fandom worlds</span>
              </div>

              <div>
                <strong>10K+</strong>
                <span>
                  Stories & characters
                </span>
              </div>

              <div>
                <strong>∞</strong>
                <span>
                  Ways to explore
                </span>
              </div>

            </div>
          </motion.div>
        </div>


        {/* ========================================
            RIGHT SIDE ART
        ======================================== */}

        <div
          ref={artScrollRef}
          className="hero-art-scroll"
        >
          <motion.div
            className="hero-art"
            initial={{
              opacity: 0,
              scale: 0.92,
              x: 35,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.95,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* Aura */}
            <div
              ref={auraRef}
              className="hero-art-aura"
            />

            {/* Rings */}
            <div
              ref={ringOneRef}
              className="hero-art-ring hero-ring-one"
            />

            <div
              ref={ringTwoRef}
              className="hero-art-ring hero-ring-two"
            />

            {/* Main character */}
            <div className="hero-image-wrap">
              <img
                ref={imageRef}
                className="hero-character-image"
                src="/images/hero/fanhub-hero.png"
                alt="FanHub Plus original anime hero surrounded by fandom worlds"
                draggable="false"
              />
            </div>

            {/* Bottom glow */}
            <div className="hero-art-shine" />

          </motion.div>
        </div>
      </div>


      {/* ========================================
          SCROLL INDICATOR
      ======================================== */}

      <div className="hero-scroll-indicator">
        <span>
          SCROLL TO EXPLORE
        </span>

        <div className="scroll-line">
          <span />
        </div>
      </div>


      {/* ========================================
          BOTTOM MARQUEE
      ======================================== */}

      <div className="hero-bottom-line">
        <div className="marquee-track">

          <span>ANIME</span>
          <i>✦</i>

          <span>GAMING</span>
          <i>✦</i>

          <span>MANGA</span>
          <i>✦</i>

          <span>MOVIES</span>
          <i>✦</i>

          <span>K-POP</span>
          <i>✦</i>

          <span>COSPLAY</span>
          <i>✦</i>

          <span>ANIME</span>
          <i>✦</i>

          <span>GAMING</span>
          <i>✦</i>

          <span>MANGA</span>
          <i>✦</i>

          <span>MOVIES</span>
          <i>✦</i>

          <span>K-POP</span>
          <i>✦</i>

          <span>COSPLAY</span>
          <i>✦</i>

        </div>
      </div>
    </section>
  );
}

export default Hero;