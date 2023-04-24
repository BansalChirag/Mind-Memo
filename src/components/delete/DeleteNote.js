import { Card} from "@material-ui/core";
import { CardActions, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
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

const DeleteNote = ({ deleteNote }) => {
  const { deleteNotes, setNotes, setDeleteNotes } = useContext(DataContext);

  const restoreNote = (deleteNote)=>{
    const updatedNote = deleteNotes.filter(data=>data.id!==deleteNote.id)
    setDeleteNotes(updatedNote);
    setNotes(prevArr => [deleteNote, ...prevArr]);
    // toast('Note restored successfully.');
  } 
  const removeNote = (deleteNote)=>{
    const updatedNotes = deleteNotes.filter(data => data.id !== deleteNote.id);
    setDeleteNotes(updatedNotes);
  }


  return (
    <StyledCard>
      <CardContent>
        <Typography>{deleteNote.title}</Typography>
        <Typography>{deleteNote.content}</Typography>
      </CardContent>
      <CardActions style={{ cursor: "pointer" }}>
        <Tooltip title="Delete">
          <Delete
          fontSize="small"
          style={{ marginLeft: "auto" }}
          onClick={() => removeNote(deleteNote)}
          />
        </Tooltip>
        <Tooltip title="Restore">
        <Restore 
          fontSize="small" 
          onClick={() => restoreNote(deleteNote)} 
          />
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
