import React from 'react';
import { Layout } from '../../components';

export default function Reservasi() {
  return (
    <Layout pageTitle="Reservasi" metaDescription="Halaman Reservasi Approval">
      <div className="relative p-3">
        <h1 className="text-3xl font-semibold leading-relaxed tracking-wide">
          List Pengajuan
        </h1>
      </div>

      {/* Section Search */}
      <section className="relative flex flex-wrap gap-4 p-4 items-end">
        <div className="relative grid gap-2 w-1/2">
          <label
            htmlFor="search"
            className="relative text-sm font-medium text-zinc-700">
            Search
          </label>
          <input
            type="text"
            className="px-4 py-2 text-sm rounded-md border border-gray-200 bg-white text-zinc-900"
            name=""
            placeholder="Cari ID, Nama, atau Ruangan"
            id=""
          />
        </div>
        <div className="relative grid gap-2">
          <label
            htmlFor="search"
            className="relative text-sm font-medium text-zinc-700">
            Unit
          </label>
          <select className="px-4 py-2 text-sm rounded-md border border-gray-200 bg-white text-zinc-900 w-44">
            <option value="">Unit A</option>
            <option value="">Unit B</option>
          </select>
        </div>
        <div className="relative grid gap-2">
          <label
            htmlFor="search"
            className="relative text-sm font-medium text-zinc-700">
            Room Meeting
          </label>
          <select className="px-4 py-2 text-sm rounded-md border border-gray-200 bg-white text-zinc-900 w-44">
            <option value="">Room A</option>
            <option value="">Room B</option>
          </select>
        </div>
        <div className="relative grid gap-2">
          <label
            htmlFor="search"
            className="relative text-sm font-medium text-zinc-700">
            Tanggal
          </label>
          <input
            type="date"
            className="px-4 py-2 text-sm rounded-md border border-gray-200 bg-white text-zinc-900 w-44"
            name=""
            id=""
          />
        </div>
        <div className="relative mb-0.5">
          <button className="bg-orange-500 text-white px-5 py-2 text-sm rounded-md">
            Search
          </button>
        </div>
      </section>

      <div className="relative p-4">
        <p>Result : __ pengajuan</p>

        <div className="relative flex flex-wrap gap-4 mt-4">
          {Array.from({ length: 24 }).map((item, index) => (
            <div
              className="relative flex flex-initial w-72 h-32 bg-white border border-gray-200 rounded-md"
              key={index}>
              <div className="relative flex flex-col gap-1 w-24 justify-center items-center p-2 bg-orange-500 text-white rounded-l-md">
                <p className="text-sm leading-relaxed tracking-wider font-light">
                  Desember
                </p>
                <h1 className="text-4xl font-semibold">{index + 1}</h1>
                <h3 className="text-sm mt-3">
                  {(index + 1) % 2 === 0 ? 'A' : 'B'} - 12
                  {index + 1 < 10 ? '0' + index + 1 : index + 1}
                </h3>
              </div>

              <div className="relative flex flex-col justify-between py-2 px-4">
                <div className="relative text-zinc-700">
                  <h1 className="font-medium">Abdul Muchtar</h1>
                  <h4 className="text-sm font-light tracking-wide">
                    IT Management
                  </h4>
                </div>
                <p className="text-sm font-medium text-zinc-800 mt-2">
                  10:20 AM - 14:30 PM
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
