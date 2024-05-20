import React from "react";
import NavLink from "./NavLink";

import { motion } from "framer-motion"

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

const MenuOverlay = ({ links }: { links: Array<{ path: string, title: string }> }, {isOpen}: { isOpen: boolean }) => {
    return (
        <ul id="menuOverlay" className="flex flex-col py-4 items-start bg-gold text-right">
            {links.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay;