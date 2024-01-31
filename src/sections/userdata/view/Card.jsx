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
    <div class="max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-white flex flex-col items-center space-y-20">
      <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src={avatar} alt="" />
      <div class="flex flex-col items-center space-y-3">
        <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-900">
          {first_name} {last_name}
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-600">{username}</p>
        <p class="font-normal text-gray-700 dark:text-gray-600">{email}</p>
      </div>
    </div>
  );
}

export default Card;
