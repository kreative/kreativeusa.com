import { useState } from "react";
import { SealCheck, X } from "@phosphor-icons/react";

export default function SuccessAlert({ message }: { message?: string }) {
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      {!hidden && (
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <SealCheck
                size={24}
                className="text-green-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3 flex justify-start items-center">
              <p className="text-sm font-medium text-green-800">
                {message || "Form submitted successfully!"}
              </p>
            </div>
            <div className="ml-auto pl-3 flex justify-start items-center">
              <div className="-mx-1.5 -my-1.5">
                <button
                  type="button"
                  className="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
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
