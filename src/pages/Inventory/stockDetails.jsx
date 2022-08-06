import React from 'react';

const StockDetails = () => {
  return (
    <div class="flex m-6 flex-col">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
            <h3>Stock details</h3>
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
                  Costomer Name
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  *
                </th>
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  *
                </th>{" "}
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  *
                </th>{" "}
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  *
                </th>{" "}
                <th
                  scope="col"
                  class="text-sm font-medium text-white px-6 py-4"
                >
                  *
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b">
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  1
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Mark
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  Otto
                </td>
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>{" "}
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>{" "}
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>{" "}
                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  @mdo
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
};

export default StockDetails;
