import React from 'react';
import PropTypes from 'prop-types';

Card.propTypes = {
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

function Card({ first_name, last_name, username, email, avatar }) {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center">
      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar} alt="" />
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {first_name} {last_name}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{username}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{email}</p>
    </div>
  );
}

export default Card;
