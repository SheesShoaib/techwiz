import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  CalendarDays,
  Clock3,
  Gamepad2,
  MapPin,
  Search,
  Sparkles,
  Ticket,
  Users,
  X,
} from "lucide-react";

import "../../styles/pages/events.css";

const categories = [
  "All",
  "Anime",
  "Gaming",
  "K-Pop",
  "Cosplay",
  "Manga",
  "Community",
];

const events = [
  {
    id: 1,
    title: "Anime Universe Convention",
    category: "Anime",
    date: "12 OCT",
    fullDate: "October 12, 2026",
    time: "10:00 AM",
    location: "Tokyo Convention Center",
    attendees: "4.8K",
    image: "/images/events/anime-convention.png",
    description:
      "A massive celebration of anime culture featuring creators, panels, exclusive reveals and unforgettable fan experiences.",
    accent: "purple",
  },
  {
    id: 2,
    title: "Cyber Clash Championship",
    category: "Gaming",
    date: "18 OCT",
    fullDate: "October 18, 2026",
    time: "5:30 PM",
    location: "Neon Arena",
    attendees: "7.2K",
    image: "/images/events/gaming-tournament.png",
    description:
      "Elite players collide under the lights in a high-energy esports tournament built for competitive gaming fans.",
    accent: "cyan",
  },
  {
    id: 3,
    title: "Neon Hearts Live",
    category: "K-Pop",
    date: "25 OCT",
    fullDate: "October 25, 2026",
    time: "7:00 PM",
    location: "Starlight Stadium",
    attendees: "12K",
    image: "/images/events/kpop-festival.png",
    description:
      "Music, lights, performances and thousands of fans come together for an unforgettable night of K-Pop culture.",
    accent: "pink",
  },
  {
    id: 4,
    title: "Cosplay Championship",
    category: "Cosplay",
    date: "02 NOV",
    fullDate: "November 2, 2026",
    time: "2:00 PM",
    location: "FanHub Expo Hall",
    attendees: "3.6K",
    image: "/images/events/cosplay-championship.png",
    description:
      "Creators transform imagination into reality through detailed costumes, performances and championship-level artistry.",
    accent: "orange",
  },
  {
    id: 5,
    title: "Manga & Comic Expo",
    category: "Manga",
    date: "09 NOV",
    fullDate: "November 9, 2026",
    time: "11:00 AM",
    location: "Creator District",
    attendees: "5.1K",
    image: "/images/events/manga-comic-expo.png",
    description:
      "Discover artists, rare collections, new stories, creator panels and everything surrounding manga and comic culture.",
    accent: "red",
  },
  {
    id: 6,
    title: "Fan Community Night",
    category: "Community",
    date: "16 NOV",
    fullDate: "November 16, 2026",
    time: "6:30 PM",
    location: "Sakura Waterfront",
    attendees: "2.9K",
    image: "/images/events/fan-community-meetup.png",
    description:
      "A relaxed night festival where fans meet, share stories, explore art, enjoy food and celebrate their favorite worlds.",
    accent: "green",
  },
];

