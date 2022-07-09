import { MouseEvent, useState } from "react";
import { Box, Button, Card, TextInput, NumberInput, Text } from "@mantine/core";
import { FocusEvent } from "react";

function Player({
  playerName,
  playerId,
  setName,
  removePlayer,
}: {
  playerName: string;
  playerId: number;
  setName: (playerName: string, playerId: number) => void;
  removePlayer: (playerId: number) => void;
}) {
  const [total, setTotal] = useState<number>(0);
  const [editable, setEditable] = useState<boolean>(true);
  const [items, setItems] = useState<number[]>([0]);

  const handleBlur = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value) {
      setTotal(Number(e.target.value) + total);
      setItems([...items, Number(e.target.value) + total]);
    }
  };

  const handleClick = () => {
    if (items.length > 1) {
      setTotal(
        total -
          (items[Number(items.length - 1)] - items[Number(items.length - 2)])
      );
      setItems(items.slice(0, items.length - 1));
    } else {
      setTotal(0);
      setItems([total]);
    }
  };

  const handleRemovePlayer = () => {
    removePlayer(playerId);
  };

  const handleNameChange = (e: FocusEvent<HTMLInputElement, Element>) => {
    if (e.target.value) {
      setName(e.target.value, playerId);
    } else {
      setName("New Player", playerId);
    }
    setEditable(false);
  };

  return (
    <Box style={{ width: "100%" }}>
      <Card
        shadow="sm"
        sx={(theme) => ({
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing.lg,
        })}
      >
        <Box
          sx={() => ({
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            display: "flex",
          })}
        >
          <Box
            sx={() => ({
              width: "47.8px",
            })}
          />
          {editable ? (
            <Box
              sx={() => ({
                height: "62px",
                display: "flex",
                alignItems: "center",
              })}
            >
              <TextInput
                placeholder="Name"
                variant="default"
                onBlur={(e) => handleNameChange(e)}
              />
            </Box>
          ) : (
            <Text
              style={{ fontSize: 40, fontWeight: "bold" }}
              onClick={() => setEditable(true)}
            >
              {playerName}
            </Text>
          )}
          <Button onClick={handleRemovePlayer} tabIndex={-1}>
            <Text style={{ fontWeight: "bold" }}>x</Text>
          </Button>
        </Box>

        <Box
          sx={(theme) => ({
            backgroundColor: theme.colors.dark[9],
            border: "1px solid" + theme.colors.dark[5],
            borderRadius: "4px",
            minHeight: "2.5rem",
            minWidth: "5rem",
            padding: "1rem",
          })}
        >
          {items.map((item, index) => (
            <Text style={{ fontSize: 20, textAlign: "center" }} key={index}>
              {item}
            </Text>
          ))}
        </Box>
        <NumberInput
          placeholder="Score"
          variant="default"
          onBlur={(e) => handleBlur(e)}
          onClick={(event) => event.target.select()}
          sx={() => ({
            textAlign: "center",
          })}
        />
        <Button onClick={handleClick} tabIndex={-1}>
          Undo
        </Button>
      </Card>
    </Box>
  );
}

export default Player;
