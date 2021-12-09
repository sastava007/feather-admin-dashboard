import { useState } from "react";
import { editableType } from "./Table";

const Modal = ({
  isEditing,
  currentData,
  handleUpdate,
}: {
  isEditing: Boolean;
  currentData: editableType;
  handleUpdate: (data: editableType) => void;
}) => {
  const [newData, setnewData] = useState<editableType>(currentData);
  return (
    <>
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-40 overflow-y-auto h-full w-full"></div>
      )}
      <div className="sticky -h-1 mx-auto p-5 border w-2/5 shadow-lg rounded-md bg-white">
        <div className="mt-3 flex flex-row ml-7">
          <div>
            <label
              htmlFor="policyNumber"
              className="text-xs text-primary font-light placeholder-gray-gray4 px-2"
            >
              #Policy
            </label>
            <br />
            <input
              id="policyNumber"
              className="ml-2 rounded-md outline:pruple focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              readOnly
              value={currentData.policyNumber}
            />
          </div>
          <div>
            <label
              htmlFor="provider"
              className="text-xs text-primary font-light placeholder-gray-gray4 px-2"
            >
              Provider
            </label>
            <br />
            <input
              id="provider"
              className="ml-2 rounded-md outline:pruple focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              defaultValue={currentData.provider}
              onChange={(e) =>
                setnewData({ ...newData, provider: e.target.value })
              }
            />
          </div>
        </div>
        <div className="flex flex-row ml-7">
          <div>
            <label
              htmlFor="insurance_type"
              className="text-xs text-primary font-light placeholder-gray-gray4 px-2"
            >
              Insurance Type
            </label>
            <br />
            <input
              id="insurance_type"
              className="ml-2 rounded-md outline:pruple focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              defaultValue={currentData.insurance_type}
              onChange={(e) =>
                setnewData({ ...newData, insurance_type: e.target.value })
              }
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="text-xs text-primary font-light placeholder-gray-gray4 px-2"
            >
              Status
            </label>
            <br />
            <input
              id="status"
              className="ml-2 rounded-md outline:pruple focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              type="text"
              defaultValue={currentData.status}
              onChange={(e) =>
                setnewData({ ...newData, status: e.target.value })
              }
            />
          </div>
        </div>
        <div className="items-center px-4 py-3">
          <button
            onClick={() => handleUpdate(newData)}
            className="px-4 py-2 bg-feather-purple text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
