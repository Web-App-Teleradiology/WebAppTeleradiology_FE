import { useState } from "react";
import Form from "../components/forms/login";
export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const submitForm = () => {
    formData.email != "" &&
      alert(`Good morning ${formData.email} ${formData.password}`);
    setFormData({ email: "", password: "" });
  };
  return (
    <>
      <div id="exseven">
        <div className="flex h-screen items-center justify-center bg-gray-100">
          <Form
            handleChange={handleChange}
            submitForm={submitForm}
            inputValue={formData}
          />
        </div>
      </div>
    </>
  );
}
