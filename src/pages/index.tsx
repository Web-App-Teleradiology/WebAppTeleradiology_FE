import { useState } from "react";
import Form from "../components/forms/login";
import { login } from "../components/api";

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState<[string]>([""]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  };
  const submitForm = () => {
    login(formData.email, formData.password)
      .then((res) => {
        if (!res) throw new Error("UnAutholized Incorrect email and password");
        const user = JSON.stringify(res.user);
        localStorage.setItem("authToken", res.token);
        localStorage.setItem("user", user);
        window.location.reload();
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      })
      .finally(() => setFormData({ email: "", password: "" }));
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
            errorMessage={errorMessage}
          />
        </div>
      </div>
    </>
  );
}
