import { useState } from "react";
import { postRadiologyPatient } from "../api";
import { ToastContainer, toast } from "react-toastify";

const RadiologyForm = () => {
  const [formData, setFormData] = useState({
    patientId: "",
    image: "",
    firstName: "",
    lastName: "",
    email: "",
    userId: "",
    age: "",
    desc: "",
    comment: "",
  });

  const handleChangeTextarea = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };

  const submitForm = () => {
    postRadiologyPatient(formData)
      .then((res) => {
        if (!res) throw new Error("You can not add patient");
        toast("Patient added successfully", {
          type: "success",
          position: "top-center",
          hideProgressBar: true,
        });
        return res;
      })
      .catch((error) => {
        toast(error.response.data.message, {
          type: "error",
          position: "top-center",
          hideProgressBar: true,
        });
      })
      .finally(() =>
        setFormData({
          patientId: "",
          image: "",
          firstName: "",
          lastName: "",
          email: "",
          userId: "",
          age: "",
          desc: "",
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
    <div>
      <ToastContainer
        position="top-center"
        hideProgressBar={true}
        newestOnTop
      />
      <form className="block gap-4">
        <div className="block">
          <label htmlFor="myfile">Select an image file:</label>
          <input
            type="file"
            value={formData.image}
            multiple
            onChange={handleChange}
            title="Choose a video please"
            name="image"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.patientId}
            onChange={handleChange}
            placeholder="patient Id"
            name="patientId"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First name"
            name="firstName"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last name"
            name="lastName"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            name="age"
            className={style.input}
          />
        </div>
        <div>
          <input
            type="text"
            value={formData.userId}
            onChange={handleChange}
            placeholder="user Id"
            name="userId"
            className={style.input}
          />
        </div>
        <div>
          <textarea
            value={formData.desc}
            onChange={handleChangeTextarea}
            placeholder="Description"
            name="desc"
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

export default RadiologyForm;
