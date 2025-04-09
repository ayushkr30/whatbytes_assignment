import Link from 'next/link';
import Image from 'next/image';

const menuItems = [
    {
        title: '',
        items: [
            {
                icon: '/dashboard.png',
                label: 'Dashboard',
                link: "/dashboard",
                href: '/dashboard',
            },
            {
                icon: '/skill_test.png',
                label: 'Skill Test',
                link: '/skilltest',
                href: '/skilltest',
            },
            {
                icon: '/Internship.png',
                label: 'Internship',
                link: '/internship',
                href: '/internship',
            },
        ],
    },
];

const Menu = () => {   
    return (
        <div className='mt-4 text-sm'>
            {menuItems.map(i => (
                <div className='flex flex-col gap-2' key={i.title}>
                    <span className='hidden lg:block text-gray-400 font-light my-4'>{i.title}</span>
                {i.items.map((item) => {
                    return (
                        <Link
                        href={item.href}
                        key={item.label}
                        className="flex items-center justify-center lg:justify-start gap-4 text-black-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                      >
                        <Image src={item.icon} alt="" width={20} height={20} />
                        <span className="hidden lg:block">{item.label}</span>
                      </Link>
                    )
                })}
                </div>
            ))}
        </div>
    )
}

export default Menu;