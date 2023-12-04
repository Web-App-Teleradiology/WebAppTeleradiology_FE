import { useState } from "react";
import { postSpecialistPatient } from "../api";
import { Status } from "../../types/enum";
import { ToastContainer, toast } from "react-toastify";
import { patientDto } from "../../types/interface";

const SpecialistForm = ({
  id,
  onUpdatePatient,
  patient,
}: {
  id?: string;
  onUpdatePatient: () => void;
  patient?: patientDto;
}) => {
  const [formData, setFormData] = useState({
    status: patient?.status,
    comment: patient?.comment,
  });

  const handleChangeTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleChangeSelectedInput = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitForm = () => {
    const specialistForm =
      formData.status === Status.Status
        ? { ...formData, status: undefined }
        : formData;
    if (id)
      postSpecialistPatient(id, specialistForm)
        .then((res) => {
          if (!res) throw new Error("You can not add patient comment");
          toast("comment added successfully", {
            type: "success",
          });
          onUpdatePatient();
          return res;
        })
        .catch((error) => {
          const reserror = error.response.data.message;
          toast(typeof reserror !== "string" ? reserror.join(",") : reserror, {
            type: "error",
          });
        })
        .finally(() => {
          setFormData({
            status: Status.Status,
            comment: "",
          });
        });
  };
  const style = {
    input:
      "my-1 w-full rounded-sm border border-gray-200 px-2 py-3 outline-gray-400 placeholder:text-slate-600",

    button:
      "my-2 w-full rounded-sm bg-black/90 py-3 font-semibold text-gray-100 hover:shadow-lg",
  };
  return (
    <div className="w-4/5">
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        newestOnTop
      />
      <form>
        <select
          name="status"
          value={formData.status}
          onChange={handleChangeSelectedInput}
          className={`${style.input} cursor-pointer`}
        >
          <option value="#">select status</option>
          <option value="pending">Pending</option>
          <option value="inprogress">Inprogress</option>
          <option value="completed">Completed</option>
        </select>
        <div>
          <textarea
            value={formData.comment}
            onChange={handleChangeTextarea}
            placeholder="Comment"
            name="comment"
            className={style.input}
          />
        </div>
        <button type="button" onClick={submitForm} className={style.button}>
          Add patient
        </button>
      </form>
    </div>
  );
};

export default SpecialistForm;
