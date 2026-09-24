import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  Brain,
  Clock3,
  Heart,
  Megaphone,
  Search,
  Sparkles,
  X,
} from "lucide-react";

import "../../styles/pages/stories.css";

const categories = [
  "All",
  "Articles",
  "Theories",
  "Lore",
  "News",
];

const stories = [
  {
    id: 1,
    category: "Theories",
    title: "The True Power Behind the Eyes",
    excerpt:
      "Exploring the hidden abilities, forgotten clues and fan theories behind one of the universe's most mysterious powers.",
    image: "/images/stories/hidden-power.png",
    readTime: "6 min read",
    author: "Aiko Ren",
    likes: 1842,
    accent: "purple",
  },
  {
    id: 2,
    category: "Lore",
    title: "Hidden Villages and Their Secrets",
    excerpt:
      "Uncover the history, culture and ancient rivalries that shaped some of fandom's most legendary worlds.",
    image: "/images/stories/hidden-village.png",
    readTime: "7 min read",
    author: "Ren Akira",
    likes: 1365,
    accent: "green",
  },
  {
    id: 3,
    category: "Articles",
    title: "Rivalries That Define Great Anime",
    excerpt:
      "From friendship to competition, discover why legendary rivalries push characters beyond their limits.",
    image: "/images/stories/anime-rivalries.png",
    readTime: "5 min read",
    author: "Kai Mori",
    likes: 2218,
    accent: "red",
  },
  {
    id: 4,
    category: "News",
    title: "Upcoming Anime Releases to Watch",
    excerpt:
      "A look at exciting new worlds, characters and stories arriving on fan watchlists this season.",
    image: "/images/stories/upcoming-releases.png",
    readTime: "4 min read",
    author: "Mika Sora",
    likes: 974,
    accent: "blue",
  },
];

