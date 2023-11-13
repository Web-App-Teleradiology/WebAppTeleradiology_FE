import { useState } from "react";
import { postSpecialistPatient } from "../api";

const SpecialistForm = () => {
  const [formData, setFormData] = useState({
    status: undefined,
    comment: "",
  });
  const [errorMessage, setErrorMessage] = useState<[string]>([""]);

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
  console.log(formData);
  const submitForm = () => {
    postSpecialistPatient(formData)
      .then((res) => {
        if (!res) throw new Error("You can not add patient comment");
        return res;
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      })
      .finally(() =>
        setFormData({
          status: undefined,
          comment: "",
        })
      );
  };
  const style = {
    input:
      "my-1 w-full rounded-sm border border-gray-200 px-2 py-3 outline-gray-400 placeholder:text-slate-600",

    button:
      "my-2 w-full rounded-sm bg-black/90 py-3 font-semibold text-gray-100 hover:shadow-lg",
  };
  return (
    <div className="w-4/5">
      {errorMessage.length && <p className="text-red-400">{errorMessage}</p>}
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
