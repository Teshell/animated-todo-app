import { Checkbox, Input, Stack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";

import AnimatedTaskLabel from "./animated-task-label";

interface TaskItemProps {
  id: number;
  subject: string;
  done: boolean;
  onSubjectChange: (id: number, newSubject: string) => void;
  onToggleCheckbox: (id: number) => void;
}

const TaskItem = ({
  id,
  subject,
  done,
  onSubjectChange,
  onToggleCheckbox,
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

  return (
    <motion.div
      style={{ overflow: "hidden", marginBottom: "10px" }}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ x: -50, opacity: 0 }}
      transition={{ delay: 0.4 }}
    >
      <Stack
        spacing={2}
        direction="row"
        px={4}
        py={3}
        w="full"
        align={"center"}
        bg={useColorModeValue("gray.100", "dark.secondary")}
        borderRadius={"3xl"}
      >
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
    </motion.div>
  );
};

export default TaskItem;
