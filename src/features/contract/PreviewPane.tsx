import React from "react";
import { useAppSelector } from "../../hooks";

export default function PreviewPane() {
  const { topics } = useAppSelector((state) => state.contract);

  return (
    <div className="space-y-4">
      {topics.map((topic) => (
        <div key={topic.id} className="border p-2 rounded bg-gray-50">
          <h4 className="font-semibold">{topic.title}</h4>
          <p className="text-sm text-gray-700">{topic.description}</p>
          <ul className="mt-1 text-sm">
            {Object.entries(topic.values).map(([field, value]) => (
              <li key={field}>
                <strong>{field}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
