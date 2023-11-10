import { useState } from "react";
import Form from "../components/forms/login";
import { login } from "../components/api/auth";

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
  const submitForm = async () => {
    try {
      const user = await login(formData.email, formData.password);
      localStorage.setItem("authToken", user.token);
      localStorage.setItem("user", JSON.stringify(user.user));
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
    setFormData({ email: "", password: "" });
  };

  return (
    <>
      <div id="exseven">
        <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
          <h1 className="flex items-center py-5 text-4xl font-bold">
            <div className="rounded-3xl bg-black px-4 py-1 text-white">T</div>
            eleradiology
          </h1>
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
