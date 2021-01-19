import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    // if (ref.current && ref.current.contains(event.target)) {

    useEffect(() => {
        const onBodyClick = (e) => {
            if (ref.current && ref.current.contains(e.target)) {
                return
            }
            setOpen(false);
        };
            document.body.addEventListener('click', onBodyClick);
        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, [])

    const renderOption = options.map(option => {
        if(option.value === selected.value) {
            return null;
        }
        return (
            <div
                onClick={() => {
                    onSelectedChange(option)
                }}
                key={option.value}
                className='item'>{option.label}
            </div>
        )
    })
    return (
        <div className="ui container pt-10">
            <div ref={ref} className="ui form">
                <div className="field">
                    <label htmlFor="" className='label'>{label}</label>
                    <div onClick={() => {
                        setOpen(!open)
                    }} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>

                        <i className='dropdown icon'></i>
                        <div className="text">{selected.label}</div>
                        <div className={`menu ${open ? 'visible transition' : ''}`}>
                            {renderOption}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown;