import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpecialistForm from "../components/forms/specialistForm";
// import { useAuth } from "../middleware/Contexts";

const PatientDetailPage = () => {
  // const { authUser } = useAuth();
  const param = useParams();
  const { id } = param;
  // let role: string;
  const [patient, setPatient] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  // {
  //   authUser !== null && (role = JSON.parse(authUser).role);
  // }
  useEffect(() => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  }, [id]);
  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Specialist</p>

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-3 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "Add patient"}
        </button>
      </div>
      <div className="flex flex-wrap">
        <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
          <PatientDetail patient={patient} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <SpecialistForm id={id} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientDetailPage;
