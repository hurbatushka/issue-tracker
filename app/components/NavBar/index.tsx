'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { GrBug } from 'react-icons/gr';
import classnames from 'classnames';

const links = [
  { label: 'Dashboard', href: '/' },
  { label: 'Issue', href: '/issues' },
];

const NavBar = () => {
  const currentPage = usePathname();

  return (
    <nav className="flex space-x-16 border-b mb-5 px-5 h-16 items-center">
      <Link href="/">
        <GrBug />
      </Link>
      <ul className="flex space-x-12 ">
        {links.map((link, index) => (
          <li
            className={classnames({
              'text-zinc-900': currentPage === link.href,
              'text-zinc-400': currentPage !== link.href,
              'hover:text-zinc-900 transition-colors': true,
            })}
            key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
