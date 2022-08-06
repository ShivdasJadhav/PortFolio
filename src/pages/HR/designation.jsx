import React, { useState } from "react";

const Designation = () => {
  const [des, setDes] = useState();
  const [dep, setDep] = useState();
  function AddDesignation(params) {
    if (!des && !dep) {
      alert("plese provide the data!");
    } else {
      alert(`${des} added in ${dep}`);
      document.getElementById(
        "desContainer"
      ).innerHTML += `<tr class="bg-white border-b">
      <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
        index
      </th>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        ${des}
      </td>
      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        ${dep}
      </td>
    </tr>`;
    }
  }
  return (
    <>
    <div className="flex justify-self-auto justify-center mt-12">
      <div id="designationForm" className="">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form>
              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <h2 class="text-center font-semibold mx-4 mb-0">Designation</h2>
              </div>

              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="Name"
                  placeholder="Designation Æ"
                  value={des}
                  onChange={(e) => {
                    setDes(e.target.value);
                  }}
                />
              </div>

              <div class="mb-6">
                <select
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={dep}
                  onChange={(e) => {
                    setDep(e.target.value);
                  }}
                >
                  <option>departments</option>
                  <option>departments 1...</option>
                  <option>departments 2...</option>
                </select>
              </div>

              {/* <!-- Password input --> */}

              <div class="text-center lg:text-left">
                <button
                  type="button"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  onClick={AddDesignation}
                >
                  Add Designation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="table justify-center">
        <div class="flex m-6 flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md overflow-hidden text-black">
                <h3>Costomer Details</h3>
                <table class="min-w-full rounded-lg text-center">
                  <thead class="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Sr. No
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="text-sm font-medium text-white px-6 py-4"
                      >
                        Designation
                      </th>
                    </tr>
                  </thead>
                  <tbody id="desContainer">
                    <tr class="bg-white border-b">
                      <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </th>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      jr. software developer
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        web
                      </td>
                    </tr>
                    <tr class="bg-white border-b">
                      <th class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        2
                      </th>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      jr. MERN developer
                      </td>
                      <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        WebApps
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Designation;
