import React from 'react';

const useSelect = (initial = '', options = []) => {

    const [ data, setData ] = React.useState(initial);

    const component = () => (
        <select className="browser-default" value={data} onChange={(event) => setData(event.target.value)}>
            <option value="">--Seleccione un opción--</option>
        </select>
    )

    return [data, component];
}

export default useSelect;
