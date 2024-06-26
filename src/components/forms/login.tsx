interface formData {
  email: string;
  password: string;
}
interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
  inputValue: formData;
  errorMessage: [string];
}
export default function Form({
  handleChange,
  submitForm,
  inputValue,
  errorMessage,
}: Props) {
  return (
    <div className="rounded-lg bg-white px-6 py-12 shadow-xl shadow-black/10">
      {errorMessage.length && (
        <p className="w-80 text-red-500">{errorMessage}</p>
      )}

      <form className="block gap-4">
        <div>
          <input
            type="text"
            value={inputValue.email}
            onChange={handleChange}
            placeholder="Email"
            name="email"
            className="my-4 w-80 rounded-sm bg-gray-300 px-2 py-3 outline-gray-400 placeholder:text-slate-600"
          />
        </div>
        <div>
          <input
            type="password"
            value={inputValue.password}
            onChange={handleChange}
            placeholder="Password"
            name="password"
            className="my-4 w-80 rounded-sm bg-gray-300 px-2 py-3 outline-gray-400 placeholder:text-slate-600"
          />
        </div>
        <button
          type="button"
          onClick={submitForm}
          className="my-4 w-80 rounded-sm bg-black/90 py-3 font-semibold text-white hover:shadow-lg"
        >
          Login
        </button>
      </form>
      {/* <p className="flex gap-2">
        Don't have an account?
        <span className="cursor-pointer font-bold">Contact Admin</span>
      </p> */}
    </div>
  );
}
