import React, { useMemo, useState } from "react";
import Navbar from "../../components/Navbar";
import ProductTable from "../../components/ProductTable";
import { sortItemsBy } from "../../utils/products";


const MainPage = () => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [sortBy, setSortBy] = useState('');

    const sortedItems = useMemo(() => sortItemsBy(items, sortBy), [items, sortBy]);

    return (
        <div>
            <Navbar setItems={setItems} setIsLoading={setIsLoading} setSortBy={setSortBy} />
            <ProductTable items={sortedItems} isLoading={isLoading} />
        </div>
    );
};

export default MainPage;