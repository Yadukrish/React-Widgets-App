/* eslint-disable import/no-anonymous-default-export */
import React,{useState} from "react";
import Accordion from "./compoents/Accordion";
import Dropdown from "./compoents/Dropdown";
import Search from "./compoents/Search";
const items = [
  {
    title: "Godfather",
    content: "Mafia Movie",
  },
  {
    title: "96",
    content: "Romantic movie",
  },
  {
    title: "Seven",
    content: "Thriller",
  },
];
const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];
export default () => {
  const[selected,setSelected]=useState(options[0]);
  return (
    <div>
      {
        //<Accordion items={items}/>
      }
     {// <Search />
     }
      <Dropdown options={options} selected={selected} onSelectedChange={setSelected}/>
    </div>
  );
};
