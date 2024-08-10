import React from "react";

const SortBy = ({ setSortBy }) => {
    const handleSelect = (e) => {
        e.preventDefault();
        setSortBy(e.target.value);
    };
    
    return (
        <div className="dropdown m-2 d-flex align-items-center">
            <label htmlFor="sortBySelect" className="text-light-emphasis">
                <small className="text-body-secondary" style={{ fontSize: '0.8em' }}>
                    Sort by
                </small>
            </label>
            <select className="nav-link dropdown-toggle text-light-emphasis  mx-2" id="sortBySelect" onChange={handleSelect}>
                <option value="name" className="dropdown-item bg-dark">Name</option>
                <option value="price" className="dropdown-item bg-dark">Price</option>
                <option value="stock" className="dropdown-item bg-dark">Stock</option>
            </select>
        </div>
    );
};

export default SortBy;