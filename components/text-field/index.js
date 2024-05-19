// TextField.js
import React from "react";

const TextField = ({ id, name, label, value, error, onChange }) => {
    return (
        <div>
            <label htmlFor={id}>{label}:</label>
            <input
                id={id}
                name={name}
                type="text"
                className="large mx-8"
                placeholder={label}
                value={value}
                onChange={onChange}
                aria-invalid={error ? "true" : "false"}
            />
            {error && (
                <p role="alert" className="mt-8" style={{ color: "red" }}>
                    {error}
                </p>
            )}
        </div>
    );
};

export default TextField;
