import { Card} from "@material-ui/core";
import { CardActions, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";
import styled from "@emotion/styled";
import Tooltip from '@mui/material/Tooltip';
const StyledCard = styled(Card)`
border: 1px solid #e0e0e0;
border-radius: 8px;
width: 240px;
margin: 8px;
box-shadow: none;
`;

const Note = ({ note }) => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchiveNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeleteNotes(prevArr => [note, ...prevArr]);
    }

  return (
    <StyledCard>
      <CardContent>
        <Typography>{note.title}</Typography>
        <Typography>{note.content}</Typography>
      </CardContent>
      <CardActions style={{ cursor: "pointer" }}>
      <Tooltip title="Archive">
        <Archive
        fontSize="small"
        style={{ marginLeft: "auto" }}
        onClick={() => archiveNote(note)}
        />
      </Tooltip>
      <Tooltip title="Delete">
        <Delete 
        fontSize="small" 
        onClick={() => deleteNote(note)} 
        />
      </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default Note;
