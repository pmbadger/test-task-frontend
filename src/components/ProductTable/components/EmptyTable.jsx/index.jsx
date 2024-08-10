import React, { memo } from "react";

const EmptyTable = () => {
    return (
        <div className="container-fluid vh-100 d-flex justify-content-center  align-items-center">
            <h3 className="display-3 text-primary">Try To Find Smth</h3>
        </div>
    );
};

export default memo(EmptyTable);
