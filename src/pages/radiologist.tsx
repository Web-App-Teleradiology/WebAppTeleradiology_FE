import { useEffect, useState } from "react";
import RadiologyTable from "../components/patients/radiologyTable";
import { getRadiologyPatient } from "../components/api/getRadiologyPatient";
export default function RadiologistPage() {
  const [patients, setPatients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getRadiologyPatient().then((res) => {
      setPatients(res);
    });
  }, []);
  console.log(patients);
  return (
    <div className="mt-4">
      <div className="mb-5 flex justify-between text-2xl font-medium text-gray-700 md:pr-20">
        <p>Radiology</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-3 text-lg text-indigo-900 hover:shadow-md"
        >
          {isOpen ? "Close patient form" : "Add new patient"}
        </button>
      </div>
      <div className="flex">
        <RadiologyTable patients={patients} />
        {isOpen && <RadiologyTable patients={patients} />}
      </div>
    </div>
  );
}
