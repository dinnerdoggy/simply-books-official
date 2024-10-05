'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { viewAuthorDetails } from '../../../api/mergedData';

export default function ViewAuthor({ params }) {
  const [authorDetails, setAuthorDetails] = useState({});

  // grab firebaseKey from url
  const { firebaseKey } = params;

  // make call to API layer to get the data
  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  console.warn('LOOOOK', authorDetails);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name}
          {authorDetails.favorite ? '🤍' : ''}
        </h5>
        Author Email: <a href={`mailto:${authorDetails.email}`}>{authorDetails.email}</a>
        <p>{authorDetails.description || ''}</p>
        <hr />
      </div>
    </div>
  );
}

ViewAuthor.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
