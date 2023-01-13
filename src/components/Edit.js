import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { updateData } from '../store/actions';
import { useParams } from 'react-router-dom';

const Edit = ({ data, updateData }) => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      occupation: '',
      bio: ''
    });
    
    useEffect(() => {
      const item = data.find(item => item._id === id);
      setFormData({
        name: item.name,
        email: item.email,
        occupation: item.occupation,
        bio: item.bio
      });
      }, [data, id]);
    
    const handleSubmit = e => {
      e.preventDefault();
      updateData(id, formData);
    };
    
    const handleChange = e => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    return (
    <form onSubmit={handleSubmit}>
    <label>
        Name:
        <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
    </label>
    <label>
        Email:
        <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
    </label>
    <label>
        Occupation:
        <input
        type="text"
        name="occupation"
        value={formData.occupation}
        onChange={handleChange}
        />
    </label>
    <label>
    Bio:
    <textarea
           name="bio"
           value={formData.bio}
           onChange={handleChange}
         />
    </label>
    <button type="submit">Save Changes</button>
    </form>
    );
    };
    
    const mapStateToProps = state => ({
      data: state.data
    });
    
    const mapDispatchToProps = {
      updateData
    };
    
export default connect(mapStateToProps, mapDispatchToProps)(Edit);