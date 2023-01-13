import React from 'react';
import { connect } from 'react-redux';


const Browse = props => {
  const { data, isLoading } = props;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      {data && data.map(item => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.occupation}</p>
          <p>{item.bio}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data
});

export default connect(mapStateToProps)(Browse);