import Link from 'next/link';
import React from 'react';
import { GrBug } from 'react-icons/gr';

const index = () => {
  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issue', href: '/issues' },
  ];
  return (
    <nav className="flex space-x-16 border-b mb-5 px-5 h-16 items-center">
      <Link href="/">
        <GrBug />
      </Link>
      <ul className="flex space-x-12 ">
        {links.map((link, index) => (
          <li className="text-zinc-400 hover:text-zinc-900 transition-colors" key={index}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default index;
