import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import { Button } from "@material-tailwind/react";

const Editor = () => {
  const [state, setState] = useState<any>({ value: null });
  const handleChange = (value: any) => {
    setState({ value });
  };

  return (
<div>
<div className=" ">
      <div className="border-r h-full">
        <EditorToolbar />
        <ReactQuill
          theme="snow"
          placeholder={"Write something awesome..."}
          modules={modules}
          formats={formats}
          value={state.value}
          className="h-[calc(100vh-156px)]"
          onChange={handleChange}
        />
      </div>

    </div>
   <div className="text-right">
   <Button placeholder={"button"} color="black">Submit</Button>
   </div>
</div>
  );
};

export default Editor;
