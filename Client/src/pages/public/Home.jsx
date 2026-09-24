import {
  ArrowUpRight,
  Gamepad2,
  Headphones,
  BookOpen,
  Clapperboard,
  Users,
  WandSparkles,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

import Hero from "../../components/home/Hero";
import "../../styles/pages/home.css";

function Home() {
  const fandoms = [
    {
      title: "Anime",
      description: "Worlds beyond imagination",
      icon: WandSparkles,
      className: "",
    },
    {
      title: "Gaming",
      description: "Play. Compete. Connect.",
      icon: Gamepad2,
      className: "fandom-blue",
    },
    {
      title: "Manga",
      description: "Stories worth collecting",
      icon: BookOpen,
      className: "fandom-pink",
    },
    {
      title: "Movies",
      description: "Cinema without limits",
      icon: Clapperboard,
      className: "fandom-orange",
    },
    {
      title: "K-Pop",
      description: "Music. Artists. Culture.",
      icon: Headphones,
      className: "fandom-cyan",
    },
    {
      title: "Cosplay",
      description: "Become the character",
      icon: Users,
      className: "fandom-green",
    },
  ];

  const trending = [
    {
      number: "01",
      category: "ANIME",
      title: "The Last Arc",
      description:
        "Enter a world of legends, rivalries and stories fans cannot stop talking about.",
      image: "/images/trending/anime-world.jpeg",
    },
    {
      number: "02",
      category: "GAMING",
      title: "Shadow Protocol",
      description:
        "Explore competitive worlds, unforgettable adventures and the culture behind gaming.",
      image: "/images/trending/gaming-world.jpeg",
    },
    {
      number: "03",
      category: "K-POP",
      title: "Neon Hearts",
      description:
        "Discover artists, performances and communities shaping the global fandom scene.",
      image: "/images/trending/kpop-world.jpeg",
    },
    {
      number: "04",
      category: "MOVIES",
      title: "Beyond Earth",
      description:
        "Step into cinematic universes filled with iconic characters and unforgettable stories.",
      image: "/images/trending/movies-world.jpeg",
    },
  ];

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 45,
    },

    visible: (index) => ({
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.65,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <main className="home-page">
      {/* =====================================================
          HERO
      ===================================================== */}

      <Hero />

      {/* =====================================================
          DISCOVER FANDOMS
      ===================================================== */}

      <section
        className="section-padding discover-section"
        id="discover"
      >
        <div className="site-container">
          <div className="section-heading-row">
            <div>
              <div className="section-eyebrow">
                <Sparkles size={14} />
                FIND YOUR WORLD
              </div>

              <h2 className="section-title">
                Every obsession deserves{" "}
                <span className="gradient-text">
                  a universe.
                </span>
              </h2>

              <p className="section-description">
                Jump between the fandoms you already love and
                discover the next one you will not stop talking
                about.
              </p>
            </div>

            <a
              className="text-link"
              href="#trending"
            >
              View all worlds
              <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="fandom-grid">
            {fandoms.map((fandom, index) => {
              const Icon = fandom.icon;

              return (
                <motion.article
                  key={fandom.title}
                  className={`fandom-card ${fandom.className}`}
                  initial={{
                    opacity: 0,
                    y: 35,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                  }}
                >
                  <div className="fandom-card-glow" />

                  <div className="fandom-icon">
                    <Icon size={23} />
                  </div>

                  <div>
                    <h3>{fandom.title}</h3>
                    <p>{fandom.description}</p>
                  </div>

                  <ArrowUpRight
                    className="card-arrow"
                    size={15}
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          TRENDING
      ===================================================== */}

      <section
        className="section-padding trending-section"
        id="trending"
      >
        <div className="site-container">
          <div className="trending-heading">
            <div className="section-eyebrow">
              <span className="eyebrow-heart">
                ♡
              </span>

              WHAT FANS LOVE RIGHT NOW
            </div>

            <h2 className="section-title">
              Trending across the{" "}
              <span className="gradient-text">
                hub.
              </span>
            </h2>

            <p className="section-description">
              Explore the worlds, stories and communities
              capturing everyone's attention right now.
            </p>
          </div>

          <div className="trending-grid">
            {trending.map((item, index) => (
              <motion.article
                className="trend-card"
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.18,
                }}
              >
                <div className="trend-image">
                  <img
                    src={item.image}
                    alt={`${item.title} ${item.category} fandom artwork`}
                    loading="lazy"
                    draggable="false"
                  />

                  <div className="trend-image-overlay" />

                  <div className="trend-top">
                    <span className="trend-category">
                      {item.category}
                    </span>

                    <span className="trend-open">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>

                  <span className="trend-number">
                    {item.number}
                  </span>
                </div>

                <div className="trend-info">
                  <span>
                    {item.category}
                  </span>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <button
                    className="trend-explore"
                    type="button"
                  >
                    Explore world
                    <ArrowRight size={15} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          COMMUNITY CTA
      ===================================================== */}

      <section className="community-cta">
        <div className="community-glow" />

        <motion.div
          className="site-container community-inner"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="section-eyebrow justify-center">
            <Sparkles size={14} />
            MADE FOR FANS
          </div>

          <h2>
            Don't just follow the story.
            <br />

            <span className="gradient-text">
              Become part of it.
            </span>
          </h2>

          <p>
            Save favorites, build your collection, discover
            events and connect with the worlds that mean
            something to you.
          </p>

          <button
            className="community-btn"
            type="button"
          >
            Enter FanHub+
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default Home;