function Stories() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [bookmarks, setBookmarks] = useState([]);

  const [likedStories, setLikedStories] =
    useState([]);

  const filteredStories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return stories.filter((story) => {
      const categoryMatch =
        activeCategory === "All" ||
        story.category === activeCategory;

      const searchMatch =
        !query ||
        story.title.toLowerCase().includes(query) ||
        story.excerpt.toLowerCase().includes(query) ||
        story.category.toLowerCase().includes(query) ||
        story.author.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const toggleBookmark = (id) => {
    setBookmarks((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const toggleLike = (id) => {
    setLikedStories((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Theories":
        return Brain;

      case "Lore":
        return BookOpen;

      case "News":
        return Megaphone;

      default:
        return Sparkles;
    }
  };

  return (
    <main className="stories-page">
      {/* ===================================================
          FEATURED HERO
      =================================================== */}

      <section className="stories-hero">
        <img
          className="stories-hero-image"
          src="/images/stories/journey-never-ends.png"
          alt="Warrior overlooking a fantasy city"
          draggable="false"
        />

        <div className="stories-hero-overlay" />
        <div className="stories-hero-grid" />
        <div className="stories-hero-glow" />

        <div className="site-container stories-hero-inner">
          <motion.div
            className="featured-story"
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="featured-badge">
              <Sparkles size={14} />
              Featured Story
            </div>

            <h1>
              THE JOURNEY
              <span>NEVER ENDS.</span>
            </h1>

            <p>
              A deep dive into why the stories we love stay
              with us long after the final battle, final
              chapter and final goodbye.
            </p>

            <div className="featured-meta">
              <span>
                <Clock3 size={14} />
                8 min read
              </span>

              <i />

              <span>By FanHub Editorial</span>
            </div>

            <div className="featured-actions">
              <button
                type="button"
                className="read-featured-btn"
              >
                Read the story
                <ArrowRight size={17} />
              </button>

              <button
                type="button"
                className="featured-save-btn"
                aria-label="Save featured story"
              >
                <Bookmark size={17} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="stories-scroll-label">
          <span>DISCOVER STORIES</span>
          <div />
        </div>
      </section>

      {/* ===================================================
          STORY LIBRARY
      =================================================== */}

      <section className="stories-library">
        <div className="site-container">
          <div className="stories-heading">
            <div>
              <span className="stories-kicker">
                FROM ACROSS THE UNIVERSE
              </span>

              <h2>
                Stories worth
                <span className="gradient-text">
                  {" "}
                  getting lost in.
                </span>
              </h2>

              <p>
                Explore theories, deep lore, community
                articles and the latest stories shaping
                fandom culture.
              </p>
            </div>

            <span className="stories-result-count">
              {filteredStories.length} stories found
            </span>
          </div>

          {/* SEARCH */}

          <div className="stories-search">
            <Search size={19} />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search stories, theories, lore..."
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* FILTERS */}

          <div className="stories-filter">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "story-filter-btn active"
                    : "story-filter-btn"
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* CARDS */}

          <motion.div
            layout
            className="stories-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredStories.map(
                (story, index) => {
                  const CategoryIcon =
                    getCategoryIcon(story.category);

                  const isBookmarked =
                    bookmarks.includes(story.id);

                  const isLiked =
                    likedStories.includes(story.id);

                  return (
                    <motion.article
                      layout
                      key={story.id}
                      className={`story-card story-${story.accent}`}
                      initial={{
                        opacity: 0,
                        y: 35,
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
                        duration: 0.45,
                        delay: index * 0.05,
                      }}
                    >
                      <div className="story-card-image">
                        <img
                          src={story.image}
                          alt={story.title}
                          draggable="false"
                        />

                        <div className="story-image-overlay" />

                        <div className="story-image-top">
                          <span className="story-category">
                            <CategoryIcon size={13} />
                            {story.category}
                          </span>

                          <button
                            type="button"
                            className={
                              isBookmarked
                                ? "story-bookmark active"
                                : "story-bookmark"
                            }
                            onClick={() =>
                              toggleBookmark(story.id)
                            }
                            aria-label="Bookmark story"
                          >
                            <Bookmark
                              size={16}
                              fill={
                                isBookmarked
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        </div>

                        <span className="story-card-number">
                          {String(index + 1).padStart(
                            2,
                            "0"
                          )}
                        </span>
                      </div>

                      <div className="story-card-content">
                        <div className="story-meta">
                          <span>
                            <Clock3 size={12} />
                            {story.readTime}
                          </span>

                          <i />

                          <span>
                            {story.author}
                          </span>
                        </div>

                        <h3>{story.title}</h3>

                        <p>{story.excerpt}</p>

                        <div className="story-card-footer">
                          <button
                            type="button"
                            className="story-read-btn"
                          >
                            Read story
                            <ArrowUpRight size={15} />
                          </button>

                          <button
                            type="button"
                            className={
                              isLiked
                                ? "story-like-btn active"
                                : "story-like-btn"
                            }
                            onClick={() =>
                              toggleLike(story.id)
                            }
                          >
                            <Heart
                              size={15}
                              fill={
                                isLiked
                                  ? "currentColor"
                                  : "none"
                              }
                            />

                            {story.likes +
                              (isLiked ? 1 : 0)}
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                }
              )}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY */}

          {filteredStories.length === 0 && (
            <motion.div
              className="stories-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <Search size={25} />
              </div>

              <h3>No stories found.</h3>

              <p>
                Try another search or explore a different
                category.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
                Reset stories
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===================================================
          WRITER CTA
      =================================================== */}

      <section className="story-writer-cta">
        <div className="writer-grid" />
        <div className="writer-glow" />

        <motion.div
          className="site-container writer-inner"
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="writer-icon">
            <BookOpen size={22} />
          </div>

          <span>YOUR STORY MATTERS</span>

          <h2>
            Every fan has a
            <br />
            <span className="gradient-text">
              theory worth sharing.
            </span>
          </h2>

          <p>
            Write theories, explore hidden lore and share
            your perspective with fans across the FanHub+
            universe.
          </p>

          <button type="button">
            Start writing
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default Stories;