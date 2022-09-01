import { motion, AnimatePresence } from "framer-motion";

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

  const handleDeleteItem = useCallback((id: number) => {
    setData((prevData) => {
      const index = prevData.findIndex((e) => e.id === id);
      const item = prevData[index];

      const newData = prevData.filter((i) => i !== item);

      return newData;
    });
  }, []);

  return (
    <AnimatePresence>
      {data.map((task) => (
        <motion.div
          key={task.id}
          exit={{ x: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <TaskItem
            id={task.id}
            done={task.done}
            subject={task.subject}
            onSubjectChange={handleSubjectChange}
            onToggleCheckbox={handleCheckbox}
            onDeleteItem={handleDeleteItem}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default TaskList;
