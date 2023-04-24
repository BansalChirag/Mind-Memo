import styled from "@emotion/styled";
import { Box, TextField} from "@mui/material";
import React, { useState, useRef, useContext } from "react";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";


const NewNoteElement = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  min-height: 30px;
`;

const note = {
  id: "",
  title: "",
  content: "",
};

const Form = () => {
  const [showTextField, setShowTextField] = useState(false);

  const [addNote, setAddNote] = useState({ ...note, id: uuid() }); // to generate unique id

  const { setNotes} = useContext(DataContext);

  const containerRef = useRef();
  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };
  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    setAddNote({...note,id:uuid()})
    if(addNote.title || addNote.content){
        setNotes(prevNotes=>[addNote,...prevNotes])
    }
    console.log(addNote)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let changeNote = { ...addNote, [name]: value };
    setAddNote(changeNote);
  };


  
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <NewNoteElement ref={containerRef} >
        {showTextField && (
          <TextField
            variant="standard"
            placeholder="Title"
            InputProps={{ disableUnderline: true }}
            onChange={handleChange}
            name="title"
            value={addNote.title}
          >
          </TextField>
        )}
        <TextField
          variant="standard"
          placeholder="Take a note..."
          InputProps={{ disableUnderline: true }}
          maxRows={Infinity}
          multiline
          name="content"
          onChange={handleChange}
          onClick={onTextAreaClick}
          value={addNote.content}
        >
        </TextField>
      </NewNoteElement>
    </ClickAwayListener>
  );
};

export default Form;
