import React from 'react';
import PropTypes from 'prop-types';
Table.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.object.isRequired,
};

function Table({ id, name, username, email, address, phone, website, company }) {
  return <tbody></tbody>;
}

export default Table;
