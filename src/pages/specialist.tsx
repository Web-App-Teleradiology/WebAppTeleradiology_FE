import { useEffect, useState } from "react";
import RadiologyTable from "../components/patients/radiologyTable";
import RadiologyForm from "../components/forms/radiologyForm";
import { getRadiologyPatient } from "../components/api";

export default function SpecialistPage() {
  const [patients, setPatients] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    getRadiologyPatient().then((res) => {
      setPatients(res.reverse());
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="mb-5 flex justify-between text-2xl font-medium text-gray-700 md:pr-20">
        <p>Specialist</p>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-3 text-lg text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close patient form" : "Add patient result"}
        </button>
      </div>
      <div className="flex">
        <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
          <RadiologyTable patients={patients} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <RadiologyForm />
          </div>
        )}
      </div>
    </div>
  );
}
