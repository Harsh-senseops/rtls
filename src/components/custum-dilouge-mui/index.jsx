import React from "react";
import { Dialog } from "@mui/material";
import PropTypes from "prop-types";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {Button} from "@mui/material";
import "./index.css"

export default function CustomDilougeMui({ open, onClose, children, title, handleSave }) {
  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: "#CEDEBD",
          padding:"1em",
        //   color:""
        },
      }}
      className="custom-dialoge"
      onClose={onClose}
      open={open}
    >
        <DialogTitle style={{fontWeight:"bolder"}}>{title}</DialogTitle>
        <DialogContent>
        {children}
        </DialogContent>
        <DialogActions>
          <Button style={{background:"#435334",color:"white",fontFamily:"sans-serif",fontWeight:"bold"}} onClick={onClose}>Cancel</Button>
          <Button onClick={handleSave} style={{background:"#435334",color:"white",fontFamily:"sans-serif",fontWeight:"bold"}}>Logout</Button>
        </DialogActions>
    </Dialog>
  );
}

CustomDilougeMui.prototype = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
