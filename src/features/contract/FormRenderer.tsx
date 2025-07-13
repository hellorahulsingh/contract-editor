import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateField } from "./contractSlice";

export default function FormRenderer() {
  const { topics, activeTopicId } = useAppSelector((state) => state.contract);
  const dispatch = useAppDispatch();

  const topic = topics.find((t) => t.id === activeTopicId);

  if (!topic) return null;

  return (
    <div className="mt-4">
      <h4 className="text-md font-bold mb-2">{topic.title}</h4>
      <p className="text-sm mb-2">{topic.description}</p>
      {topic.formFields.map((field) => (
        <div className="mb-2" key={field}>
          <label className="block text-sm mb-1">{field}</label>
          <input
            type="text"
            className="w-full border px-2 py-1 rounded"
            value={topic.values[field] || ""}
            onChange={(e) =>
              dispatch(updateField({ topicId: topic.id, field, value: e.target.value }))
            }
          />
        </div>
      ))}
    </div>
  );
}
