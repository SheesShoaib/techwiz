import { useState } from "react";

import {
  Search,
  UserPlus,
  Users as UsersIcon,
  UserCheck,
  UserX,
  MoreHorizontal,
  Eye,
  Ban,
  CheckCircle,
  X,
  Mail,
  CalendarDays,
  Shield,
} from "lucide-react";

import "../../styles/admin/users.css";

function Users() {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [status, setStatus] = useState("all");
  const [selectedUser, setSelectedUser] =
    useState(null);

  /* filhal dummy users hain, backend ke bad api se ayenge */
  const users = [
    {
      id: 1,
      name: "alex morgan",
      username: "@alexverse",
      email: "alex@example.com",
      role: "user",
      status: "active",
      fandom: "anime",
      joined: "18 sep 2026",
      avatar: "AM",
    },
    {
      id: 2,
      name: "mina park",
      username: "@minaneon",
      email: "mina@example.com",
      role: "creator",
      status: "active",
      fandom: "k-pop",
      joined: "16 sep 2026",
      avatar: "MP",
    },
    {
      id: 3,
      name: "ryan chen",
      username: "@ryanplays",
      email: "ryan@example.com",
      role: "user",
      status: "inactive",
      fandom: "gaming",
      joined: "14 sep 2026",
      avatar: "RC",
    },
    {
      id: 4,
      name: "sara khan",
      username: "@sarareads",
      email: "sara@example.com",
      role: "creator",
      status: "active",
      fandom: "manga",
      joined: "12 sep 2026",
      avatar: "SK",
    },
    {
      id: 5,
      name: "daniel lee",
      username: "@danielfilms",
      email: "daniel@example.com",
      role: "user",
      status: "active",
      fandom: "movies",
      joined: "09 sep 2026",
      avatar: "DL",
    },
    {
      id: 6,
      name: "emma wilson",
      username: "@emmacosplay",
      email: "emma@example.com",
      role: "creator",
      status: "inactive",
      fandom: "cosplay",
      joined: "05 sep 2026",
      avatar: "EW",
    },
  ];


  /* search aur filters yahan apply ho rhy hain */
  const filteredUsers = users.filter((user) => {
    const searchText = search.toLowerCase();

    const matchSearch =
      user.name.toLowerCase().includes(searchText) ||
      user.email.toLowerCase().includes(searchText) ||
      user.username.toLowerCase().includes(searchText);

    const matchRole =
      role === "all" || user.role === role;

    const matchStatus =
      status === "all" ||
      user.status === status;

    return (
      matchSearch &&
      matchRole &&
      matchStatus
    );
  });


  return (
    <div className="users-page">

      {/* page ka heading */}
      <div className="users-page-top">

        <div>
          <p className="users-page-label">
            community management
          </p>

          <h1>users</h1>

          <p className="users-page-subtitle">
            fanhub+ community ke users ko yahan se
            manage kar sakte ho.
          </p>
        </div>

        <button
          type="button"
          className="add-user-btn"
        >
          <UserPlus size={17} />
          add user
        </button>

      </div>


      {/* users ke quick stats */}
      <div className="user-stats">

        <div className="user-stat-card">
          <span className="user-stat-icon purple">
            <UsersIcon size={19} />
          </span>

          <div>
            <p>total users</p>
            <h3>48,291</h3>
          </div>
        </div>


        <div className="user-stat-card">
          <span className="user-stat-icon green">
            <UserCheck size={19} />
          </span>

          <div>
            <p>active users</p>
            <h3>44,182</h3>
          </div>
        </div>


        <div className="user-stat-card">
          <span className="user-stat-icon blue">
            <Shield size={19} />
          </span>

          <div>
            <p>creators</p>
            <h3>3,482</h3>
          </div>
        </div>


        <div className="user-stat-card">
          <span className="user-stat-icon red">
            <UserX size={19} />
          </span>

          <div>
            <p>inactive</p>
            <h3>4,109</h3>
          </div>
        </div>

      </div>


      {/* users table ka main box */}
      <div className="users-box">

        <div className="users-toolbar">

          <div className="users-search">
            <Search size={16} />

            <input
              type="text"
              placeholder="search user..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />
          </div>


          <div className="users-filters">

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
            >
              <option value="all">
                all roles
              </option>

              <option value="user">
                users
              </option>

              <option value="creator">
                creators
              </option>
            </select>


            <select
              value={status}
              onChange={(e) =>
                setStatus(e.target.value)
              }
            >
              <option value="all">
                all status
              </option>

              <option value="active">
                active
              </option>

              <option value="inactive">
                inactive
              </option>
            </select>

          </div>

        </div>


        {/* users ki table */}
        <div className="users-table-wrap">

          <table className="users-table">

            <thead>
              <tr>
                <th>user</th>
                <th>role</th>
                <th>fandom</th>
                <th>joined</th>
                <th>status</th>
                <th>action</th>
              </tr>
            </thead>


            <tbody>

              {filteredUsers.map((user) => (
                <tr key={user.id}>

                  <td>
                    <div className="table-user">

                      <span className="table-avatar">
                        {user.avatar}
                      </span>

                      <div>
                        <strong>
                          {user.name}
                        </strong>

                        <small>
                          {user.email}
                        </small>
                      </div>

                    </div>
                  </td>


                  <td>
                    <span
                      className={`user-role ${user.role}`}
                    >
                      {user.role}
                    </span>
                  </td>


                  <td>
                    <span className="user-fandom">
                      {user.fandom}
                    </span>
                  </td>


                  <td>
                    {user.joined}
                  </td>


                  <td>
                    <span
                      className={`user-status ${user.status}`}
                    >
                      <i></i>
                      {user.status}
                    </span>
                  </td>


                  <td>
                    <div className="user-actions">

                      <button
                        type="button"
                        title="view user"
                        onClick={() =>
                          setSelectedUser(user)
                        }
                      >
                        <Eye size={16} />
                      </button>

                      <button
                        type="button"
                        title="more options"
                      >
                        <MoreHorizontal
                          size={17}
                        />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>


          {/* filter ke bad koi user na mile */}
          {filteredUsers.length === 0 && (
            <div className="no-users">
              <UsersIcon size={30} />

              <h3>no user found</h3>

              <p>
                search ya filters change karke
                dobara try karo.
              </p>
            </div>
          )}

        </div>


        {/* table ka footer */}
        <div className="users-table-footer">

          <p>
            showing{" "}
            <strong>
              {filteredUsers.length}
            </strong>{" "}
            users
          </p>

          <div className="pagination">
            <button type="button">
              previous
            </button>

            <button
              type="button"
              className="active"
            >
              1
            </button>

            <button type="button">
              2
            </button>

            <button type="button">
              3
            </button>

            <button type="button">
              next
            </button>
          </div>

        </div>

      </div>


      {/* user detail modal */}
      {selectedUser && (
        <div
          className="user-modal-bg"
          onClick={() =>
            setSelectedUser(null)
          }
        >

          <div
            className="user-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="user-modal-head">

              <div>
                <p>user details</p>
                <h3>
                  community profile
                </h3>
              </div>

              <button
                type="button"
                onClick={() =>
                  setSelectedUser(null)
                }
              >
                <X size={18} />
              </button>

            </div>


            <div className="modal-user-profile">

              <span className="modal-avatar">
                {selectedUser.avatar}
              </span>

              <div>
                <h2>
                  {selectedUser.name}
                </h2>

                <p>
                  {selectedUser.username}
                </p>
              </div>

            </div>


            <div className="user-detail-list">

              <div>
                <span>
                  <Mail size={15} />
                  email
                </span>

                <strong>
                  {selectedUser.email}
                </strong>
              </div>


              <div>
                <span>
                  <Shield size={15} />
                  role
                </span>

                <strong>
                  {selectedUser.role}
                </strong>
              </div>


              <div>
                <span>
                  <CalendarDays size={15} />
                  joined
                </span>

                <strong>
                  {selectedUser.joined}
                </strong>
              </div>


              <div>
                <span>
                  <UsersIcon size={15} />
                  favorite fandom
                </span>

                <strong>
                  {selectedUser.fandom}
                </strong>
              </div>

            </div>


            <div className="user-modal-actions">

              {selectedUser.status ===
              "active" ? (
                <button
                  type="button"
                  className="disable-user-btn"
                >
                  <Ban size={15} />
                  deactivate user
                </button>
              ) : (
                <button
                  type="button"
                  className="activate-user-btn"
                >
                  <CheckCircle size={15} />
                  activate user
                </button>
              )}

              <button
                type="button"
                className="close-modal-btn"
                onClick={() =>
                  setSelectedUser(null)
                }
              >
                close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Users;