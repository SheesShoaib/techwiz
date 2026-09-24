import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Heart,
  Minus,
  Package,
  Plus,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Trash2,
  Truck,
  X,
} from "lucide-react";

import "../../styles/pages/shop.css";

const categories = [
  "All",
  "Apparel",
  "Figures",
  "Manga",
  "Posters",
  "Accessories",
  "Collectibles",
];

const products = [
  {
    id: 1,
    name: "FanHub+ Anime Hoodie",
    category: "Apparel",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.9,
    reviews: 328,
    image: "/images/shop/anime-hoodie.png",
    badge: "BEST SELLER",
    description:
      "Premium oversized fandom hoodie with a dark futuristic anime-inspired finish.",
    accent: "purple",
  },
  {
    id: 2,
    name: "Cyber Warrior Figure",
    category: "Figures",
    price: 84.99,
    oldPrice: 109.99,
    rating: 4.8,
    reviews: 214,
    image: "/images/shop/cyber-warrior-figure.png",
    badge: "LIMITED",
    description:
      "Collector-grade cyber warrior figure designed for premium fandom displays.",
    accent: "cyan",
  },
  {
    id: 3,
    name: "Manga Collector Box",
    category: "Manga",
    price: 59.99,
    oldPrice: 74.99,
    rating: 4.9,
    reviews: 186,
    image: "/images/shop/manga-box-set.png",
    badge: "COLLECTOR",
    description:
      "A premium manga collection presented in a display-ready limited edition box.",
    accent: "pink",
  },
  {
    id: 4,
    name: "Neon Fandom Poster Set",
    category: "Posters",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.7,
    reviews: 142,
    image: "/images/shop/neon-poster-set.png",
    badge: "NEW",
    description:
      "A cinematic set of vibrant fandom art prints made for gaming and anime rooms.",
    accent: "blue",
  },
  {
    id: 5,
    name: "FanHub+ Accessories Pack",
    category: "Accessories",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.8,
    reviews: 263,
    image: "/images/shop/accessories-pack.png",
    badge: "FAN PICK",
    description:
      "Pins, keychains, stickers and fandom essentials packed into one collectible set.",
    accent: "orange",
  },
  {
    id: 6,
    name: "Collector Mystery Box",
    category: "Collectibles",
    price: 99.99,
    oldPrice: 139.99,
    rating: 5.0,
    reviews: 451,
    image: "/images/shop/mystery-box.png",
    badge: "EXCLUSIVE",
    description:
      "A surprise collector box filled with apparel, figures, artwork and exclusive items.",
    accent: "green",
  },
];

