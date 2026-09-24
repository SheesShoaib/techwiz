import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Crown,
  Gamepad2,
  Heart,
  Search,
  Shield,
  Sparkles,
  Swords,
  Users,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

import "../../styles/pages/characters.css";

const fandomFilters = [
  "All",
  "Anime",
  "Gaming",
  "Movies",
  "Manga",
  "K-Pop",
];

const roleFilters = [
  "All Roles",
  "Hero",
  "Anti-Hero",
  "Warrior",
  "Leader",
  "Artist",
];

const characters = [
  {
    id: 1,
    name: "Kaizen Rei",
    alias: "The Crimson Shadow",
    fandom: "Anime",
    role: "Anti-Hero",
    image: "/images/trending/anime-world.png",
    accent: "purple",
    power: 96,
    intelligence: 88,
    popularity: 94,
    description:
      "A mysterious warrior carrying the weight of a forgotten clan and a power nobody fully understands.",
    tags: ["Shadow Arts", "Elite", "Night Clan"],
  },
  {
    id: 2,
    name: "Nova Vex",
    alias: "Protocol Zero",
    fandom: "Gaming",
    role: "Hero",
    image: "/images/trending/gaming-world.png",
    accent: "cyan",
    power: 89,
    intelligence: 97,
    popularity: 91,
    description:
      "A cyber operative who bends digital systems, battlefield technology and impossible odds to her advantage.",
    tags: ["Cyber", "Tactical", "Hacker"],
  },
  {
    id: 3,
    name: "Luna Aeri",
    alias: "Neon Star",
    fandom: "K-Pop",
    role: "Artist",
    image: "/images/trending/kpop-world.png",
    accent: "pink",
    power: 82,
    intelligence: 86,
    popularity: 99,
    description:
      "A global performer whose stage presence turned an underground dream into an international movement.",
    tags: ["Performer", "Icon", "Dreamer"],
  },
  {
    id: 4,
    name: "Orion Vale",
    alias: "The Last Voyager",
    fandom: "Movies",
    role: "Leader",
    image: "/images/trending/movies-world.png",
    accent: "gold",
    power: 92,
    intelligence: 94,
    popularity: 90,
    description:
      "Commander of the final deep-space expedition searching beyond the edge of the mapped universe.",
    tags: ["Commander", "Explorer", "Cosmic"],
  },
  {
    id: 5,
    name: "Ren Kuro",
    alias: "Ink Blade",
    fandom: "Manga",
    role: "Warrior",
    image: "/images/trending/anime-world.png",
    accent: "red",
    power: 95,
    intelligence: 84,
    popularity: 87,
    description:
      "A wandering swordsman whose techniques are recorded only in pages thought to have vanished centuries ago.",
    tags: ["Swordsman", "Ancient", "Ronin"],
  },
  {
    id: 6,
    name: "Echo",
    alias: "Ghost in the Grid",
    fandom: "Gaming",
    role: "Anti-Hero",
    image: "/images/trending/gaming-world.png",
    accent: "blue",
    power: 87,
    intelligence: 99,
    popularity: 93,
    description:
      "Nobody knows who controls the mask, but every major network in the city knows the name Echo.",
    tags: ["Stealth", "Network", "Unknown"],
  },
];

