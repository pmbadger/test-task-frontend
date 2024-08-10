import React from "react";
import EmptyTable from "./components/EmptyTable.jsx/index.jsx";
import ProductTableRow from "./components/ProductTableRow/index.jsx";
import LoadingPage from "../../pages/LoadingPage/index.jsx";

const ProductTable = ({ items, isLoading }) => {

    if (items?.length === 0 && !isLoading) {
        return <EmptyTable/>
    }

    return ( isLoading ? <LoadingPage /> :
        <div className="container h-100 d-flex flex-column mb-3">
            {items.map(item => <ProductTableRow key={item.id} item={item}/>)}
        </div>
    );
};

export default ProductTable;