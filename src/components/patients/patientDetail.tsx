import { patientDto } from "../../types/interface";
const PatientDetail = ({ patient }: { patient?: patientDto }) => {
  return (
    <div className=" w-full">
      <div className="min-h-[15rem] w-full border border-gray-200 p-4">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-20 font-semibold">First name: </p>
              <p>{patient?.firstName}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-20 font-semibold">Last name: </p>
              <p>{patient?.lastName}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-20 font-semibold">Email:</p>{" "}
              <p>{patient?.email}</p>
            </div>
            <div className="flex items-center py-2">
              <p className="mx-1 w-20 font-semibold">Age: </p>
              <p>{patient?.age}</p>
            </div>
          </div>
          <div className="h-[12rem]">
            <img className="h-full" src={patient?.image} alt="patient"></img>
          </div>
        </div>
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
