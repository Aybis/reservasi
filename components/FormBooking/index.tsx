interface LayoutProps {
  children: React.ReactNode;
  formBooking: any;
  isLoading: boolean;
  handlerSubmit: () => void;
  handlerChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Index(props: LayoutProps) {
  const { children, formBooking, isLoading, handlerSubmit, handlerChangeForm } =
    props;

  return (
    <form
      onSubmit={handlerSubmit}
      className="relative bg-white shadow-lg p-6 rounded-lg w-full md:w-1/2 border-2 border-gray-200">
      {/* Content Modal */}

      <div className="relative mt-4">
        <div className="relative grid gap-4">
          {Object.keys(formBooking)
            .filter((form) => form !== 'id')
            .map((x, index) => {
              return (
                <div key={index} className="relative">
                  <label className="text-zinc-800 font-medium text-sm uppercase">
                    {x.replace('_', ' ')}
                  </label>
                  <input
                    type={
                      x === 'date'
                        ? 'date'
                        : x.includes('time')
                        ? 'time'
                        : 'text'
                    }
                    name={x}
                    required={x === 'description' ? false : true}
                    className="w-full py-3 px-4 border-2 border-gray-300 rounded-md mt-2 font-medium text-zinc-800 text-sm"
                    placeholder={`Masukan ${x}`}
                    value={formBooking[x]}
                    onChange={(e) => handlerChangeForm(e)}
                  />
                </div>
              );
            })}

          <button
            disabled={isLoading}
            className="disabled:cursor-not-allowed disabled:bg-zinc-400 relative bg-zinc-900 text-white rounded-md font-medium py-3 mt-6 hover:bg-zinc-700 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
