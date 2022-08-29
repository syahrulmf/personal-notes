import React from "react";
import CardNotes from "./CardNotes";

const NonActiveNotes = ({ data, setData }) => {
  return (
    <>
      <div className="mb-20">
        <h3 className="font-bold text-lg">Arsip</h3>
        <div className="flex flex-wrap gap-4 mt-5">
          {data.filter((e) => e.archived === true).length > 0 ? (
            data
              .filter((e) => e.archived === true)
              .map((item, index) => (
                <CardNotes
                  item={item}
                  key={index}
                  data={data}
                  setData={setData}
                />
              ))
          ) : (
            <p>Tidak ada data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default NonActiveNotes;
