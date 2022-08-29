import React from "react";
import CardNotes from "./CardNotes";

const ActiveNotes = ({ data, setData }) => {
  return (
    <>
      <div className="mb-20">
        <h3 className="font-bold text-lg">Catatan Aktif</h3>
        <div className="flex flex-wrap gap-4 mt-5">
          {data.filter((e) => e.archived === false).length > 0 ? (
            data
              .filter((e) => e.archived === false)
              .map((item, index) => (
                <CardNotes
                  item={item}
                  key={index}
                  data={data}
                  setData={setData}
                />
              ))
          ) : (
            <p>Tidak Ada Data</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ActiveNotes;
