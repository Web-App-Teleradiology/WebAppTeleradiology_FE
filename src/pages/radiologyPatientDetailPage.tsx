import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RadiologyPatientDetailPage = () => {
  const param = useParams();
  const { id } = param;

  const [patient, setPatient] = useState({});

  useEffect(() => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  }, [id]);
  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Radiology</p>
      </div>
      <div className="flex flex-wrap">
        <PatientDetail patient={patient} />
      </div>
    </div>
  );
};

export default RadiologyPatientDetailPage;
