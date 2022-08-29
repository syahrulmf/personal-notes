import React, { useState } from "react";
import Swal from "sweetalert2";

const AddNotes = ({ data, setData }) => {
  const [addData, setAddData] = useState({
    id: "",
    title: "",
    body: "",
    archived: false,
    createdAt: new Date(),
  });

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (addData.title === "" || addData.body === "") {
      return Toast.fire({
        icon: "warning",
        title: "Data Tidak Boleh Kosong!",
      });
    }

    setData([...data, addData]);

    setAddData({
      ...addData,
      title: "",
      body: "",
    });

    Toast.fire({
      icon: "success",
      title: "Data Berhasil Ditambah!",
    });
  };

  return (
    <>
      <div className="shadow-lg p-5 w-[700px] m-auto rounded-lg mb-6 bg-white">
        <h2 className="text-xl font-bold mb-3">Buat Catatan</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div className="flex justify-between">
              <label htmlFor="title" className="font-semibold text-lg">
                Title
              </label>
              <p
                className={
                  addData.title.length > 50 ? "text-red-500" : "text-black"
                }
              >
                Sisa Karakter : {addData.title.length}
              </p>
            </div>
            <input
              type="text"
              name="title"
              id="title"
              className="border w-full rounded-lg focus:outline-none text-slate-500 p-2"
              value={addData.title || ""}
              onChange={(e) =>
                setAddData((prev) => ({
                  ...prev,
                  id: +new Date(),
                  title: e.target.value,
                }))
              }
            />
          </div>
          <div className="mt-4">
            <label htmlFor="price" className="font-semibold text-lg">
              Body
            </label>
            <textarea
              name="body"
              cols="30"
              rows="3"
              className="border w-full rounded-lg focus:outline-none text-slate-500 p-2"
              value={addData.body || ""}
              onChange={(e) =>
                setAddData((prev) => ({
                  ...prev,
                  body: e.target.value,
                }))
              }
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 text-lg bg-purple-700 text-white font-normal rounded-lg"
            >
              Tambah
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNotes;
