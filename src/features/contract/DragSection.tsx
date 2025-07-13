import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setActiveTopic } from "./contractSlice";

export default function DragSection() {
  const topics = useAppSelector((state) => state.contract.topics);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h3 className="text-lg font-semibold">Drag & Drop Sections</h3>
      <ul className="space-y-1 mt-2">
        {topics.map((topic) => (
          <li
            key={topic.id}
            onClick={() => dispatch(setActiveTopic(topic.id))}
            className="cursor-pointer px-2 py-1 border rounded hover:bg-gray-100"
          >
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
