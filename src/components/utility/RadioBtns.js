import React, { useEffect, useState } from 'react';

function RadioBtns(props) {

    const [fields, setFields] = useState('');

    useEffect(() => {
        props.fieldChange(fields);
    });

    return (
        <fieldset>
          <legend>{props.title}</legend>
            {
                props.options.map((option) => {
                    return(
                        <label>
                            <input type="radio" value={option} onChange={(e) => setFields(e.target.value)}
                            checked={props.field == option}/>
                            {option}
                        </label>
                    );
                })
            }
        </fieldset>
    );
}

export default RadioBtns;