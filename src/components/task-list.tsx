import { useCallback, useState } from "react";
import TaskItem from "./task-item";

const initialData = [
  {
    id: 1,
    subject: "Go to a Cafe",
    done: false,
  },

  {
    id: 2,
    subject: "Workout",
    done: false,
  },

  {
    id: 3,
    subject: "Work",
    done: false,
  },

  {
    id: 4,
    subject: "Gym",
    done: false,
  },

  {
    id: 5,
    subject: "Go to a Cafe",
    done: false,
  },

  {
    id: 6,
    subject: "Workout",
    done: false,
  },

  {
    id: 7,
    subject: "Work",
    done: false,
  },

  {
    id: 8,
    subject: "Gym",
    done: false,
  },
  {
    id: 9,
    subject: "Go to a Cafe",
    done: false,
  },

  {
    id: 10,
    subject: "Workout",
    done: false,
  },

  {
    id: 11,
    subject: "Work",
    done: false,
  },

  {
    id: 12,
    subject: "Gym",
    done: false,
  },
];

const TaskList = () => {
  const [data, setData] = useState(initialData);

  const handleSubjectChange = useCallback((id: number, newSubject: string) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.findIndex((e) => e.id === id);
      const item = prevData[index];

      newData[index] = {
        ...item,
        subject: newSubject,
      };

      return newData;
    });
  }, []);

  const handleCheckbox = useCallback((id: number) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.findIndex((e) => e.id === id);
      const item = prevData[index];

      newData[index] = {
        ...item,
        done: !item.done,
      };

      return newData;
    });
  }, []);

  return (
    <>
      {data.map((task) => (
        <TaskItem
          id={task.id}
          done={task.done}
          subject={task.subject}
          onSubjectChange={handleSubjectChange}
          onToggleCheckbox={handleCheckbox}
        />
      ))}
    </>
  );
};

export default TaskList;
