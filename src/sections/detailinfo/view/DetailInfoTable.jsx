import React from 'react';
import Table from './Table';
import { useQuery } from '@tanstack/react-query';

function DetailInfoTable() {
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  if (isPending) return 'Loading...';
  if (error) return `An error has occurred:  + ${error.message}`;
  console.log(data);
  const info = data;
  return (
    <div>
      <div></div>
      <div className="max-w-6xl bg-white rounded-6xl mx-auto">
        {/* ------------------------SearchBar-------------------------------- */}
        <div className="bg-white flex items-center justify-between p-6 dark:border-neutral-700">
          <div>
            <label
              for="default-search"
              class="text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-400 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search User"
              />
            </div>
          </div>
        </div>
        {/* ------------------------SearchBar-------------------------------- */}
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium dark:border-neutral-500 bg-neutral-100">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-4">
                        UserName
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Phone
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Website
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Company
                      </th>
                    </tr>
                  </thead>
                  {info &&
                    info.map((item) => (
                      <tr className="border-b transition duration-150 ease-in-out hover:bg-neutral-100">
                        <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
                        <td className="whitespace-nowrap px-6 py-4 font-semibold">{item.name}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.username}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.address.street}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.phone}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.website}</td>
                        <td className="whitespace-nowrap px-6 py-4">{item.company.name}</td>
                      </tr>
                    ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailInfoTable;
