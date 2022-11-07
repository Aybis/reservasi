import { TrashIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface LayoutProps {
  children: React.ReactNode;
  showDetail: boolean;
  dataSelected: object;
  dateSelected: any;
  isLoading: boolean;
  deleteDataFromLocalStorage: (x: any, y: any) => void;
  setShowDetail: (value: boolean) => void;
  setshowModalForm: (value: boolean) => void;
}

export default function Aside(props: LayoutProps) {
  const {
    showDetail,
    setShowDetail,
    isLoading,
    dateSelected,
    setshowModalForm,
    deleteDataFromLocalStorage,
  } = props;

  return (
    <div
      className={[
        'fixed top-0 bottom-0 right-0  bg-zinc-50/90  lg:bg-white/50 border-2 backdrop-blur-md transition-all duration-300',
        showDetail
          ? 'opacity-100 z-40 w-full h-screen md:w-1/3 xl:w-1/4 max-h-full'
          : 'opacity-0 w-0 h-0 -z-30',
      ].join(' ')}>
      <div className="relative p-6 w-full h-full">
        <button
          className={[
            'relative h-8 w-8 cursor-pointer transition-all duration-500 ease-in-out',
            showDetail ? 'animate-none' : 'animate-spin',
          ].join(' ')}
          onClick={() => setShowDetail(false)}>
          <XMarkIcon className="h-full" />
        </button>
        {/* Header Sidebar */}
        <div className="relative grid max-h-full mt-2">
          <h1 className="text-zinc-800 text-2xl font-bold leading-relaxed">
            Detail of Day
          </h1>

          <h2 className="text-xl mt-4 text-zinc-700">
            {dateSelected?.date?.timestamp?.replace(',', ' ')}
          </h2>
        </div>
        <hr className="w-full h-1 mt-2 border-t bg-zinc-400 relative" />
        <div className="relative flex justify-end">
          <button
            onClick={() => setshowModalForm(true)}
            className="relative mt-4 bg-zinc-800 text-white px-4 py-2 text-sm font-medium leading-relaxed tracking-wide">
            + Booking
          </button>
        </div>
        {/* Content Event */}
        {!isLoading && (
          <div className="relative grid gap-4 mt-8">
            {dateSelected?.event?.length === 0 ? (
              <div className="relative p-4 flex justify-center items-center text-gray-600 font-light leading-relaxed tracking-wide">
                <p>Belum ada Booking Ruang Meeting</p>
              </div>
            ) : (
              dateSelected?.event?.map((x: any, index: number) => {
                console.log(x);
                return (
                  <div
                    key={index}
                    className="relative p-4 bg-white shadow-lg shadow-gray-200/40 rounded-lg border border-gray-200">
                    <h1 className="text-3xl font-semibold text-zinc-800">
                      {x.start_time} - {x.end_time} WIB
                    </h1>
                    <h1 className="text-xl font-semibold text-zinc-800 capitalize mt-2">
                      {x.title.toLowerCase()}
                    </h1>
                    <p className="text-sm font-light text-zinc-800 mt-1">
                      {x.description}
                    </p>

                    <button
                      className="mt-4"
                      onClick={() =>
                        deleteDataFromLocalStorage(x.id, dateSelected)
                      }>
                      <TrashIcon className="h-5 text-orange-500" />
                    </button>
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </div>
  );
}
