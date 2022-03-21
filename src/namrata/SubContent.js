import React, { useState } from 'react';
import useCollapse from 'react-collapsed';
import RecipeReviewCard from './SubTopicTile';
import SubjectTile from "./SubjectTile";
import { GolfCourse } from '@mui/icons-material';
import CourseTile from './CourseTile';

export default function Collapsible() {
    const [ isExpanded, setExpanded ] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
function handleOnClick() {
        // Do more stuff with the click event!
        // Or, set isExpanded conditionally 
        setExpanded(!isExpanded);
    }
return (
        <div className="collapsible">
            <div className="header" {...getToggleProps({onClick: handleOnClick})}>
                {isExpanded ? 'Collapse' : 'Expand'}
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <CourseTile/>
                    
                </div>
            </div>
        </div>
    );
}
