import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { MdFilterList } from 'react-icons/md';
import DataTable from 'react-data-table-component';
import { AiFillDelete } from 'react-icons/ai';

// import ExpandedComponent from 'react-data-table-component';
// import { max } from 'lodash';

function Table() {
  const [searchQuery, setSearchQuery] = useState('');
  const [length, setLength] = useState(0);
  const [deleted, setDeleted] = useState(false);
  const { isPending, error, data } = useQuery({
    queryKey: ['userData'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()),
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  if (isPending) return 'Loading...';
  if (error) return `An error has occurred: ${error.message}`;
  //   console.log(data);
  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.phone.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handlefilter = (e) => {
    setSearchQuery(e.target.value);
  };
  const columns = [
    // {
    //   name: 'ID',
    //   selector: (row) => row.id,
    //   sortable: true,
    // },
    {
      name: 'Name',
      selector: (row) => row.name,
      style: {
        fontWeight: '530', //chnaging font weight
      },
      sortable: true,
    },
    {
      name: 'UserName',
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Address',
      selector: (row) => row.address,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: (row) => row.phone,
      sortable: true,
    },
    {
      name: 'Company',
      selector: (row) => row.company,
      sortable: true,
    },
  ];

  const newdata = filteredData.map((item) => ({
    id: item.id,
    name: item.name,
    username: item.username,
    email: item.email,
    address: `${item.address.street}, ${item.address.suite}, ${item.address.city}, ${item.address.zipcode}`,
    phone: item.phone,
    company: `${item.company.name}, ${item.company.catchPhrase}, ${item.company.bs}`,
  }));

  const customStyles = {
    rows: {
      style: {
        minHeight: '70px',
        // fontWeight: '800',
        hover: {
          backgroundColor: 'lightgray', // Set the desired background color on hover
        },
      },
    },
    headCells: {
      style: {
        minHeight: '70px',
        paddingLeft: '2px',
        paddingRight: '8px',
        backgroundColor: '#F4F6F8',
        fontFamily: 'inherit', // Example font family
        fontSize: '14px',
      },
    },
    cells: {
      style: {
        paddingLeft: '1px', // override the cell padding for data cells
        paddingRight: '8px',
        fontFamily: 'inherit', // Example font family
        fontSize: '14px',
      },
    },
    selectableRowSelected: {
      backgroundColor: 'red',
      color: 'red', // Text color for checked rows
    },
    selectableRowUnchecked: {
      backgroundColor: 'transparent', // Background color for unchecked rows
    },
  };
  const paginationComponentOptions = {
    rowsPerPageText: 'Rows Per Page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: false,
    selectAllRowsItemText: 'Todos',
  };
  const handleSelected = ({ selectedRows }) => {
    setLength(selectedRows.length);
    setDeleted(selectedRows.length > 0); // Set deleted to true if there are selected rows, false otherwise
  };

  return (
    <div>
      <div className="flex mx-auto justify-between max-w-[74rem] mb-12">
        <div>
          <h1 className="font-bold text-xl md:text-2xl">User Information</h1>
        </div>
        <button className="font-semibold text-white px-6 py-[0.40rem] rounded-md bg-[#212B36]">
          New User
        </button>
      </div>

      <div className="max-w-6xl mx-auto ">
        <div className="">
          {deleted ? (
            <div className="bg-[#D0ECFE] py-8 rounded-t-2xl">
              <div className="flex justify-between mx-9 ">
                <div className="text-blue-500 font-bold">{length} selected</div>
                <AiFillDelete className="text-xl" />
              </div>
            </div>
          ) : (
            <div className="bg-white py-5 rounded-t-2xl">
              <div className="flex justify-between mx-3 md:mx-9 lg:mx-9">
                <div className="max-w-[16rem] flex justify-center align-center items-center">
                  <label
                    htmlFor="default-search"
                    className=" text-sm font-medium text-gray-900 sr-only dark:text-white "
                  >
                    Search
                  </label>
                  <div className="relative ">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-400 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="bg-white block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg hover:border-black focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Users"
                      onChange={handlefilter}
                    />
                  </div>
                </div>
                <div>
                  <MdFilterList className="text-black text-2xl flex justify-center mt-2" />
                </div>
              </div>
            </div>
          )}

          {/* Deleted */}

          {/* Searchbar */}

          <DataTable
            columns={columns}
            data={newdata}
            selectableRows
            onSelectedRowsChange={handleSelected}
            customStyles={customStyles}
            pagination
            paginationComponentOptions={paginationComponentOptions}
            paginationPerPage={[5]}
            paginationRowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
            paginationIconFirstPage={null}
            paginationIconLastPage={null}
          />
        </div>
      </div>
    </div>
  );
}

export default Table;
