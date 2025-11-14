import "./Dashboard.css";
import { FiMenu } from "react-icons/fi";
import { IoIosNotifications, IoIosArrowDropdown } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import {
  FaTachometerAlt,
  FaBook,
  FaClipboardList,
  FaCertificate,
  FaUsers,
  FaHeadset,
  FaCode,
  FaGraduationCap,
  FaStar,
  FaLightbulb,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export const Dashboard = () => {
  return (
    <div className="grid-container">
      {/* HEADER */}
      <header className="item header">
        <div className="header-left">
          <FiMenu className="menu-icon" />
          <p className="logo">LMS Dashboard</p>
        </div>
        <div className="header-right">
          <IoIosNotifications />
          <IoSettings />
          <IoIosArrowDropdown />
          <img
            src="https://via.placeholder.com/35"
            alt="User"
            className="user-img"
          />
        </div>
      </header>

      {/* SIDEBAR */}
      <aside className="item sidebar">
        <nav>
          <a href="#" className="active"><FaTachometerAlt /> Dashboard</a>
          <a href="#"><FaBook /> My Courses</a>
          <a href="#"><FaClipboardList /> Assessments</a>
          <a href="#"><FaCertificate /> Certificates</a>
          <a href="#"><FaUsers /> Community</a>
          <a href="#"><FaHeadset /> Support</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main className="item main">
        <div className="progress-circle">
          <h2>Daily Progress</h2>
          <svg>
            <circle cx="45" cy="45" r="36"></circle>
            <circle cx="45" cy="45" r="36"></circle>
          </svg>
          <div className="progress-value">80%</div>
        </div>
        <div className="progress-info">
          <div>
            <p>245 Hours</p>
            <p>12 Learned</p>
          </div>
          <div>
            <p>12 Courses Completed</p>
            <p>7 Streak Days</p>
          </div>
        </div>
      </main>

      {/* BADGES */}
      <section className="item right-top1">
        <h2>Badges Achieved</h2>
        <div className="badge-icons">
          <FaCode className="text-blue" />
          <FaGraduationCap className="text-green" />
          <FaStar className="text-yellow" />
          <FaLightbulb className="text-purple" />
        </div>
      </section>

      {/* UPCOMING ASSESSMENTS */}
      <section className="item right-top2">
        <h2>Upcoming Assessments</h2>
        <ul>
          <li>• Javascript Quiz — Nov 10, 2025</li>
          <li>• Final Project Review — 5 days left</li>
        </ul>
      </section>

      {/* COURSES */}
      <section className="item middle">
        <h2>Courses Enrolled</h2>
      </section>

      <section className="item box1">
        <div className="course-grid">
          {[
            { name: "React Basics", progress: 65 },
            { name: "Javascript Advanced", progress: 50 },
            { name: "UI/UX Design", progress: 25 },
            { name: "UI/UX Design", progress: 25 },
          ].map((course, index) => (
            <div className="course-card" key={index}>
              <div className="course-thumb"></div>
              <h3>{course.name}</h3>
              <div className="progress-bar">
                <div style={{ width: `${course.progress}%` }}></div>
              </div>
              <p>{course.progress}% completed</p>
            </div>
          ))}
        </div>
      </section>

      {/* RECENT ACTIVITY */}
      <section className="item bottom1">
        <h2>Recent Activity</h2>
        <ul>
          <li>Completed: React Basics Module 3</li>
          <li>Attempted: Javascript Quiz (85%)</li>
          <li>Earned: Javascript Master Badge</li>
          <li>Joined: Community Forum - UI/UX Group</li>
        </ul>
      </section>

      {/* SHARE PROGRESS */}
      <section className="item bottom2">
        <h2>Share Your Progress</h2>
        <div className="social-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </section>
    </div>
  );
};
