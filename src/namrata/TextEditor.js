import React, {useRef} from "react";
import JoditEditor from "jodit-react";
// import './App.css';

const TextEditor = ({setValue , config, initialValue}) => {
    const editor = useRef(null)
     
    ;


    return( 
        <JoditEditor 
        ref={editor} 
        onChange={content => setValue(content)}
        config= {config}
        value={initialValue}
      
        />
    )
}

export default TextEditor;