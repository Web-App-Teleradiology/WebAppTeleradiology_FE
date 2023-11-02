export default function Table() {
  return (
    <div className="container mt-10 border">
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
                    User
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    Created_at
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
                  />
                </tr>
              </thead>
              <tbody className="text-black">
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Jean marc</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">Admin</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">12/09/2020</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Marcus coco</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">Designer</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">01/10/2012</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Eric marc</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">Developer</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">02/10/2018</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Julien Huger</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">User</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">23/09/2010</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/8_yfarwk.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Jean marc</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">Admin</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">12/09/2020</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/4_iauuag.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Marcus coco</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">Designer</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">01/10/2012</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/3_iscinv.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Eric marc</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">Developer</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">02/10/2018</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <div className="flex items-center">
                      <div className="shrink-0">
                        <a href="#" className="relative block">
                          <img
                            alt="profil"
                            src="https://res.cloudinary.com/beloved/image/upload/v1623196231/Assets/person/6_v4ytve.jpg"
                            className="mx-auto h-10 w-10 rounded-full object-cover "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-nowrap">Julien Huger</p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">User</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <p className="whitespace-nowrap">23/09/2010</p>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      />
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="border-b border-gray-200 p-5 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="xs:flex-row xs:justify-between flex flex-col items-center p-5">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full rounded-l-xl border bg-white p-4 text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full border-y bg-white px-4 py-2 text-base text-indigo-500 hover:bg-gray-100"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full border-y bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full border bg-white px-4 py-2 text-base text-gray-600 hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full rounded-r-xl border-y border-r bg-white p-4  text-base text-gray-600 hover:bg-gray-100"
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
