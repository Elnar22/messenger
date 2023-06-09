import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Form = ({ onSubmit }) => {
  const inputRef = useRef();

  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
    setValue("");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        autoFocus
        value={value}
        onChange={handleChange}
        label="Message:"
        variant="standard"
        inputRef={inputRef}
      />
      <Button
        sx={{ padding: "11px 40px", marginLeft: "20px" }}
        type="submit"
        variant="contained"
      >
        Send
      </Button>
    </form>
  );
};
