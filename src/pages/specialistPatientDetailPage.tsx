import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpecialistForm from "../components/forms/specialistForm";

const SpecialistPatientDetailPage = () => {
  const param = useParams();
  const { id } = param;
  const [patient, setPatient] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const updatePatientDetail = () => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  };
  useEffect(() => {
    updatePatientDetail();
  });
  console.log(patient);
  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Specialist</p>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-3 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "+Comment"}
        </button>
      </div>
      <div className="flex flex-wrap">
        <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
          <PatientDetail patient={patient} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <SpecialistForm id={id} onUpdatePatient={updatePatientDetail} />
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialistPatientDetailPage;
