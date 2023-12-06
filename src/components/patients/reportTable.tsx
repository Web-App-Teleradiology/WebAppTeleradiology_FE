import { patientDto } from "../../types/interface";

const ReportTable = ({ patients }: { patients: patientDto[] }) => {
  return (
    <div className="container border">
      <div className="py-8">
        <div className="py-4">
          <div className="max-w-full overflow-x-auto rounded-lg">
            <table className="w-full leading-normal text-black">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Age
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {patients.map((patient) => (
                  <tr key={patient._id} className="cursor-pointer">
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p>{patient.firstName} </p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p>{patient.lastName}</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">{patient.email}</p>
                    </td>
                    <td className="border-b border-gray-200 p-5 text-sm">
                      <p className="whitespace-nowrap">{patient.age}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportTable;
