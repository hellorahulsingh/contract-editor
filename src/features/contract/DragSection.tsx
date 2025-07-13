import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { setActiveTopic, toggleTopicActive } from "./contractSlice";

export default function DragSection() {
  const topics = useAppSelector((state) => state.contract.topics);
  const dispatch = useAppDispatch();

  return (
    <>
      <h3 className="text-lg font-semibold">Drag & Drop Sections</h3>
      <ul className="space-y-2">
        {topics.map((topic) => (
          <li
            key={topic.id}
            className="flex items-center gap-2 cursor-pointer p-2 border rounded hover:bg-gray-100"
          >
            <input
              type="checkbox"
              checked={topic.isActive}
              onChange={() => dispatch(toggleTopicActive(topic.id))}
              onClick={(e) => e.stopPropagation()} // prevent selecting on checkbox click
            />
            <span
              onClick={() => dispatch(setActiveTopic(topic.id))}
              className={`flex-1 ${topic.isActive ? "" : "line-through text-gray-400"}`}
            >
              {topic.title}
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

