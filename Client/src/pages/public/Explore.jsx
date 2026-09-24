import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clapperboard,
  Gamepad2,
  Headphones,
  Search,
  Sparkles,
  Users,
  WandSparkles,
  X,
} from "lucide-react";

import "../../styles/pages/explore.css";

const categories = [
  { name: "All", icon: Sparkles },
  { name: "Anime", icon: WandSparkles },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Manga", icon: BookOpen },
  { name: "Movies", icon: Clapperboard },
  { name: "K-Pop", icon: Headphones },
  { name: "Cosplay", icon: Users },
];

const worlds = [
  {
    id: 1,
    title: "Crimson Horizon",
    category: "Anime",
    description:
      "Ancient rivalries, forbidden powers and warriors fighting beneath a blood-red moon.",
    image: "/images/trending/anime-world.png",
    accent: "violet",
    stat: "2.4K fans",
  },
  {
    id: 2,
    title: "Shadow Protocol",
    category: "Gaming",
    description:
      "Competitive missions, cyber cities and a community built around the next challenge.",
    image: "/images/trending/gaming-world.png",
    accent: "cyan",
    stat: "4.8K fans",
  },
  {
    id: 3,
    title: "Neon Hearts",
    category: "K-Pop",
    description:
      "Performances, artists and fandom moments lighting up stages around the world.",
    image: "/images/trending/kpop-world.png",
    accent: "pink",
    stat: "6.1K fans",
  },
  {
    id: 4,
    title: "Beyond Earth",
    category: "Movies",
    description:
      "Cinematic universes, iconic heroes and stories that continue long after the credits.",
    image: "/images/trending/movies-world.png",
    accent: "gold",
    stat: "3.7K fans",
  },
  {
    id: 5,
    title: "Inkbound",
    category: "Manga",
    description:
      "Panels, theories and unforgettable story arcs waiting to be discovered.",
    image: "/images/trending/anime-world.png",
    accent: "red",
    stat: "1.9K fans",
  },
  {
    id: 6,
    title: "Alter Ego",
    category: "Cosplay",
    description:
      "Costume builds, creators and transformations that bring fictional worlds to life.",
    image: "/images/trending/kpop-world.png",
    accent: "green",
    stat: "1.5K fans",
  },
];

function Explore() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredWorlds = useMemo(() => {
    const query = search.trim().toLowerCase();

    return worlds.filter((world) => {
      const matchesCategory =
        activeCategory === "All" ||
        world.category === activeCategory;

      const matchesSearch =
        !query ||
        world.title.toLowerCase().includes(query) ||
        world.category.toLowerCase().includes(query) ||
        world.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <div className="explore-page">
      <section className="explore-hero">
        <div className="explore-grid" />
        <div className="explore-glow explore-glow-left" />
        <div className="explore-glow explore-glow-right" />

        <div className="explore-orb orb-one" />
        <div className="explore-orb orb-two" />

        <div className="site-container explore-hero-inner">
          <motion.div
            className="explore-hero-copy"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="explore-eyebrow">
              <Sparkles size={14} />
              YOUR NEXT OBSESSION STARTS HERE
            </div>

            <h1>
              FIND YOUR
              <span> NEXT WORLD.</span>
            </h1>

            <p>
              Search across fandoms, jump between universes and
              discover stories, characters and communities worth
              getting lost in.
            </p>
          </motion.div>

          <motion.div
            className="explore-search-shell"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
          >
            <div className="explore-search">
              <Search size={20} />

              <input
                type="text"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search anime, games, movies, artists..."
                aria-label="Search fandom worlds"
              />

              {search && (
                <button
                  type="button"
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={17} />
                </button>
              )}

              <button
                className="search-action"
                type="button"
              >
                Explore
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="search-suggestions">
              <span>Trending searches:</span>
              <button
                type="button"
                onClick={() => setSearch("Anime")}
              >
                Anime
              </button>
              <button
                type="button"
                onClick={() => setSearch("Gaming")}
              >
                Gaming
              </button>
              <button
                type="button"
                onClick={() => setSearch("K-Pop")}
              >
                K-Pop
              </button>
            </div>
          </motion.div>
        </div>

        <div className="explore-hero-line" />
      </section>

      <section className="explore-content">
        <div className="site-container">
          <div className="explore-toolbar">
            <div>
              <span className="explore-section-kicker">
                DISCOVER BY FANDOM
              </span>

              <h2>
                Choose your
                <span className="gradient-text">
                  {" "}universe.
                </span>
              </h2>
            </div>

            <span className="result-count">
              {filteredWorlds.length} worlds found
            </span>
          </div>

          <div className="category-filter">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <button
                  type="button"
                  key={category.name}
                  className={
                    activeCategory === category.name
                      ? "filter-chip active"
                      : "filter-chip"
                  }
                  onClick={() =>
                    setActiveCategory(category.name)
                  }
                >
                  <Icon size={15} />
                  {category.name}
                </button>
              );
            })}
          </div>

          <motion.div
            layout
            className="explore-world-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredWorlds.map((world, index) => (
                <motion.article
                  layout
                  key={world.id}
                  className={`world-card world-${world.accent}`}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.96,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.04,
                  }}
                >
                  <div className="world-image">
                    <img
                      src={world.image}
                      alt={`${world.title} ${world.category}`}
                      draggable="false"
                    />

                    <div className="world-overlay" />

                    <div className="world-card-top">
                      <span>{world.category}</span>

                      <button
                        type="button"
                        aria-label={`Open ${world.title}`}
                      >
                        <ArrowUpRight size={17} />
                      </button>
                    </div>

                    <div className="world-index">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  <div className="world-content">
                    <div className="world-meta">
                      <span>{world.stat}</span>
                      <i />
                      <span>FanHub+</span>
                    </div>

                    <h3>{world.title}</h3>

                    <p>{world.description}</p>

                    <button
                      type="button"
                      className="enter-world"
                    >
                      Enter world
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredWorlds.length === 0 && (
            <motion.div
              className="no-worlds"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="no-worlds-icon">
                <Search size={26} />
              </div>

              <h3>No universe found.</h3>

              <p>
                Try another search or switch to a different
                fandom.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Reset discovery
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="explore-bottom-cta">
        <div className="explore-cta-glow" />

        <motion.div
          className="site-container explore-cta-inner"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={22} />

          <h2>
            Can't find your fandom?
          </h2>

          <p>
            FanHub+ keeps expanding. Join the community and
            help shape what universe arrives next.
          </p>

          <button type="button">
            Join the hub
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}

export default Explore;