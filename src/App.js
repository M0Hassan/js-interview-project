import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getData, updateData } from './store/actions';
import Browse from './components/Browse';
import Edit from './components/Edit';


function App({ getData }) {
    useEffect(() => {
        getData();
    }, [getData]);

    return (
        <div className="app-container">
            <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    );
}

const mapDispatchToProps = {
    getData,
    updateData
};

export default connect(null, mapDispatchToProps)(App);