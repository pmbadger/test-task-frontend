import React, { useState } from "react";
import { searchProducts } from "../../../../services/api/product";

const SearchInput = ({ setItems, setIsLoading }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setValue(e.target.value);

        // We need to request items if search string is not empty
        if (e.target.value === ''){
            setItems([]);
            setIsLoading(false);
        } else {
            searchProducts(e.target.value).then(res => {
                setItems(res.data);
            }).catch((err) => err)
            .finally(() => setIsLoading(false));
        }
    };

    return (
        <form className="d-flex" role="search" onSubmit={e => {e.preventDefault()}}>
            <input
                className="form-control me-2"
                value={value}
                onChange={handleChange}
                type="search"
                placeholder="Search"
                aria-label="Search"
            />
        </form>
    );
};

export default SearchInput;