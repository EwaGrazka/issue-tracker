import React, { useState } from "react";
import { AddItemForm } from "./app/AddItemForm/AddItemForm";
import { List } from "./app/List/List";

function App() {
  const initialList = [
    {
      id: "1",
      title: "Add input with title",
      description: "An issue should have at least a title",
      status: "closed",
    },
    {
      id: "2",
      title: "Add animations",
      description: "The application needs simple, subtle animations",
      status: "pending",
    },
  ];

  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "",
    isComplete: false,
  });

  const [listData, setListdata] = useState({
    list: initialList,
    isShowList: true,
  });

  return (
    <div className="App">
      <h2>Add ticket to the list</h2>
      <AddItemForm form={form} />

      <h2>Manage your tickets</h2>
      <List list={listData.list} />
    </div>
  );
}

export default App;