function Events() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [savedEvents, setSavedEvents] =
    useState([]);

  const filteredEvents = useMemo(() => {
    const query = search.trim().toLowerCase();

    return events.filter((event) => {
      const categoryMatch =
        activeCategory === "All" ||
        event.category === activeCategory;

      const searchMatch =
        !query ||
        event.title.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query) ||
        event.location.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const toggleSavedEvent = (id) => {
    setSavedEvents((current) =>
      current.includes(id)
        ? current.filter((eventId) => eventId !== id)
        : [...current, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="events-page">
      {/* Feature events */}

      <section className="events-hero">
        <img
          className="events-hero-image"
          src="/images/events/anime-convention.png"
          alt="Anime Universe Convention"
          draggable="false"
        />

        <div className="events-hero-overlay" />
        <div className="events-hero-grid" />
        <div className="events-hero-glow" />

        <div className="site-container events-hero-inner">
          <motion.div
            className="events-hero-copy"
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
            <div className="events-featured-badge">
              <Sparkles size={14} />
              Featured Event
            </div>

            <h1>
              WHERE FANDOM
              <span>COMES ALIVE.</span>
            </h1>

            <p>
              Step beyond the screen and experience the
              conventions, tournaments, concerts and
              communities bringing fandom culture together.
            </p>

            <div className="events-featured-details">
              <span>
                <CalendarDays size={15} />
                October 12, 2026
              </span>

              <span>
                <Clock3 size={15} />
                10:00 AM
              </span>

              <span>
                <MapPin size={15} />
                Tokyo Convention Center
              </span>
            </div>

            <div className="events-hero-actions">
              <button
                className="events-primary-btn"
                type="button"
              >
                <Ticket size={17} />
                View event
                <ArrowRight size={16} />
              </button>

              <button
                className="events-secondary-btn"
                type="button"
                onClick={() => toggleSavedEvent(1)}
              >
                <Bookmark
                  size={17}
                  fill={
                    savedEvents.includes(1)
                      ? "currentColor"
                      : "none"
                  }
                />

                {savedEvents.includes(1)
                  ? "Saved"
                  : "Save event"}
              </button>
            </div>
          </motion.div>
        </div>

        <div className="events-hero-bottom">
          <span>UPCOMING EXPERIENCES</span>
          <div />
        </div>
      </section>

      {/* Discovery */}

      <section className="events-discovery">
        <div className="site-container">
          <div className="events-section-heading">
            <div>
              <span className="events-kicker">
                FIND YOUR NEXT EXPERIENCE
              </span>

              <h2>
                Upcoming across the
                <span className="gradient-text">
                  {" "}
                  universe.
                </span>
              </h2>

              <p>
                Discover conventions, competitions,
                performances and community events built
                around the worlds you love.
              </p>
            </div>

            <span className="events-result-count">
              {filteredEvents.length} events found
            </span>
          </div>

          {/* SEARCH */}

          <div className="events-search">
            <Search size={19} />

            <input
              type="text"
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              placeholder="Search events, categories, locations..."
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear event search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* FILTERS */}

          <div className="events-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "event-filter active"
                    : "event-filter"
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

          {/* EVENT CARDS */}

          <motion.div
            layout
            className="events-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredEvents.map(
                (event, index) => {
                  const isSaved =
                    savedEvents.includes(event.id);

                  return (
                    <motion.article
                      layout
                      key={event.id}
                      className={`event-card event-${event.accent}`}
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
                      <div className="event-image">
                        <img
                          src={event.image}
                          alt={event.title}
                          draggable="false"
                        />

                        <div className="event-image-overlay" />

                        <div className="event-card-top">
                          <span>
                            {event.category}
                          </span>

                          <button
                            type="button"
                            className={
                              isSaved
                                ? "event-save active"
                                : "event-save"
                            }
                            onClick={() =>
                              toggleSavedEvent(
                                event.id
                              )
                            }
                            aria-label="Save event"
                          >
                            <Bookmark
                              size={16}
                              fill={
                                isSaved
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        </div>

                        <div className="event-date">
                          <strong>
                            {event.date.split(" ")[0]}
                          </strong>

                          <span>
                            {event.date.split(" ")[1]}
                          </span>
                        </div>
                      </div>

                      <div className="event-content">
                        <div className="event-small-meta">
                          <span>
                            <Clock3 size={12} />
                            {event.time}
                          </span>

                          <i />

                          <span>
                            <Users size={12} />
                            {event.attendees}
                          </span>
                        </div>

                        <h3>{event.title}</h3>

                        <div className="event-location">
                          <MapPin size={13} />
                          {event.location}
                        </div>

                        <p>{event.description}</p>

                        <div className="event-card-footer">
                          <span>
                            {event.fullDate}
                          </span>

                          <button type="button">
                            View details
                            <ArrowUpRight size={15} />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                }
              )}
            </AnimatePresence>
          </motion.div>

          {/* EMPTY STATE */}

          {filteredEvents.length === 0 && (
            <motion.div
              className="events-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div>
                <CalendarDays size={26} />
              </div>

              <h3>No events found.</h3>

              <p>
                Try another category, location or search
                term.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
                Reset events
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ===============================================
          CALENDAR STRIP
      =============================================== */}

      <section className="events-calendar-section">
        <div className="site-container">
          <motion.div
            className="events-calendar-card"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="calendar-copy">
              <div className="calendar-icon">
                <CalendarDays size={22} />
              </div>

              <div>
                <span>FANHUB+ CALENDAR</span>

                <h2>
                  Never miss your next
                  <span className="gradient-text">
                    {" "}
                    fandom moment.
                  </span>
                </h2>

                <p>
                  Save events you care about and build your
                  personal fandom calendar.
                </p>
              </div>
            </div>

            <div className="calendar-days">
              <div>
                <span>OCT</span>
                <strong>12</strong>
                <small>Anime</small>
              </div>

              <div>
                <span>OCT</span>
                <strong>18</strong>
                <small>Gaming</small>
              </div>

              <div>
                <span>OCT</span>
                <strong>25</strong>
                <small>K-Pop</small>
              </div>

              <div>
                <span>NOV</span>
                <strong>02</strong>
                <small>Cosplay</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===============================================
          COMMUNITY CTA
      =============================================== */}

      <section className="events-community">
        <div className="events-community-glow" />

        <motion.div
          className="site-container events-community-inner"
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
          <Users size={23} />

          <span>MEET YOUR PEOPLE</span>

          <h2>
            Online fandom.
            <br />
            <span className="gradient-text">
              Real-world memories.
            </span>
          </h2>

          <p>
            Find communities, attend unforgettable events
            and meet fans who understand exactly why these
            worlds matter.
          </p>

          <button type="button">
            Explore all events
            <ArrowRight size={16} />
          </button>
        </motion.div>
      </section>
    </main>
  );
}

export default Events;