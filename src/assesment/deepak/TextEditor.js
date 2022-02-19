import React ,{useRef} from "react" ;
import JoditEditor from "jodit-react";
import  config from "../Vikram/Header"


const TextEditor = ({setValue, config, initialValue, getDescription}) => {
    const editor = useRef(null);


return(
     <JoditEditor 
     ref={editor}
     onChange={content => getDescription(content)}
     config= {config}
     value={initialValue}
     />
    // <div>ads</div>
 )
}

 export default TextEditor;