function Characters() {
  const [search, setSearch] = useState("");
  const [activeFandom, setActiveFandom] = useState("All");
  const [activeRole, setActiveRole] = useState("All Roles");
  const [favorites, setFavorites] = useState([]);

  const filteredCharacters = useMemo(() => {
    const query = search.trim().toLowerCase();

    return characters.filter((character) => {
      const fandomMatch =
        activeFandom === "All" ||
        character.fandom === activeFandom;

      const roleMatch =
        activeRole === "All Roles" ||
        character.role === activeRole;

      const searchMatch =
        !query ||
        character.name.toLowerCase().includes(query) ||
        character.alias.toLowerCase().includes(query) ||
        character.fandom.toLowerCase().includes(query) ||
        character.role.toLowerCase().includes(query) ||
        character.tags.some((tag) =>
          tag.toLowerCase().includes(query)
        );

      return fandomMatch && roleMatch && searchMatch;
    });
  }, [search, activeFandom, activeRole]);

  const toggleFavorite = (id) => {
    setFavorites((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setActiveFandom("All");
    setActiveRole("All Roles");
  };

  return (
    <main className="characters-page">
      {/* HERO */}

      <section className="characters-hero">
        <div className="characters-grid-bg" />
        <div className="characters-glow characters-glow-one" />
        <div className="characters-glow characters-glow-two" />

        <div className="character-symbol symbol-one">
          ✦
        </div>

        <div className="character-symbol symbol-two">
          +
        </div>

        <div className="site-container characters-hero-inner">
          <motion.div
            className="characters-hero-copy"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="characters-eyebrow">
              <Users size={14} />
              CHARACTER ARCHIVE
            </div>

            <h1>
              MEET THE
              <span>LEGENDS.</span>
            </h1>

            <p>
              Heroes, villains, warriors, artists and icons.
              Explore the personalities that make every
              universe impossible to forget.
            </p>

            <div className="characters-hero-stats">
              <div>
                <strong>10K+</strong>
                <span>Characters</span>
              </div>

              <div>
                <strong>08</strong>
                <span>Universes</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Fan activity</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="characters-hero-border" />
      </section>

      {/* ARCHIVE */}

      <section className="character-archive">
        <div className="site-container">
          <div className="archive-heading">
            <div>
              <span className="archive-kicker">
                EXPLORE THE DATABASE
              </span>

              <h2>
                Find your favorite
                <span className="gradient-text">
                  {" "}character.
                </span>
              </h2>
            </div>

            <div className="archive-result">
              <span>{filteredCharacters.length}</span>
              characters found
            </div>
          </div>

          {/* // yha sy searchbar ka kam start he // */}

          <div className="character-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search characters, roles, powers..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            {search && (
              <button
                type="button"
                className="character-search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* FANDOM FILTER */}

          <div className="character-filter-block">
            <span className="filter-label">
              Fandom
            </span>

            <div className="character-filter-row">
              {fandomFilters.map((fandom) => (
                <button
                  key={fandom}
                  type="button"
                  className={
                    activeFandom === fandom
                      ? "character-filter active"
                      : "character-filter"
                  }
                  onClick={() =>
                    setActiveFandom(fandom)
                  }
                >
                  {fandom}
                </button>
              ))}
            </div>
          </div>

          {/* ROLE FILTER */}

          <div className="character-filter-block role-filter-block">
            <span className="filter-label">
              Role
            </span>

            <div className="character-filter-row">
              {roleFilters.map((role) => (
                <button
                  key={role}
                  type="button"
                  className={
                    activeRole === role
                      ? "character-filter active"
                      : "character-filter"
                  }
                  onClick={() =>
                    setActiveRole(role)
                  }
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* CARDS */}

          <motion.div
            layout
            className="characters-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredCharacters.map(
                (character, index) => {
                  const isFavorite =
                    favorites.includes(character.id);

                  return (
                    <motion.article
                      layout
                      key={character.id}
                      className={`character-card character-${character.accent}`}
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
                        scale: 0.95,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                    >
                      <div className="character-image">
                        <img
                          src={character.image}
                          alt={character.name}
                          draggable="false"
                        />

                        <div className="character-image-overlay" />

                        <div className="character-card-top">
                          <span>
                            {character.fandom}
                          </span>

                          <button
                            type="button"
                            className={
                              isFavorite
                                ? "favorite-btn active"
                                : "favorite-btn"
                            }
                            onClick={() =>
                              toggleFavorite(
                                character.id
                              )
                            }
                            aria-label="Favorite character"
                          >
                            <Heart
                              size={17}
                              fill={
                                isFavorite
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        </div>

                        <div className="character-role">
                          {character.role ===
                            "Hero" && (
                            <Shield size={13} />
                          )}

                          {character.role ===
                            "Anti-Hero" && (
                            <Zap size={13} />
                          )}

                          {character.role ===
                            "Warrior" && (
                            <Swords size={13} />
                          )}

                          {character.role ===
                            "Leader" && (
                            <Crown size={13} />
                          )}

                          {character.role ===
                            "Artist" && (
                            <Sparkles size={13} />
                          )}

                          {character.role}
                        </div>
                      </div>

                      <div className="character-content">
                        <span className="character-alias">
                          {character.alias}
                        </span>

                        <h3>{character.name}</h3>

                        <p>
                          {character.description}
                        </p>

                        <div className="character-tags">
                          {character.tags.map(
                            (tag) => (
                              <span key={tag}>
                                {tag}
                              </span>
                            )
                          )}
                        </div>

                        <div className="character-stats">
                          <div>
                            <div className="stat-heading">
                              <span>Power</span>
                              <strong>
                                {character.power}
                              </strong>
                            </div>

                            <div className="stat-track">
                              <span
                                style={{
                                  width: `${character.power}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="stat-heading">
                              <span>Intelligence</span>
                              <strong>
                                {character.intelligence}
                              </strong>
                            </div>

                            <div className="stat-track">
                              <span
                                style={{
                                  width: `${character.intelligence}%`,
                                }}
                              />
                            </div>
                          </div>

                          <div>
                            <div className="stat-heading">
                              <span>Popularity</span>
                              <strong>
                                {character.popularity}
                              </strong>
                            </div>

                            <div className="stat-track">
                              <span
                                style={{
                                  width: `${character.popularity}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        <button
                          className="character-profile-btn"
                          type="button"
                        >
                          View full profile
                          <ArrowUpRight size={15} />
                        </button>
                      </div>
                    </motion.article>
                  );
                }
              )}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}

          {filteredCharacters.length === 0 && (
            <motion.div
              className="character-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <Search size={25} />
              </div>

              <h3>No character found.</h3>

              <p>
                Try another name, fandom or role.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
                Reset archive
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}

      <section className="characters-cta">
        <div className="characters-cta-glow" />

        <motion.div
          className="site-container characters-cta-inner"
          initial={{ opacity: 0, y: 35 }}
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
          <WandSparkles size={22} />

          <span>THE ARCHIVE NEVER ENDS</span>

          <h2>
            Every universe has
            <br />
            someone worth
            <span className="gradient-text">
              {" "}remembering.
            </span>
          </h2>

          <p>
            Explore character histories, abilities,
            relationships and fan discussions across the
            FanHub+ universe.
          </p>

          <button type="button">
            Explore all characters
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default Characters;