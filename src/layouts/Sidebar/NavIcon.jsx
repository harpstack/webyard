import React from "react";

import {
  MdExtension,
  MdDashboard,
  MdPostAdd,
  MdSettings,
} from "react-icons/md";

const icons = {
  dashboard: <MdDashboard />,
  post: <MdPostAdd />,
  setting: <MdSettings />,
};

export default function navIcon({ id }) {
  return icons[id] || <MdExtension />;
}
