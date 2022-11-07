import { Square2StackIcon, UserIcon } from '@heroicons/react/24/outline';
import { BellIcon } from '@heroicons/react/24/solid';

export default function Header() {
  return (
    <div className="relative top-0 ml-44 p-6 bg-white box-border">
      <div className="relative flex justify-between items-center text-zinc-800">
        <div className="relative">
          <span className="font-light text-lg">Welcome back,</span>
          <h1 className="text-2xl font-semibold leading-relaxed tracking-wide">
            Abdul Muchtar Astria
          </h1>
        </div>
        <div className="relative grid grid-cols-3 gap-4">
          <BellIcon className="h-10 text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer p-2 hover:bg-zinc-100 rounded-lg" />
          <Square2StackIcon className="h-10 text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer p-2 hover:bg-zinc-100 rounded-lg" />
          <UserIcon className="h-10 text-orange-500 hover:scale-110 transition-all duration-300 cursor-pointer p-2 hover:bg-zinc-100 rounded-lg" />
        </div>
      </div>
    </div>
  );
}
