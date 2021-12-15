import React, { useState } from "react";
import "./editor.css";
import { Controlled as CodeEditor } from "react-codemirror2";
import { FaExpandAlt, FaExpandArrowsAlt } from "react-icons/fa";

require("codemirror/mode/css/css");
require("codemirror/mode/javascript/javascript");
require("codemirror/mode/xml/xml");

const Editor = (props) => {
  const [open, setOpen] = useState(true);
  const { language, name, value, onChange } = props;
  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="header">
        <h1>{name}</h1>
        {open ? (
          <FaExpandAlt
            onClick={() => setOpen((prev) => !prev)}
            cursor="pointer"
          />
        ) : (
          <FaExpandArrowsAlt
            onClick={() => setOpen((prev) => !prev)}
            cursor="pointer"
          />
        )}
      </div>
      <CodeEditor
        value={value}
        className="codemirror-wrapper"
        options={{
          mode: language,
          theme: "material",
          lint: true,
          lineNumbers: true,
          lineWrapping: true,
        }}
        onBeforeChange={onChange}
      />
    </div>
  );
};

export default Editor;
