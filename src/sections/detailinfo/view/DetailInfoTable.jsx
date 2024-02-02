import React from 'react';

import Table from '../Table';

function DetailInfoTable() {
  // const [searchQuery, setSearchQuery] = useState('');
  // const [row, setRow] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['userData'],
  //   queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
  //   staleTime: Infinity,
  //   cacheTime: Infinity,
  // });

  // if (isPending) return 'Loading...';
  // if (error) return `An error has occurred: ${error.message}`;

  // Filter Function ..........
  // const filteredData = data.filter(
  //   (item) =>
  //     item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     item.phone.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  // const handleSearchChange = (e) => {
  //   setSearchQuery(e.target.value);
  // };

  // Adding Pagination ..........
  // const indexOfLastRow = currentPage * rowsPerPage;
  // const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  // const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  // const npage = Math.ceil(data.length / rowsPerPage);
  // const numbers  = [...Array(npage + 1).keys()].slice(1);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const handleRowsPerPageChange = (e) => {
  //   setCurrentPage(1); // Reset to first page when changing rows per page
  //   setRowsPerPage(parseInt(e.target.value, 10));
  // };

  // Solving Long Rows Problem ..........

  // const toggle = () => {
  //   setRow(!row);
  //   console.log('Company Row Clicked.......');
  // };
  // const handlerow = (...text) => {
  //   const combinetext = text.join(' ');
  //   if (combinetext.length > 20) {
  //     return row ? combinetext : `${combinetext.slice(0, 20)} See more...`;
  //   }
  //   return combinetext;
  // };
  // return (
  //   <div>
  //     <div className="max-w-6xl bg-white rounded-6xl mx-auto">

  // <div className="bg-white flex items-center justify-between p-6 dark:border-neutral-700">
  //   <label
  //     htmlFor="searchinput"
  //     className="text-sm font-medium text-gray-900 sr-only dark:text-white"
  //   >
  //     Search
  //   </label>
  //   <div className="relative">
  //     <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
  //       <svg
  //         className="w-4 h-4 text-gray-400 dark:text-gray-400"
  //         aria-hidden="true"
  //         xmlns="http://www.w3.org/2000/svg"
  //         fill="none"
  //         viewBox="0 0 20 20"
  //       >
  //         <path
  //           stroke="currentColor"
  //           strokeLinecap="round"
  //           strokeLinejoin="round"
  //           strokeWidth="2"
  //           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
  //         />
  //       </svg>
  //     </div>
  //     <input
  //       type="search"
  //       id="searchinput"
  //       className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-200 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //       placeholder="Search User"
  //       onChange={handleSearchChange}
  //     />
  //   </div>
  // </div>

  //         <div className="flex flex-col overflow-x-auto">
  //           <div className="sm:-mx-6 lg:-mx-8">
  //             <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
  //               <div className="overflow-x-auto">
  //                 <table className="table-auto min-w-full text-left text-sm font-light">
  //                   <thead className="border-b font-medium dark:border-neutral-500 bg-neutral-100">
  //                     <tr>
  //                       <th scope="col" className="px-6 py-4">
  //                         #
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         Name
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         UserName
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         Email
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         Address
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         Phone
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         Website
  //                       </th>
  //                       <th scope="col" className="px-6 py-4">
  //                         Company
  //                       </th>
  //                     </tr>
  //                   </thead>
  //                   <tbody>
  //                     {filteredData &&
  //                       filteredData.map((item) => (
  //                         <tr
  //                           key={item.id}
  //                           className="border-b transition duration-150 ease-in-out hover:bg-neutral-100"
  //                         >
  //                           <td className="whitespace-nowrap px-6 py-4 font-medium">{item.id}</td>
  //                           <td className="whitespace-nowrap px-6 py-4 font-semibold">{item.name}</td>
  //                           <td className="whitespace-nowrap px-6 py-4">{item.username}</td>
  //                           <td className="whitespace-nowrap px-6 py-4">{item.email}</td>
  //                           <td className="whitespace-nowrap px-6 py-4">
  //                             {item.address?.street},{item.address?.suite}, {item.address?.city},{' '}
  //                             {item.address.zipcode}
  //                           </td>
  //                           <td className="whitespace-nowrap px-6 py-4">{item.phone}</td>
  //                           <td className="whitespace-nowrap px-6 py-4">{item.website}</td>
  //                           <td
  //                             className="whitespace-nowrap px-6 py-4 overflow-hidden"
  //                             onClick={() => toggle()}
  //                           >
  //                             {handlerow(
  //                               item.company?.name,
  //                               item.company?.catchPhrase,
  //                               item.company?.bs
  //                             )}
  //                           </td>
  //                         </tr>
  //                       ))}
  //                   </tbody>
  //                 </table>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="flex justify-end">
  //           <div className="flex justify-between items-center mt-4">
  //             <div>
  //               Rows per page:{' '}
  //               <select
  //                 className="mx-2 p-2 border rounded"
  //                 value={rowsPerPage}
  //                 onChange={handleRowsPerPageChange}
  //               >
  //                 <option value={5}>5</option>
  //                 <option value={10}>10</option>
  //                 <option value={20}>20</option>
  //               </select>
  //             </div>
  //             <div>
  //               <button
  //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
  //                 onClick={() => paginate(currentPage - 1)}
  //                 disabled={currentPage === 1}
  //               >
  //                 Previous
  //               </button>
  //               <button
  //                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
  //                 onClick={() => paginate(currentPage + 1)}
  //                 disabled={indexOfLastRow >= data.length}
  //               >
  //                 Next
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );

  return <Table />;
}

export default DetailInfoTable;
