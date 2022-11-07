import {
  DocumentIcon,
  ListBulletIcon,
  LockClosedIcon,
  PlusIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  return (
    <nav className="fixed top-0 w-44 box-border border-r border-gray-200 bg-white h-screen z-10">
      <div className="relative flex flex-col justify-between h-full items-center p-4">
        {/* Logo App */}
        <div className="relative text-3xl font-semibold leading-relaxed pt-2">
          BMR
        </div>
        {/* Content */}
        <div className="relative grid gap-8 -mt-4">
          <CalendarIcon className="h-8 text-orange-500 hover:text-orange-500 transition-all duration-300 cursor-pointer" />
          <ListBulletIcon className="h-8 text-zinc-500 hover:text-orange-500 transition-all duration-300 cursor-pointer" />
          <DocumentIcon className="h-8 text-zinc-500 hover:text-orange-500 transition-all duration-300 cursor-pointer" />
        </div>
        {/* Logout */}
        <div className="pb-8">
          <LockClosedIcon className="h-8 text-gray-400 hover:text-orange-500 transition-all duration-300 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}
