import { useEffect, useState } from "react";
import { getRadiologyPatient } from "../components/api";
import ReportTable from "../components/patients/reportTable";
import { patientDto } from "../types/interface";
import { capitalizeSting } from "../utils/helper";
import { usePrint } from "../utils/print";

export default function ReportsPage() {
  const [patients, setPatients] = useState<patientDto[]>([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    getRadiologyPatient().then((res) => {
      setPatients(res.reverse());
    });
  }, []);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };
  const selectedPatient = patients.filter((patient) =>
    selectedValue === "" ? patient : patient?.status === selectedValue
  );

  //printing funtion
  const { componentRef, handlePrint } = usePrint();

  return (
    <div className="mt-4">
      <div className="mb-5 flex justify-between font-medium text-gray-700 md:pr-20">
        <p className="text-2xl">Report</p>
        <button onClick={handlePrint} className="text-green-600">
          Print patient list!
        </button>
        <select
          name="status"
          value={selectedValue}
          onChange={handleSelectChange}
          className="my-1 rounded-sm border border-gray-200 px-2 py-3 outline-gray-400 placeholder:text-slate-600"
        >
          <option value="">select status</option>
          <option value="pending">Pending</option>
          <option value="inprogress">Inprogress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div ref={componentRef}>
        <div className="w-full px-10 pb-10">
          <p className="py-6 text-center text-lg font-semibold">
            {selectedValue == ""
              ? "All Patients"
              : `${capitalizeSting(selectedValue)} Patients`}
          </p>
          <ReportTable patients={selectedPatient} />
        </div>
      </div>
    </div>
  );
}
