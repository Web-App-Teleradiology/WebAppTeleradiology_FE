import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PatientDetailPage = () => {
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
      <p>PatientDetailPage</p>
      <PatientDetail patient={patient} />
    </div>
  );
};

export default PatientDetailPage;
