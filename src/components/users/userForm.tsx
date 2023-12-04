import { useState } from "react";
import { postUser } from "../api";
import { Role } from "../../types/enum";
import { toast } from "react-toastify";

const UserForm = ({ onFetchUsers }: { onFetchUsers: () => void }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: Role.Role,
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
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
    postUser(formData)
      .then((res) => {
        if (!res) throw new Error("You can not add user");
        toast("User added successfully", {
          type: "success",
        });
        onFetchUsers();
        return res;
      })
      .catch((error) => {
        const reserror = error.response.data.message;
        toast(typeof reserror !== "string" ? reserror.join(",") : reserror, {
          type: "error",
        });
      })
      .finally(() =>
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          role: Role.Role,
          password: "",
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
    <form className="w-4/5">
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
      <select
        name="role"
        value={formData.role}
        onChange={handleChangeSelectedInput}
        className={`${style.input} cursor-pointer`}
      >
        <option value="#">select role</option>
        <option value="specialist">Specialist</option>
        <option value="admin">Admin</option>
        <option value="radiologist">Radiologist</option>
      </select>
      <div></div>
      <div>
        <input
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          name="password"
          className={style.input}
        />
      </div>

      <button type="button" onClick={submitForm} className={style.button}>
        Add patient
      </button>
    </form>
  );
};

export default UserForm;
