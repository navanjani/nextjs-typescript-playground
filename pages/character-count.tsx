import * as React from "react";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import Textarea from "@mui/joy/Textarea";
import Typography from "@mui/joy/Typography";
import { Container, Stack, styled } from "@mui/material";
import { NextPage } from "next";
import Grid from "@mui/material/Grid";
import { auto } from "@popperjs/core";
import { borderRadius, width } from "@mui/system";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import Button from "@mui/material/Button";

const CharacterCount: NextPage = () => {
  const [text, setText] = React.useState("");
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const wordCount = (str: string) => {
    return str ? str.trim().split(" ").length : 0;
  };
  const numberOfWords = wordCount(text);

  return (
    <Container>
      <Grid mt={10}>
        <Typography
          textColor="#00008B"
          fontSize="2rem"
          fontWeight="lg"
          level="display1"
        >
          Character/Word Count
        </Typography>
      </Grid>
      <Grid>
        <Box
          sx={{
            border: "1px solid #00008B",
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: "#C0C0C0",
            "&:hover": {
              backgroundColor: "#7FFD4",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Textarea
            placeholder="Type in here…"
            value={text}
            onChange={(event) => setText(event.target.value)}
            minRows={2}
            maxRows={10}
            sx={{
              width: 1150,
              height: 500,
            }}
          />
        </Box>
      </Grid>
      <Grid mt={5} container spacing={3}>
        <Grid item xs={4}>
          <Item
            sx={{ border: "1px solid #00008B", fontSize: 16, color: "#00008B" }}
          >
            {text.length} character(s)
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{ border: "1px solid #00008B", fontSize: 16, color: "#00008B" }}
          >
            {numberOfWords} word(s)
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item
            sx={{ border: "1px solid #00008B", fontSize: 16, color: "#00008B" }}
          >
            bytes
          </Item>
        </Grid>
      </Grid>
      <Grid
        width="300px"
        bgcolor="#00FFFF"
        alignItems="flex-end"
        mt={5}
        sx={{
          border: "1px solid #00008B",
          borderRadius: 10,
          textAlign: "center",
          fontSize: 16,
          color: "#00008B",
        }}
      >
        <Box>
          <Link href="/">Home </Link>
        </Box>
      </Grid>
    </Container>
  );
};
export default CharacterCount;
