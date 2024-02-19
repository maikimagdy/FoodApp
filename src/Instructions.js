import { CardContent, Collapse, Typography } from "@mui/material";
import React from "react";

function Instructions({ detail, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent className="overflow-y-auto h-auto h-80">
        <h1 className="text-3xl">Method :</h1>
        <Typography>
          {detail.analyzedInstructions &&
            detail.analyzedInstructions.map((obj) =>
              obj.steps.map((obj) => (
                <div className="my-2 text-gray-400">
                  {obj.number}. {obj.step}
                </div>
              ))
            )}
        </Typography>
      </CardContent>
    </Collapse>
  );
}

export default Instructions;
