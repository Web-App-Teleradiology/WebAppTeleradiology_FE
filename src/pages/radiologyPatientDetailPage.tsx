import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { patientDto } from "../types/interface";

const title = "Radiology";

const RadiologyPatientDetailPage = () => {
  const param = useParams();
  const { id } = param;

  const [patient, setPatient] = useState<patientDto>();

  useEffect(() => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  }, [id]);

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl md:pl-10">{title}</p>
        <button onClick={handlePrint} className="text-green-600">
          Print patient information!
        </button>
      </div>
      <div className="flex flex-wrap p-10" ref={componentRef}>
        <PatientDetail patient={patient} />
      </div>
    </div>
  );
};

export default RadiologyPatientDetailPage;
