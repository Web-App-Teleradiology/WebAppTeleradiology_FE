import { patientDto } from "../../types/interface";
const PatientDetail = ({ patient }: { patient?: patientDto }) => {
  return (
    <div className=" w-full">
      <div className="min-h-[15rem] w-full border border-gray-200 p-4">
        <p>{patient?.image}</p>
        <p>{patient?.firstName}</p>
        <p>{patient?.lastName}</p>
        <p>{patient?.email}</p>
        <p>{patient?.age}</p>
      </div>
      <p className="py-2 text-lg font-semibold">Radiology explanatiom</p>
      <p className="my-2 min-h-[20rem] w-full border border-gray-200 p-4">
        {patient?.desc}
      </p>
      <p className="py-2 text-lg font-semibold">Specialist explanatiom</p>
      <p className="min-h-[20rem] w-full border border-gray-200 p-4">
        {patient?.comment}
      </p>
    </div>
  );
};

export default PatientDetail;
