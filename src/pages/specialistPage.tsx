import { useEffect, useState } from "react";
import SpecialistTable from "../components/patients/specialistTable";
import SpecialistForm from "../components/forms/specialistForm";
import { getRadiologyPatient } from "../components/api";

export default function SpecialistPage() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    getRadiologyPatient().then((res) => {
      setPatients(res.reverse());
    });
  }, []);
  return (
    <div className="mt-4">
      <div className="mb-5 font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Specialist</p>
      </div>
      <div className="flex flex-wrap">
        <SpecialistTable patients={patients} />
      </div>
    </div>
  );
}
