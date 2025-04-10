'use client';

import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
  {
    title: '',
    items: [
      {
        icon: '/dashboard.png',
        label: 'Dashboard',
        href: '/dashboard',
      },
      {
        icon: '/skill_test.png',
        label: 'Skill Test',
        href: '/skilltest',
      },
      {
        icon: '/Internship.png',
        label: 'Internship',
        href: '/internship',
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="w-16 sm:w-24 md:w-32 lg:w-60 min-h-screen bg-white shadow-md p-4 flex flex-col gap-4 ">
      {menuItems.map((group, index) => (
        <div className="flex flex-col gap-3 pt-5" key={index}>
          {group.items.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              className="flex items-center gap-4 py-2 px-3 rounded-full hover:bg-blue-100 transition-colors"
            >
              <Image src={item.icon} alt={item.label} width={20} height={20} />
              <span className="hidden lg:inline text-black font-bold">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
