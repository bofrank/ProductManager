import { useState, useRef } from 'react';

export default function ProjectForm({visibility}){
    return (
        <div className={visibility}>
            Cancel
            Save
            Title 
            Description 
            Due Date 
        </div>
    )
}