function Shop() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [wishlist, setWishlist] = useState([]);

  const [cart, setCart] = useState([]);

  const [cartOpen, setCartOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return products.filter((product) => {
      const categoryMatch =
        activeCategory === "All" ||
        product.category === activeCategory;

      const searchMatch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const toggleWishlist = (id) => {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter(
            (productId) => productId !== id
          )
        : [...current, id]
    );
  };

  const addToCart = (product) => {
    setCart((current) => {
      const existingProduct = current.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return current.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...current,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const changeQuantity = (id, amount) => {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + amount,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((current) =>
      current.filter((item) => item.id !== id)
    );
  };

  const resetFilters = () => {
    setSearch("");
    setActiveCategory("All");
  };

  return (
    <main className="shop-page">
      {/* ============================================
          HERO
      ============================================ */}

      <section className="shop-hero">
        <div className="shop-hero-grid" />
        <div className="shop-hero-glow shop-glow-one" />
        <div className="shop-hero-glow shop-glow-two" />

        <div className="site-container shop-hero-inner">
          <motion.div
            className="shop-hero-copy"
            initial={{
              opacity: 0,
              y: 35,
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
            <div className="shop-hero-badge">
              <Sparkles size={14} />
              FanHub+ Official Store
            </div>

            <h1>
              WEAR WHAT
              <span>YOU LOVE.</span>
            </h1>

            <p>
              Collect the worlds that matter to you.
              Discover exclusive apparel, figures, manga,
              artwork and fandom essentials made for true
              fans.
            </p>

            <div className="shop-hero-actions">
              <a
                href="#shop-products"
                className="shop-primary-btn"
              >
                Shop collection
                <ArrowRight size={17} />
              </a>

              <button
                type="button"
                className="shop-cart-button"
                onClick={() => setCartOpen(true)}
              >
                <ShoppingBag size={17} />
                My cart

                {cartCount > 0 && (
                  <span>{cartCount}</span>
                )}
              </button>
            </div>

            <div className="shop-benefits">
              <span>
                <ShieldCheck size={15} />
                Official merchandise
              </span>

              <span>
                <Truck size={15} />
                Worldwide shipping
              </span>

              <span>
                <Package size={15} />
                Collector packaging
              </span>
            </div>
          </motion.div>

          <motion.div
            className="shop-hero-product"
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="shop-product-aura" />

            <div className="shop-featured-image">
              <img
                src="/images/shop/mystery-box.png"
                alt="FanHub Plus collector mystery box"
                draggable="false"
              />
            </div>

            <div className="shop-floating-card">
              <span>COLLECTOR'S PICK</span>

              <strong>Mystery Box</strong>

              <small>$99.99</small>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          PRODUCTS
      ============================================ */}

      <section
        className="shop-products-section"
        id="shop-products"
      >
        <div className="site-container">
          <div className="shop-heading">
            <div>
              <span className="shop-kicker">
                THE FANHUB+ COLLECTION
              </span>

              <h2>
                Built for the
                <span className="gradient-text">
                  {" "}
                  obsessed.
                </span>
              </h2>

              <p>
                Limited drops, collector pieces and fandom
                essentials designed to make your collection
                personal.
              </p>
            </div>

            <button
              type="button"
              className="heading-cart"
              onClick={() => setCartOpen(true)}
            >
              <ShoppingBag size={17} />

              Cart

              <span>{cartCount}</span>
            </button>
          </div>

          {/* SEARCH */}

          <div className="shop-search">
            <Search size={19} />

            <input
              type="text"
              placeholder="Search merchandise..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
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

          <div className="shop-filters">
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "shop-filter active"
                    : "shop-filter"
                }
                onClick={() =>
                  setActiveCategory(category)
                }
              >
                {category}
              </button>
            ))}
          </div>

          <div className="shop-results-row">
            <span>
              {filteredProducts.length} products
            </span>

            <span>
              {wishlist.length} saved
            </span>
          </div>

          {/* PRODUCT GRID */}

          <motion.div
            layout
            className="products-grid"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(
                (product, index) => {
                  const saved =
                    wishlist.includes(product.id);

                  const discount = Math.round(
                    ((product.oldPrice -
                      product.price) /
                      product.oldPrice) *
                      100
                  );

                  return (
                    <motion.article
                      layout
                      key={product.id}
                      className={`product-card product-${product.accent}`}
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
                      <div className="product-image">
                        <img
                          src={product.image}
                          alt={product.name}
                          draggable="false"
                        />

                        <div className="product-overlay" />

                        <div className="product-image-top">
                          <span className="product-badge">
                            {product.badge}
                          </span>

                          <button
                            type="button"
                            className={
                              saved
                                ? "wishlist-btn active"
                                : "wishlist-btn"
                            }
                            onClick={() =>
                              toggleWishlist(
                                product.id
                              )
                            }
                            aria-label="Add to wishlist"
                          >
                            <Heart
                              size={16}
                              fill={
                                saved
                                  ? "currentColor"
                                  : "none"
                              }
                            />
                          </button>
                        </div>

                        <span className="discount-badge">
                          -{discount}%
                        </span>
                      </div>

                      <div className="product-content">
                        <div className="product-category">
                          {product.category}
                        </div>

                        <h3>{product.name}</h3>

                        <div className="product-rating">
                          <Star
                            size={13}
                            fill="currentColor"
                          />

                          <strong>
                            {product.rating}
                          </strong>

                          <span>
                            ({product.reviews})
                          </span>
                        </div>

                        <p>
                          {product.description}
                        </p>

                        <div className="product-price-row">
                          <div>
                            <strong>
                              $
                              {product.price.toFixed(
                                2
                              )}
                            </strong>

                            <del>
                              $
                              {product.oldPrice.toFixed(
                                2
                              )}
                            </del>
                          </div>

                          <button
                            type="button"
                            className="add-cart-btn"
                            onClick={() =>
                              addToCart(product)
                            }
                          >
                            <ShoppingBag
                              size={15}
                            />

                            Add to cart
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                }
              )}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              className="shop-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Search size={26} />

              <h3>No merchandise found.</h3>

              <p>
                Try another product name or category.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
                Reset shop
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* ============================================
          MYSTERY BOX FEATURE
      ============================================ */}

      <section className="mystery-section">
        <div className="site-container">
          <motion.div
            className="mystery-card"
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
              amount: 0.25,
            }}
            transition={{
              duration: 0.7,
            }}
          >
            <div className="mystery-image">
              <img
                src="/images/shop/mystery-box.png"
                alt="FanHub Plus mystery collector box"
              />
            </div>

            <div className="mystery-content">
              <span>
                <Sparkles size={14} />
                FANHUB+ EXCLUSIVE
              </span>

              <h2>
                You won't know what's inside.
                <span className="gradient-text">
                  {" "}
                  That's the point.
                </span>
              </h2>

              <p>
                Every Collector Mystery Box brings together
                exclusive fandom merchandise, collectible
                pieces and surprise drops.
              </p>

              <ul>
                <li>
                  <Check size={14} />
                  Premium merchandise
                </li>

                <li>
                  <Check size={14} />
                  Limited edition items
                </li>

                <li>
                  <Check size={14} />
                  Collector packaging
                </li>
              </ul>

              <div className="mystery-buy">
                <div>
                  <small>COLLECTOR PRICE</small>
                  <strong>$99.99</strong>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    addToCart(products[5])
                  }
                >
                  Add mystery box
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SHOP CTA
      ============================================ */}

      <section className="shop-community">
        <div className="shop-community-glow" />

        <motion.div
          className="site-container shop-community-inner"
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
        >
          <Package size={23} />

          <span>MORE THAN MERCH</span>

          <h2>
            Your collection.
            <br />

            <span className="gradient-text">
              Your fandom identity.
            </span>
          </h2>

          <p>
            Every piece tells people which worlds,
            characters and stories mean something to you.
          </p>

          <a href="#shop-products">
            Explore collection
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* ============================================
          CART DRAWER
      ============================================ */}

      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.button
              type="button"
              className="cart-backdrop"
              aria-label="Close cart"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() =>
                setCartOpen(false)
              }
            />

            <motion.aside
              className="cart-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="cart-header">
                <div>
                  <span>YOUR COLLECTION</span>

                  <h2>
                    Shopping bag
                    <small>{cartCount}</small>
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setCartOpen(false)
                  }
                >
                  <X size={19} />
                </button>
              </div>

              <div className="cart-body">
                {cart.length === 0 ? (
                  <div className="empty-cart">
                    <div>
                      <ShoppingBag size={25} />
                    </div>

                    <h3>Your cart is empty.</h3>

                    <p>
                      Find something from the FanHub+
                      collection.
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        setCartOpen(false)
                      }
                    >
                      Continue shopping
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <div
                      className="cart-item"
                      key={item.id}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-info">
                        <span>
                          {item.category}
                        </span>

                        <h3>{item.name}</h3>

                        <strong>
                          ${item.price.toFixed(2)}
                        </strong>

                        <div className="cart-item-bottom">
                          <div className="quantity-control">
                            <button
                              type="button"
                              onClick={() =>
                                changeQuantity(
                                  item.id,
                                  -1
                                )
                              }
                            >
                              <Minus size={13} />
                            </button>

                            <span>
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                changeQuantity(
                                  item.id,
                                  1
                                )
                              }
                            >
                              <Plus size={13} />
                            </button>
                          </div>

                          <button
                            type="button"
                            className="remove-cart-item"
                            onClick={() =>
                              removeFromCart(
                                item.id
                              )
                            }
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="cart-footer">
                  <div className="cart-subtotal">
                    <span>Subtotal</span>

                    <strong>
                      ${subtotal.toFixed(2)}
                    </strong>
                  </div>

                  <p>
                    Shipping and taxes calculated at
                    checkout.
                  </p>

                  <button
                    type="button"
                    className="checkout-btn"
                  >
                    Proceed to checkout

                    <ChevronRight size={17} />
                  </button>

                  <div className="secure-checkout">
                    <ShieldCheck size={14} />
                    Secure checkout
                  </div>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Shop;