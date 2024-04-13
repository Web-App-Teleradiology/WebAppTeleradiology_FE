interface props {
  progress: number;
  patient: number;
  status: string;
}
const ProgressBar = ({ progress, patient, status }: props) => {
  const validProgress = Math.min(100, Math.max(0, progress));

  return (
    <>
      <p>{`${patient} patient(s) - ${status}`}</p>
      <div className="mt-4 h-8 w-full rounded-lg bg-[#eee]">
        <div
          className="h-8 rounded-lg bg-[#2596be]"
          style={{ width: `${validProgress}%` }}
        >
          <p className="flex items-center px-2 text-white">{patient}</p>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
