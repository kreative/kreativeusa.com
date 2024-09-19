import { useState } from "react";
import { WarningOctagon, X } from "@phosphor-icons/react";

export default function SuccessAlert({ message }: { message?: string }) {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {!hidden && (
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <WarningOctagon
                size={24}
                className="text-red-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex justify-start items-center">
              <p className="text-sm font-medium text-red-800">
                {message || "We ran into an error! Please try again later."}
              </p>
            </div>
            <div className="ml-auto pl-3 flex justify-start items-center">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:ring-offset-red-50"
                  onClick={() => setHidden(true)}
                >
                  <span className="sr-only">Dismiss</span>
                  <X size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
