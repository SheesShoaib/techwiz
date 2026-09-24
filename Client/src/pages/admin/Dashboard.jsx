import {
  Users,
  FileText,
  CalendarDays,
  ShoppingBag,
  TrendingUp,
  ArrowUpRight,
  Eye,
  Clock,
  Plus,
  MoreHorizontal,
} from "lucide-react";

import "../../styles/admin/dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-page">

      {/* admin dashboard ka top section */}
      <div className="dashboard-top">
        <div>
          <p className="dashboard-label">admin dashboard</p>

          <h1>
            welcome back, <span>admin</span>
          </h1>

          <p className="dashboard-subtitle">
            fanhub+ ki latest activity aur platform overview yahan
            dekh sakte ho.
          </p>
        </div>

        <button className="add-content-btn">
          <Plus size={17} />
          add content
        </button>
      </div>


      {/* main stats cards */}
      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-card-head">
            <div className="stat-icon purple">
              <Users size={20} />
            </div>

            <MoreHorizontal size={18} />
          </div>

          <p>total users</p>

          <h2>48,291</h2>

          <div className="stat-bottom">
            <span>
              <ArrowUpRight size={13} />
              12.4%
            </span>

            <small>last month se</small>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-card-head">
            <div className="stat-icon blue">
              <FileText size={20} />
            </div>

            <MoreHorizontal size={18} />
          </div>

          <p>published content</p>

          <h2>12,847</h2>

          <div className="stat-bottom">
            <span>
              <ArrowUpRight size={13} />
              8.7%
            </span>

            <small>last month se</small>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-card-head">
            <div className="stat-icon pink">
              <CalendarDays size={20} />
            </div>

            <MoreHorizontal size={18} />
          </div>

          <p>upcoming events</p>

          <h2>284</h2>

          <div className="stat-bottom">
            <span>
              <ArrowUpRight size={13} />
              16 new
            </span>

            <small>is month</small>
          </div>
        </div>


        <div className="stat-card">
          <div className="stat-card-head">
            <div className="stat-icon green">
              <ShoppingBag size={20} />
            </div>

            <MoreHorizontal size={18} />
          </div>

          <p>store revenue</p>

          <h2>$84.2k</h2>

          <div className="stat-bottom">
            <span>
              <ArrowUpRight size={13} />
              18.2%
            </span>

            <small>last month se</small>
          </div>
        </div>

      </div>


      {/* chart aur fandom stats */}
      <div className="dashboard-middle">

        <div className="dashboard-box growth-box">

          <div className="box-heading">
            <div>
              <p>platform growth</p>
              <h3>user growth</h3>
            </div>

            <div className="growth-rate">
              <TrendingUp size={16} />
              +24.8%
            </div>
          </div>


          {/* simple custom chart */}
          <div className="user-chart">

            <div className="chart-lines">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="bars">

              <div className="bar-item">
                <div className="bar bar-1"></div>
                <small>apr</small>
              </div>

              <div className="bar-item">
                <div className="bar bar-2"></div>
                <small>may</small>
              </div>

              <div className="bar-item">
                <div className="bar bar-3"></div>
                <small>jun</small>
              </div>

              <div className="bar-item">
                <div className="bar bar-4"></div>
                <small>jul</small>
              </div>

              <div className="bar-item">
                <div className="bar bar-5"></div>
                <small>aug</small>
              </div>

              <div className="bar-item">
                <div className="bar bar-6"></div>
                <small>sep</small>
              </div>

            </div>

          </div>
        </div>


        {/* fandom distribution */}
        <div className="dashboard-box fandom-box">

          <div className="box-heading">
            <div>
              <p>community</p>
              <h3>top fandoms</h3>
            </div>
          </div>


          <div className="fandom-stat">

            <div className="fandom-name">
              <span>anime</span>
              <small>18.4k</small>
            </div>

            <div className="progress">
              <div
                className="progress-value anime"
                style={{ width: "86%" }}
              ></div>
            </div>

          </div>


          <div className="fandom-stat">

            <div className="fandom-name">
              <span>gaming</span>
              <small>14.8k</small>
            </div>

            <div className="progress">
              <div
                className="progress-value gaming"
                style={{ width: "72%" }}
              ></div>
            </div>

          </div>


          <div className="fandom-stat">

            <div className="fandom-name">
              <span>manga</span>
              <small>11.2k</small>
            </div>

            <div className="progress">
              <div
                className="progress-value manga"
                style={{ width: "58%" }}
              ></div>
            </div>

          </div>


          <div className="fandom-stat">

            <div className="fandom-name">
              <span>movies</span>
              <small>8.9k</small>
            </div>

            <div className="progress">
              <div
                className="progress-value movies"
                style={{ width: "45%" }}
              ></div>
            </div>

          </div>


          <div className="fandom-stat">

            <div className="fandom-name">
              <span>k-pop</span>
              <small>7.3k</small>
            </div>

            <div className="progress">
              <div
                className="progress-value kpop"
                style={{ width: "36%" }}
              ></div>
            </div>

          </div>

        </div>

      </div>


      {/* recent activity aur popular content */}
      <div className="dashboard-bottom">

        <div className="dashboard-box">

          <div className="box-heading">
            <div>
              <p>latest updates</p>
              <h3>recent activity</h3>
            </div>

            <button className="view-btn">
              view all
            </button>
          </div>


          <div className="activity-item">
            <div className="activity-icon">
              <FileText size={17} />
            </div>

            <div className="activity-info">
              <h4>new article published</h4>
              <p>the future of cyber fantasy is now live.</p>
            </div>

            <span className="activity-time">
              <Clock size={12} />
              4 min
            </span>
          </div>


          <div className="activity-item">
            <div className="activity-icon blue-icon">
              <Users size={17} />
            </div>

            <div className="activity-info">
              <h4>new users joined</h4>
              <p>124 new members joined fanhub+ today.</p>
            </div>

            <span className="activity-time">
              <Clock size={12} />
              22 min
            </span>
          </div>


          <div className="activity-item">
            <div className="activity-icon pink-icon">
              <CalendarDays size={17} />
            </div>

            <div className="activity-info">
              <h4>event submitted</h4>
              <p>tokyo anime night is waiting for review.</p>
            </div>

            <span className="activity-time">
              <Clock size={12} />
              46 min
            </span>
          </div>


          <div className="activity-item">
            <div className="activity-icon green-icon">
              <ShoppingBag size={17} />
            </div>

            <div className="activity-info">
              <h4>new store order</h4>
              <p>collector mystery box order received.</p>
            </div>

            <span className="activity-time">
              <Clock size={12} />
              1 hour
            </span>
          </div>

        </div>


        {/* popular content */}
        <div className="dashboard-box">

          <div className="box-heading">
            <div>
              <p>engagement</p>
              <h3>popular content</h3>
            </div>

            <button className="view-btn">
              view all
            </button>
          </div>


          <div className="popular-item">
            <span className="rank">01</span>

            <div className="popular-info">
              <h4>the last arc</h4>
              <p>anime</p>
            </div>

            <span className="views">
              <Eye size={14} />
              128k
            </span>
          </div>


          <div className="popular-item">
            <span className="rank">02</span>

            <div className="popular-info">
              <h4>shadow protocol</h4>
              <p>gaming</p>
            </div>

            <span className="views">
              <Eye size={14} />
              96k
            </span>
          </div>


          <div className="popular-item">
            <span className="rank">03</span>

            <div className="popular-info">
              <h4>neon hearts</h4>
              <p>k-pop</p>
            </div>

            <span className="views">
              <Eye size={14} />
              84k
            </span>
          </div>


          <div className="popular-item">
            <span className="rank">04</span>

            <div className="popular-info">
              <h4>beyond earth</h4>
              <p>movies</p>
            </div>

            <span className="views">
              <Eye size={14} />
              71k
            </span>
          </div>

        </div>

      </div>


      {/* recent orders */}
      <div className="dashboard-box orders-box">

        <div className="box-heading">
          <div>
            <p>store</p>
            <h3>recent orders</h3>
          </div>

          <button className="view-btn">
            view all orders
          </button>
        </div>


        <div className="orders-table-wrap">

          <table className="orders-table">

            <thead>
              <tr>
                <th>order</th>
                <th>customer</th>
                <th>product</th>
                <th>amount</th>
                <th>status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>#fh-10482</td>
                <td>alex morgan</td>
                <td>collector mystery box</td>
                <td>$99.99</td>
                <td>
                  <span className="status paid">
                    paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>#fh-10481</td>
                <td>mina park</td>
                <td>anime hoodie</td>
                <td>$69.99</td>
                <td>
                  <span className="status paid">
                    paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>#fh-10480</td>
                <td>ryan chen</td>
                <td>cyber warrior figure</td>
                <td>$84.99</td>
                <td>
                  <span className="status pending">
                    pending
                  </span>
                </td>
              </tr>

              <tr>
                <td>#fh-10479</td>
                <td>sara khan</td>
                <td>manga collector box</td>
                <td>$59.99</td>
                <td>
                  <span className="status paid">
                    paid
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;