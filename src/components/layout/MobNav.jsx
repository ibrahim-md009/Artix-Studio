import { NavLink } from "react-router-dom";

const navItems = [
  {
    path: "/",
    label: "الرئيسية",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 11.5L12 4l8 7.5" />
        <path d="M6 10.5V19a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-8.5" />
      </svg>
    ),
  },
  {
    path: "/works",
    label: "أعمالنا",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="7" width="18" height="13" rx="2.2" />
        <path d="M8.2 7l1.6-2.6h4.4L15.8 7" />
        <circle cx="12" cy="13.5" r="3.3" />
      </svg>
    ),
  },
  {
    path: "/news",
    label: "الأخبار",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 4.5h12v13a2 2 0 0 0 2 2H6.5a2 2 0 0 1-2-2v-13z" />
        <path d="M16.5 8.5H19v9a2 2 0 0 1-2 2" />
        <path d="M7.5 8.5h6M7.5 11.5h6M7.5 14.5h4" />
      </svg>
    ),
  },
  {
    path: "/faq",
    label: "الأسئلة",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M9.6 9.3a2.5 2.5 0 1 1 3.9 2.1c-.9.6-1.5 1.1-1.5 2.3" />
        <circle cx="12" cy="16.7" r=".35" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    path: "/booking",
    label: "الحجز",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="5.5" width="16" height="15" rx="2.2" />
        <path d="M4 10h16M8 3.5v4M16 3.5v4" />
      </svg>
    ),
  },
];

const BottomNav = () => {
  return (
    <nav className="bottom-nav" id="bottom-nav" aria-label="التنقل الرئيسي">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => `bottom-nav__item ${isActive ? "is-active" : ""}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
