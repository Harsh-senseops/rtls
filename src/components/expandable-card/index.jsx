import React from "react";
import { Card, CardHeader, IconButton, Collapse } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomExpandableCard({expanded,handleExpandClick}) {
    return(
        <Card style={{ marginBottom: "15px", color: "black", }}>
        <CardHeader
          onClick={handleExpandClick}
          sx={{
            transition: "all 250ms",
            ":hover": {
              // boxShadow: 20,
              cursor: "pointer",
              backgroundColor: "#EEEDED !important",
              borderRadius: "10px",
              transform: "scale(1.02)",
              color:"red"
            },
          }}
          action={
            <IconButton aria-label="show more" color="info">
              <ExpandMoreIcon />
            </IconButton>
          }
          title="Zone 1"
        />

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>amigo</CardContent>
        </Collapse>
      </Card>
    )
}