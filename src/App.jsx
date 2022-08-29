import React, { useState } from "react";
import ActiveNotes from "./components/ActiveNotes";
import AddNotes from "./components/AddNotes";
import NonActiveNotes from "./components/NonActiveNotes";
import { getInitialData } from "./utils/utils";

const App = () => {
  const [data, setData] = useState(getInitialData());

  return (
    <>
      <section className="container m-auto">
        <h1 className="text-3xl font-bold text-center my-6">
          Personal Notes App
        </h1>
        <AddNotes data={data} setData={setData} />
        <ActiveNotes data={data} setData={setData} />
        <NonActiveNotes data={data} setData={setData} />
      </section>
    </>
  );
};

export default App;
