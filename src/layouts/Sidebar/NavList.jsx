import React from "react";

export default function NavList({ children }) {
  return (
    <nav>
      <ul>{children}</ul>
    </nav>
  );
}
