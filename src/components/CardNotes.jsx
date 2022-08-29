import React from "react";
import Swal from "sweetalert2";
import { showFormattedDate } from "../utils/utils";

const CardNotes = ({
  item: { title, body, createdAt, id, archived },
  data,
  setData,
}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
  });

  const handleArchive = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.archived = true;
        }

        return item;
      })
    );

    Toast.fire({
      icon: "success",
      title: "Data Berhasil Dipindahkan ke Arsip!",
    });
  };

  const handleActive = (id) => {
    setData(
      data.map((item) => {
        if (item.id === id) {
          item.archived = false;
        }

        return item;
      })
    );

    Toast.fire({
      icon: "success",
      title: "Data Berhasil Dipindahkan ke Catatan Aktif!",
    });
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="w-[300px] shadow-lg rounded-lg bg-white p-5 flex flex-col justify-between">
        <div>
          <h4 className="text-md font-bold truncate">{title}</h4>
          <p className="my-1 text-slate-500">{showFormattedDate(createdAt)}</p>
          <p>{body}</p>
        </div>

        <div className="flex">
          <button
            className="w-full px-2 py-1 bg-green-500 mt-3 text-white text-normal font-semibold rounded-lg mr-2"
            onClick={
              archived === false
                ? () => handleArchive(id)
                : () => handleActive(id)
            }
          >
            {archived === false ? "Arsipkan" : "Aktifkan"}
          </button>
          <button
            className="w-full px-2 bg-red-500 mt-3 text-white text-normal font-semibold rounded-lg mr-2"
            onClick={() => {
              Swal.fire({
                title: "Yakin ingin menghapus data?",
                text: "Kamu tidak dapat mengembalikan data ini",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yakin, Hapus Sekarang",
              }).then((result) => {
                if (result.isConfirmed) {
                  handleDelete(id);
                  Toast.fire({
                    icon: "success",
                    title: "Data Berhasil Dihapus!",
                  });
                }
              });
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default CardNotes;
