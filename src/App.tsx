import { useState } from "react";

import { Box, Button, Text } from "@mantine/core";

import Player from "./components/Player";

function App() {
  const [players, setPlayers] = useState<
    { playerName: string; playerId: number }[]
  >([
    {
      playerName: "New Player",
      playerId: 0,
    },
  ]);

  const removePlayer = (playerId: number) => {
    const newPlayersList =
      players && players.filter((player) => player.playerId !== playerId);
    setPlayers(newPlayersList);
  };

  const addPlayer = () => {
    if (players) {
      setPlayers([
        ...players,
        { playerName: "New Player", playerId: players.length + 1 },
      ]);
    } else {
      setPlayers([{ playerName: "New Player", playerId: 1 }]);
    }
  };

  const setName = (playerName: string, playerId: number) => {
    const newPlayersList =
      players &&
      players.map((player) => {
        if (player.playerId === playerId) {
          return { ...player, playerName: playerName, playerId: playerId };
        }
        return player;
      });
    setPlayers(newPlayersList);
  };

  return (
    <Box
      sx={(theme) => ({
        padding: theme.spacing.lg,
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: theme.spacing.lg,
        })}
      >
        <Box
          sx={() => ({
            width: "47.04px",
          })}
        />
        <Text align="center" weight="bold" style={{ fontSize: "80px" }}>
          Rummikub
        </Text>
        <Button onClick={addPlayer} tabIndex={-1}>
          <Text style={{ fontWeight: "bold" }}>+</Text>
        </Button>
      </Box>
      <Box
        sx={(theme) => ({
          display: "flex",
          gap: theme.spacing.lg,
        })}
      >
        {players &&
          players.map((player, index) => (
            <Player
              playerName={player.playerName}
              playerId={player.playerId}
              setName={setName}
              removePlayer={removePlayer}
              key={index}
            />
          ))}
      </Box>
    </Box>
  );
}

export default App;
