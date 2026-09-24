import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  Bell,
  ChevronDown,
  Menu,
  Search,
} from "lucide-react";

function AdminHeader({ setMenuOpen }) {
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="admin-header">

      {/* header ki left side */}
      <div className="admin-header-left">

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={19} />
        </button>


        


        {/* admin search */}
        <div className="admin-search">
          <Search size={17} />

          <input
            type="text"
            placeholder="search admin panel..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />
        </div>

      </div>


      {/* header ki right side */}
      <div className="admin-header-right">

        <div className="system-status">
          <span></span>
          system online
        </div>


        <button
          type="button"
          className="notification-btn"
        >
          <Bell size={18} />

          <span className="notification-count">
            3
          </span>
        </button>


        <div className="admin-profile">

          <button
            type="button"
            className="profile-btn"
            onClick={() =>
              setProfileOpen(!profileOpen)
            }
          >
            <span className="profile-avatar">
              AD
            </span>

            <div className="profile-text">
              <strong>
                admin
              </strong>

              <small>
                super admin
              </small>
            </div>

            <ChevronDown size={15} />
          </button>


          {/* admin profile ka dropdown */}
          {profileOpen && (
            <div className="profile-dropdown">

              <div className="dropdown-user">
                <strong>
                  fanHub admin
                </strong>

                <span>
                  admin@fanhub.com
                </span>
              </div>

              <button type="button">
                my profile
              </button>

              <button type="button">
                settings
              </button>

              <div className="dropdown-line"></div>

              <button
                type="button"
                className="logout-btn"
              >
                logout
              </button>

            </div>
          )}

        </div>
      </div>

    </header>
  );
}

export default AdminHeader;