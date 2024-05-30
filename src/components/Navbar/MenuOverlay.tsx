import React from "react";
import NavLink from "./NavLink";

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