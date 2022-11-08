import {
  CalendarIcon,
  DocumentIcon,
  ListBulletIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const listMenu = [
    {
      name: 'Home',
      url: '/',
      icon: CalendarIcon,
    },
    {
      name: 'Pengajuan',
      url: '/reservasi',
      icon: ListBulletIcon,
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: DocumentIcon,
    },
  ];

  return (
    <nav className="fixed top-0 w-44 box-border border-r border-gray-200 bg-white h-screen z-10">
      <div className="relative flex flex-col justify-between h-full items-center p-4">
        {/* Logo App */}
        <div className="relative pt-2">
          <h1 className="text-3xl font-semibold leading-relaxed text-center ">
            BMR
          </h1>
        </div>
        {/* Content */}
        <div className="relative grid gap-8 -mt-4">
          {listMenu.map((item, index) => (
            <Link href={item.url} key={index}>
              <item.icon
                className={[
                  'h-8  hover:text-orange-500 transition-all duration-300 cursor-pointer',
                  router.pathname === item.url
                    ? 'text-orange-500'
                    : 'text-zinc-400',
                ].join(' ')}
              />
            </Link>
          ))}
        </div>
        {/* Logout */}
        <div className="pb-8">
          <LockClosedIcon className="h-8 text-gray-400 hover:text-orange-500 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
