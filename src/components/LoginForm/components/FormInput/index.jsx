import React, { useMemo } from "react";

const FormInput = ({ value, setValue, title, valueType, inputType }) => {
    const intupId = useMemo(() => `formInput${valueType}`, [valueType]);
    return (
        <div className="mb-3">
            <label htmlFor={intupId} className="form-label">{title}</label>
            <input
                className="form-control"
                type={inputType}
                value={value}
                onChange={e => setValue(e.target.value)}
                id={intupId}
            />
        </div>
    );
};

export default FormInput;