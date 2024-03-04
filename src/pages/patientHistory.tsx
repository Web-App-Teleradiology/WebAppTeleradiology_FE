import { useEffect, useState } from "react";
import { patientDto } from "../types/interface";
import { getPatientHistory } from "../components/api/getPatientHistory";
import { useParams } from "react-router-dom";
import PatientTable from "../components/patients/patientTable";
import PatientForm from "../components/forms/patientForm";
const PatientHistory = () => {

    const [patients, setPatients] = useState<patientDto[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [search, setSearch] = useState("");
    const { id } = useParams()
    //open and close comment model
    const toggleModel = () => setIsOpen((prev) => !prev);

    const getPatient = (keyword = "", page = 1) => {
        if (id) {
            getPatientHistory(id, keyword, page)
                .then((res) => {
                    setPatients(res.data);
                    setTotalPages(res.totalPages);
                })
                .catch((error) => {
                    console.error('Error fetching patient data:', error);
                });
        } else {
            console.error('Patient ID is not defined');
        }
    };
    useEffect(() => {
        getPatient(search, currentPage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, search]);
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    console.log("first", patients)
    return (
        <div className="mt-4">
            <div className="mb-5 flex items-center justify-between font-medium text-gray-700 md:pr-20">
                <p className="text-2xl">Patients'medical history</p>
                <input
                    type="text"
                    name="search"
                    id="search"
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="search patient ..."
                    className="my-1 w-1/2 rounded-lg border border-gray-200 px-2 py-3 font-normal outline-gray-400 placeholder:font-normal placeholder:text-slate-600"
                />
                <button
                    onClick={toggleModel}
                    className="rounded-md bg-gray-200 p-2 text-black/90 hover:shadow-md"
                >
                    {isOpen ? "Close form" : "Add diagnosis"}
                </button>
            </div>
            <div className="flex">
                <div className={`flex ${isOpen ? "w-3/5" : "w-full"}`}>
                    <PatientTable
                        patients={patients}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
                {isOpen && (
                    <div className="flex w-2/5 justify-center pt-10">
                        <PatientForm
                            onGetPatient={() => getPatient("", currentPage)}
                            setIsOpen={setIsOpen}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}

export default PatientHistory