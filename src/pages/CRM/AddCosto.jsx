import React from "react";
import axios from "axios";
import { useState } from "react";

const AddCostomer = () => {
  const [accessToken, setAccessToken] = useState(
    "6f4ce41f278535cd42cf23bbcfe6732133f80e61"
  );
  const [userData, setUserData] = useState("No data Found...");
  const [gstNo, setGstNo] = useState("37AADCS0472N1Z1");
  const tokenUrl = "https://gstapi.in/oauth/access_token";
  const dataUrl =
    "https://commonapi.mastersindia.co/commonapis/searchgstin?gstin=";

  async function getAccessToken() {
    setUserData(`Access Tocken:\n ${accessToken}`);
    const res = await axios.post(`${tokenUrl}`, {
      username: "prathameshyadav786@gmail.com",
      password: "Prat@123",
      client_id: "osyqJXYcwzaNvYmTcB",
      client_secret: "mKaLLVBQL9h46gS8n4h3F7S1",
      grant_type: "password",
    });
    const token = JSON.stringify(res);
    console.log(token);
    setAccessToken(token.access_token);
    getUserData();
  }

  async function getUserData() {
    if (gstNo) {
      const res = await fetch(`${dataUrl}` + `${gstNo}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
          client_id: "osyqJXYcwzaNvYmTcB",
        },
      });
      const data = JSON.stringify(res);
      setUserData(data);
    } else {
      alert("enter Gst no first");
    }
  }

  return (
    <>
      <div class="bg-grey-lighter min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="gstin"
                >
                  GSTIN
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="gstin"
                  type="text"
                  placeholder="GST numeber"
                  value={gstNo}
                  onChange={(e) => {
                    setGstNo(e.target.value);
                  }}
                />
              </div>
              <button
                className="bg-blue-500 m-2 text-white font-bold py-2 px-4 rounded  focus:shadow-outline"
                type="button"
                onClick={getAccessToken}
              >
                GetAccessTokes
              </button>
              <button
                className=" bg-blue-500 m-2 text-white font-bold py-2 px-4 rounded  focus:shadow-outline"
                type="button"
                onClick={getUserData}
              >
                search
              </button>
            </form>
            <div className="data animate-bounce">
              <h1>{userData}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCostomer;
