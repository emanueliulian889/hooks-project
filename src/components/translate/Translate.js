import React, { useState } from "react";
import Dropdown from "../dropdown/Dropdown";
import Convert from "../convert/Convert";

const options = [
    {
        label: 'Africans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('')

    return (
        <div>
            <div className="ui container">
                <div className='ui form'>
                    <div className="field">
                        <label>Enter Text</label>
                        <input value={text} onChange={(event => setText(event.target.value))} />
                    </div>
                </div>


                <div className="ui hidden divider"></div>

                <Dropdown
                    label='Select a language'
                    options={options}
                    selected={language}
                    onSelectedChange={setLanguage}/>

                <div className="ui hidden divider"></div>

                <h3 className='ui header'>Output:</h3>
                <Convert language={language} text={text}/>
            </div>
        </div>
    )
}

export default Translate;