import { AddIcon } from "@chakra-ui/icons";
import { Box, Input, Stack } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

import { nanoid } from "nanoid";

import { useCallback, useState } from "react";
import TaskItem from "./task-item";

const initialData = [
  {
    id: nanoid(10),
    subject: "Go to a Cafe",
    done: false,
  },

  {
    id: nanoid(10),
    subject: "Workout",
    done: false,
  },

  {
    id: nanoid(10),
    subject: "Work",
    done: false,
  },
];

const TaskList = () => {
  const [data, setData] = useState(initialData);
  const [newTask, setNewTask] = useState("");

  const handleSubjectChange = useCallback((id: string, newSubject: string) => {
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

  const handleCheckbox = useCallback((id: string) => {
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

  const handleDeleteItem = useCallback((id: string) => {
    setData((prevData) => {
      const index = prevData.findIndex((e) => e.id === id);
      const item = prevData[index];

      const newData = prevData.filter((i) => i !== item);

      return newData;
    });
  }, []);

  return (
    <>
      <Box
        px={4}
        py={3}
        w="full"
        borderColor={"gray.200"}
        borderRadius={"3xl"}
        borderWidth={2}
        mb={2}
      >
        <Stack direction={"row"} spacing={"2"} align="center">
          <AddIcon w={5} h={5} />
          <Input
            variant={"unstyled"}
            fontWeight={"bold"}
            letterSpacing={"wide"}
            fontSize={"xl"}
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && newTask) {
                const id = nanoid();

                setData([
                  ...data,
                  {
                    id,
                    subject: newTask,
                    done: false,
                  },
                ]);

                setNewTask("");
              }
            }}
            noOfLines={1}
            placeholder="New Task"
            autoFocus
            w="full"
          />
        </Stack>
      </Box>
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
    </>
  );
};

export default TaskList;
