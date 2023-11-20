import { Link } from "react-router-dom";
import homeData from "../utils/homeData.json";

const HomePage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {homeData.map((data) => (
          <Link to={data.link} key={data.key}>
            <div className="cursor-pointer rounded-md bg-white p-4 shadow-md hover:bg-gray-100">
              <h2 className="mb-2 text-xl font-bold">{data.title}</h2>
              <p className="text-gray-600">{data.content}</p>
              <p className="text-gray-600">{data.content}</p>
              <p className="text-gray-600">{data.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
