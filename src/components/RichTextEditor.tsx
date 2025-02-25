import React, { useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { Box, Button, Typography } from "@mui/material";

const RichTextEditor: React.FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command: string) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  const toggleInlineStyle = (style: string) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  return (
    <Box p={3}>
      <Typography variant="h4">Rich Text Editor</Typography>
      <Box>
        <Button variant="contained" onClick={() => toggleInlineStyle("BOLD")} sx={{ mr: 1 }}>
          Bold
        </Button>
        <Button variant="contained" onClick={() => toggleInlineStyle("ITALIC")} sx={{ mr: 1 }}>
          Italic
        </Button>
        <Button variant="contained" onClick={() => toggleInlineStyle("UNDERLINE")}>
          Underline
        </Button>
      </Box>
      <Box mt={2} p={2} border="1px solid #ccc" minHeight="200px">
        <Editor editorState={editorState} handleKeyCommand={handleKeyCommand} onChange={setEditorState} />
      </Box>
    </Box>
  );
};

export default RichTextEditor;
