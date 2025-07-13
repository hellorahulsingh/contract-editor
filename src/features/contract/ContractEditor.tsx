import React from "react";
import DragSection from "./DragSection";
import FormRenderer from "./FormRenderer";
import PreviewPane from "./PreviewPane";

export default function ContractEditor() {
  return (
    <div className="flex h-screen">
      {/* LEFT SECTION */}
      <div className="w-1/2 p-4 border-r overflow-auto">
        <h2 className="text-xl font-bold mb-4">Live Preview of Contract</h2>
        <PreviewPane />
      </div>

      {/* RIGHT SECTION */}
      <div className="w-1/2 flex flex-col p-4 gap-4 overflow-hidden">
        {/* TOP CONTAINER: Drag & Drop Section */}
        <div className="bg-white shadow rounded border p-4 overflow-y-auto max-h-[300px]">
          <DragSection />
        </div>

        {/* BOTTOM CONTAINER: Form Renderer */}
        <div className="bg-white shadow rounded border p-4 flex-1 overflow-auto">
          <FormRenderer />
        </div>

        {/* NEXT BUTTON */}
        <div className="pt-2">
          <button className="w-full py-2 bg-green-600 text-white font-medium rounded shadow hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
