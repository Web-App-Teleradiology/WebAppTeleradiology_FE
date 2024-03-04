import { useState } from "react";
import { postRadiologyPatient } from "../api";
import { toast } from "react-toastify";
import { useAuth } from "../../middleware/Contexts";

const RadiologyForm = ({
  onGetPatient,
  setIsOpen,
}: {
  onGetPatient: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { authUser } = useAuth();
  let loggedInUserId: string;
  {
    authUser !== null && (loggedInUserId = JSON.parse(authUser).id);
  }
  const [formData, setFormData] = useState({

    firstName: "",
    lastName: "",
    email: "",
    age: "",

  });



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };


  const submitForm = () => {
    const updatedFormData = { ...formData, userId: loggedInUserId };
    postRadiologyPatient(updatedFormData)
      .then((res) => {
        if (!res) throw new Error("You can not add patient");
        toast("Patient added successfully", {
          type: "success",
        });
        onGetPatient();
        setIsOpen((prev) => !prev);
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

          firstName: "",
          lastName: "",
          email: "",
          age: "",

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
    <>
      <form className="w-full gap-4 px-2">

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


        <button type="button" onClick={submitForm} className={style.button}>
          Add patient
        </button>
      </form>
    </>
  );
};

export default RadiologyForm;
