const PatientDetail = ({ patient }: any) => {
  // console.log(patient);
  return (
    <div>
      <p>{patient?.image}</p>
      <p>{patient?.firstName}</p>
      <p>{patient?.lastName}</p>
      <p>{patient?.email}</p>
      <p>{patient?.age}</p>
      <p>{patient?.desc}</p>
      <p>{patient?.comment}</p>
    </div>
  );
};

export default PatientDetail;
