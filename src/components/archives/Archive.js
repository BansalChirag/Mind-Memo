import { Card} from "@material-ui/core";
import { CardActions, CardContent, Typography } from "@mui/material";
import React, { useContext } from "react";
import {
    UnarchiveOutlined as Unarchive,
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




const Archive = ({ archive }) => {


    const { archiveNotes, setNotes, setArchiveNotes, setDeleteNotes } = useContext(DataContext);
    const unArchiveNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setNotes(prevArr => [archive, ...prevArr]);
    }

    const deleteNote = (archive) => {
        const updatedNotes = archiveNotes.filter(data => data.id !== archive.id);
        setArchiveNotes(updatedNotes);
        setDeleteNotes(prevArr => [archive, ...prevArr]);
    }

    return (
        <StyledCard>
            <CardContent>
                <Typography>{archive.title}</Typography>
                <Typography>{archive.content}</Typography>
            </CardContent>
            <CardActions style={{ cursor: "pointer" }}>
            <Tooltip title="Unarchive">
                <Unarchive 
                    fontSize="small" 
                    style={{ marginLeft: 'auto' }} 
                    onClick={() => unArchiveNote(archive)}
                />
            </Tooltip>
            <Tooltip title="Delete">
                <Delete 
                fontSize="small"
                onClick={() => deleteNote(archive)}
                />
                </Tooltip>
            </CardActions>
        </StyledCard>
    );
};

export default Archive;
