import { XMarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
  modalTitle: string;
  showModalForm: boolean;
  handlerCloseModal: (val: boolean) => void;
}

export default function Index(props: LayoutProps) {
  const { children, modalTitle, showModalForm, handlerCloseModal } = props;

  return (
    <div
      className={[
        'fixed  backdrop-blur-sm mx-auto inset-0 overflow-hidden flex justify-center items-center transition-all duration-300',
        showModalForm
          ? 'opacity-100 z-50 h-screen w-full'
          : 'opacity-0 w-0 h-2 z-0',
      ].join(' ')}>
      <div className="relative mx-auto container max-w-3xl  bg-white p-4 rounded-lg shadow-lg shadow-gray-500/50">
        {/* Header Modals */}
        <div className="relative flex justify-between items-center">
          <h1 className="text-xl font-semibold text-zinc-800">{modalTitle}</h1>
          <button
            onClick={() => handlerCloseModal(false)}
            className="relative flex justify-center items-center p-2 hover:bg-zinc-50 rounded-lg transition-all duration-300 text-zinc-700">
            <XMarkIcon className="h-8" />
          </button>
        </div>

        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
