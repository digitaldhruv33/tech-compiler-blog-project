import {
  Button,
  FormControl,
  Input,
  TextareaAutosize,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { submitBlog } from "../../api/BlogApi";

function CreateBlog() {
  const initialState = { heading: "", description: "" };
  const [data, setData] = useState(initialState);
  

  const onTextChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    return await submitBlog(data);
  };

  return (
    <div>
      <FormControl>
        <Input
          placeholder="Your blog title/heading"
          type="text"
          required={true}
          name="heading"
          value={data.heading}
          onChange={onTextChange}
        />
        <TextareaAutosize
          minRows={14}
          placeholder="Your blog description"
          style={{ width: 200 }}
          required={true}
          name="description"
          value={data.description}
          onChange={onTextChange}
        />
        <Button type="submit" variant="contained" onClick={handleSubmit}>
          Submit your blog
        </Button>
      </FormControl>
    </div>
  );
}

export default CreateBlog;
