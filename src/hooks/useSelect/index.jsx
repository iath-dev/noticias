import React from 'react';

const useSelect = (initial = '', options = []) => {

    const [ data, setData ] = React.useState(initial);

    const Component = () => (
        <select className="browser-default" value={data} onChange={(event) => setData(event.target.value)}>
            <option value="">--Seleccione un opción--</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    )

    return [data, Component];
}

export default useSelect;
