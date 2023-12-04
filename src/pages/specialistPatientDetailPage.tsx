import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PatientDetail from "../components/patients/patientDetail";
import { getPatient } from "../components/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SpecialistForm from "../components/forms/specialistForm";
import { patientDto } from "../types/interface";
import ImageModel from "../components/patients/imageModel";

const SpecialistPatientDetailPage = () => {
  const param = useParams();
  const { id } = param;
  const [patient, setPatient] = useState<patientDto>();
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const isOnViewImage = (image?: string) => {
    if (image) setImage(image);
    setShowModal(true);
  };
  const updatePatientDetail = () => {
    if (id)
      getPatient(id).then((res) => {
        setPatient(res);
      });
  };
  useEffect(() => {
    updatePatientDetail();
  });

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl md:pl-10">Specialist</p>
        <button onClick={handlePrint} className="text-green-600">
          Print patient information!
        </button>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md bg-gray-200 p-3 text-black/90 hover:shadow-md"
        >
          {isOpen ? "Close form" : "+Comment"}
        </button>
      </div>
      <div className="flex flex-wrap">
        <div
          className={`flex p-10 ${isOpen ? "w-3/5" : "w-full"}`}
          ref={componentRef}
        >
          <PatientDetail patient={patient} isOnViewImage={isOnViewImage} />
        </div>
        {isOpen && (
          <div className="flex w-2/5 justify-center pt-10">
            <SpecialistForm
              id={id}
              onUpdatePatient={updatePatientDetail}
              patient={patient}
            />
          </div>
        )}
        {showModal ? (
          <ImageModel setShowModal={setShowModal} image={image} />
        ) : null}
      </div>
    </div>
  );
};

export default SpecialistPatientDetailPage;
