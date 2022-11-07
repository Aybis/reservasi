import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { convertDate } from '../utils/convertDate';
import Layout from './components/includes';
import { Aside, Modals } from './components';

export default function Home() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const nameOfMonth = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Hook
  const [showModalForm, setshowModalForm] = useState(false);
  const [showDetail, setshowDetail] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [listDay, setlistDay] = useState([]);
  const [dateSelected, setdateSelected] = useState({
    date: {},
    event: [],
  });
  const [date, setdate] = useState({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });

  const [dataEventFromLocalStorage, setdataEventFromLocalStorage] = useState(
    [],
  );

  const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16),
    );
  };

  const [formBooking, setformBooking] = useState({
    id: '',
    nik: '',
    title: '',
    date: '',
    start_time: '',
    end_time: '',
    description: '',
  });

  // get date of first month
  const firstDay = new Date(date.year, date.month, 1).getDay();

  // push length of firstDay to array
  const pushArrayEmpty = () => {
    for (let i = 0; i < firstDay; i++) {
      setlistDay((prev) => [...prev, '']);
    }
  };

  const changeNextMonth = () => {
    if (date.month === 11) {
      setdate({ month: 0, year: date.year + 1 });
    } else {
      setdate({ month: date.month + 1, year: date.year });
    }
  };

  const changePrevMonth = () => {
    if (date.month === 0) {
      setdate({ month: 11, year: date.year - 1 });
    } else {
      setdate({ month: date.month - 1, year: date.year });
    }
  };

  const getAllDaysInMonth = (month, year) =>
    Array.from(
      { length: new Date(year, month, 0).getDate() }, // get next month, zeroth's (previous) day
      (_, i) => new Date(year, month - 1, i + 1), // get current month (0 based index)
    );

  // Handler click detail calendar date
  const handlerClickDate = (date, event) => {
    setshowDetail(true);
    setdateSelected({ date, event });
  };

  // Function Insert Data
  const insertDataEventToLocalStorage = (data) => {
    const dataEvent = localStorage.getItem('dataEvent')
      ? JSON.parse(localStorage.getItem('dataEvent') ?? '')
      : [];
    dataEvent.push(data);
    localStorage.setItem('dataEvent', JSON.stringify(dataEvent));
    setdataEventFromLocalStorage(dataEvent);
  };

  // Function Delete Data
  const deleteDataFromLocalStorage = (id, data) => {
    console.log(id, data);
    setisLoading(true);
    const newData = data?.event?.filter((item) => item.id !== id);
    localStorage.setItem('dataEvent', JSON.stringify(newData));
    setdataEventFromLocalStorage(newData);
    setdateSelected({
      date: data.date,
      event: newData,
    });
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  };

  // handler submit form
  const handlerSubmit = (event) => {
    event.preventDefault();
    setisLoading(true);
    formBooking.id = uuidv4();
    insertDataEventToLocalStorage(formBooking);

    setTimeout(() => {
      setisLoading(false);
      setshowModalForm(false);

      // reset all form
      setformBooking({
        id: '',
        nik: '',
        title: '',
        date: '',
        start_time: '',
        end_time: '',
        description: '',
      });
    }, 300);
  };

  // handler onchange input form
  const handlerChangeForm = (e) => {
    setformBooking({ ...formBooking, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('dataEvent')) ?? [];

    setlistDay([]);
    pushArrayEmpty();

    //   set date of month to list data
    const result = getAllDaysInMonth(date.month + 1, date.year).map((x) => {
      return {
        day: x.toLocaleString('en-EN', {
          weekday: 'short',
        }),
        date: x.toLocaleString('en-EN', {
          day: 'numeric',
        }),
        uniq: x.toLocaleString('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        }),
        timestamp: x.toLocaleString('en-EN', {
          month: 'long',
          day: 'numeric',
          weekday: 'long',
          year: 'numeric',
        }),
      };
    });

    setlistDay((prev) => [...prev, ...result]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date, firstDay, dataEventFromLocalStorage]);

  return (
    <Layout pageTitle="Home" metaDescription="This is the home page">
      {/* Content */}
      <div className="relative p-4 md:py-6 inset-0 w-full h-full box-border md:px-8">
        {/* Header Content */}
        <div className="relative flex flex-col md:flex-row justify-between items-start">
          {/* Heading  */}
          <div className="relative flex flex-col md:flex-row lg:w-1/2">
            <div>
              <div className="relative flex gap-3 items-end">
                <h1 className="text-4xl font-bold text-zinc-900 leading-relaxed transition-all duration-300">
                  {nameOfMonth[date.month]}
                </h1>
                <h1 className="text-4xl font-bold text-zinc-900 leading-relaxed transition-all duration-300">
                  {date.year}
                </h1>
              </div>
              <div className="relative border-b flex items-center pb-2 w-fit h-fit gap-2 mt-2">
                <div
                  onClick={() => changePrevMonth()}
                  className="cursor-pointer">
                  <ChevronLeftIcon className="h-6 text-zinc-800" />
                </div>
                <div
                  onClick={() =>
                    setdate({
                      month: new Date().getMonth(),
                      year: new Date().getFullYear(),
                    })
                  }
                  className="relative flex justify-center items-center cursor-pointer">
                  <div className="h-2.5 w-2.5 rounded-full bg-zinc-700"></div>
                </div>
                <div
                  onClick={() => changeNextMonth()}
                  className="cursor-pointer">
                  <ChevronRightIcon className="h-6 text-zinc-800" />
                </div>
              </div>
            </div>
          </div>

          {/* Button Add Event */}
          <div className="relative flex w-full justify-end mt-6">
            <button
              onClick={() => setshowModalForm(true)}
              className="relative flex px-4 py-2 bg-zinc-800 text-white font-medium leading-relaxed tracking-wide shadow-lg shadow-gray-800/20 hover:bg-zinc-700 transition-all duration-300">
              <PlusIcon className="h-6 mr-2" />
              Booking room
            </button>
          </div>
        </div>

        {/* Body Content */}
        <div className="relative mt-12 grid grid-cols-7 gap-1 md:gap-4 md:px-8">
          {/* Card Name of Day */}
          {days.map((day, index) => {
            return (
              <div key={index} className="relative p-1">
                <h1
                  className={`text-sm md:text-xl text-center ${
                    convertDate('namaHari') === day &&
                    date.month === new Date().getMonth() &&
                    date.year === new Date().getFullYear()
                      ? 'text-orange-500 font-semibold'
                      : 'text-zinc-500  font-medium'
                  } uppercase`}>
                  {day.substring(0, 3)}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="relative mt-8 grid grid-cols-7 gap-1 md:gap-4 md:px-8">
          {/* Card Date */}
          {listDay.map((day, index) => {
            return day === '' ? (
              <div key={index} className="relative"></div>
            ) : (
              <div
                key={index}
                onClick={(e) =>
                  handlerClickDate(
                    day,
                    dataEventFromLocalStorage.filter(
                      (data) =>
                        convertDate('tanggal', data.date) === +day.date &&
                        convertDate('bulan') === +date.month + 1 &&
                        convertDate('tahun') === +date.year,
                    ),
                  )
                }
                className={[
                  'relative border-t md:border-t-2 h-24 max-h-full md:py-4 cursor-pointer hover:scale-105 transition-all duration-300',
                  day.timestamp === convertDate('timestampEN')
                    ? 'border-orange-500 text-orange-600 bg-zinc-100 md:px-4'
                    : 'border-zinc-500 md:border-zinc-800 text-zinc-900',
                ].join(' ')}>
                <h1 className="text-lg md:text-3xl font-semibold ">
                  {day.date}
                </h1>

                {/* check event date with day.date */}
                <div key={index} className="relative flex gap-2 mt-6">
                  {dataEventFromLocalStorage
                    .filter(
                      (data) =>
                        convertDate('tanggal', data.date) === +day.date &&
                        convertDate('bulan') === +date.month + 1 &&
                        convertDate('tahun') === +date.year,
                    )
                    ?.map((x, index) => {
                      return (
                        <div
                          key={index}
                          className="relative flex flex-wrap gap-1">
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sidebar Detail Event */}
      <Aside
        showDetail={showDetail}
        dateSelected={dateSelected}
        isLoading={isLoading}
        deleteDataFromLocalStorage={deleteDataFromLocalStorage}
        setShowDetail={setshowDetail}
        setshowModalForm={setshowModalForm}
      />

      {/* Modal Form */}

      <Modals
        modalTitle="Form Booking"
        showModalForm={showModalForm}
        handlerCloseModal={setshowModalForm}>
        <form onSubmit={handlerSubmit} className="relative">
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
      </Modals>
    </Layout>
  );
}
