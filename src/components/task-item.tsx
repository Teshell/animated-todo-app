import { useCallback, useState } from "react";

import { Icon } from "@chakra-ui/icons";
import { BsTrash } from "react-icons/bs";

import { motion } from "framer-motion";

import {
  Checkbox,
  IconButton,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

import AnimatedTaskLabel from "./animated-task-label";

interface TaskItemProps {
  id: number;
  subject: string;
  done: boolean;
  onSubjectChange: (id: number, newSubject: string) => void;
  onToggleCheckbox: (id: number) => void;
  onDeleteItem: (id: number) => void;
}

const TaskItem = ({
  id,
  subject,
  done,
  onSubjectChange,
  onToggleCheckbox,
  onDeleteItem,
}: TaskItemProps) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubjectChange = useCallback(
    (newSubject: string) => {
      onSubjectChange(id, newSubject);
    },
    [id, onSubjectChange]
  );

  const handleToggleCheckbox = useCallback(() => {
    onToggleCheckbox(id);
  }, [id, onToggleCheckbox]);

  const handleDeleteItem = useCallback(() => {
    onDeleteItem(id);
  }, [id, onDeleteItem]);

  return (
    <motion.div
      style={{
        overflow: "hidden",
        marginBottom: "10px",
      }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Stack
        direction={"row"}
        justifyContent="space-between"
        px={4}
        py={3}
        w="full"
        bg={useColorModeValue("gray.100", "dark.secondary")}
        borderRadius={"3xl"}
      >
        <Stack spacing={2} direction="row" w="80">
          <Checkbox
            checked={done}
            onChange={() => handleToggleCheckbox()}
            size="lg"
            colorScheme="orange"
          />

          {isEditing ? (
            <Input
              variant={"unstyled"}
              fontWeight={"bold"}
              letterSpacing={"wide"}
              fontSize={"xl"}
              noOfLines={1}
              value={subject}
              autoFocus
              blur={done}
              onBlur={() => setIsEditing(false)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsEditing(false);
                }
              }}
              onChange={(e) => handleSubjectChange(e.target.value)}
            />
          ) : (
            <AnimatedTaskLabel
              strikeThrough={done}
              onClick={() => setIsEditing(true)}
            >
              {subject}
            </AnimatedTaskLabel>
          )}
        </Stack>

        <IconButton
          size={"sm"}
          aria-label="Delete Task"
          onClick={() => handleDeleteItem()}
        >
          <Icon as={BsTrash} />
        </IconButton>
      </Stack>
    </motion.div>
  );
};

export default TaskItem;
