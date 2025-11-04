import { useState, useRef } from 'react';

export default function AddProject(){

    function addProject(){
        console.log("hello");
        //NewProject.visibility='visible';
    }

    return (
        <>
            <button onClick={addProject} className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">+ Add Project</button>
        </>
    )
}