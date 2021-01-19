import React, { useState, useEffect } from 'react';
import Route from "./components/route/Route";

import Accordion from "./components/accordion/Accordion";
import Search from "./components/search/Search";
import Dropdown from "./components/dropdown/Dropdown";
import Translate from "./components/translate/Translate";
import Header from "./components/header/header";

const items = [
  {
    title: 'React title',
    content: 'Is cool'
  },
  {
    title: 'Second title description',
    content: 'Second content description'
  },
  {
    title: 'Third title description',
    content: 'Third content description'
  },
]

const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Gree',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  },
]

// map() inside of an object

// let objectData = {
//     name: 'emm',
//     age: 12,
//     country: 'Romania',
//     state: 'Neamt',
//     zipCode: 124
// }
//
// const x = Object.keys(objectData).map((objName, objI) => (
//     <li key={objI}>{objectData[objName]}</li>
// ))
// console.log(x);


export default () => {
    const [selected, setSelected] = useState([0]);

    return (
      <div>
        <Header/>
        <Route path='/'>
          <Accordion items={items} />
        </Route>

        <Route path='/list'>
          <Search />
        </Route>

        <Route path='/translate'>
          <Translate />
        </Route>

        <Route path='/dropdown'>
          <Dropdown
              label='Select a color'
              options={options}
              selected={selected}
              onSelectedChange={setSelected}
          />
        </Route>

          <br/>
          <br/>
          <br/>
          <br/>
      </div>
    );
}
