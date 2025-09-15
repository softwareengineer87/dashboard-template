'use client';

import { Auth } from "@/data/contexts/Auth";
import { IconDashboard } from "@tabler/icons-react";
import { useContext } from "react";
import './header.css';

function Header() {

  const { business } = useContext(Auth);

  return (
    <header className="header-container">
      <div className="header">
        <IconDashboard size={20} />
        <p>Dashboard - {business.payload?.name}</p>
      </div>
    </header>
  );
}

export { Header }

