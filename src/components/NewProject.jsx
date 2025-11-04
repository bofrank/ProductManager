import { useState, useRef } from 'react';

export default function NewProject({visibility}){
    return (
        <div className={visibility}>
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                <li><button className="text-stone-800 hover:text-stone-950">Save</button></li>
            </menu>
            <div className="w-[35rem] mt-16">
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">Title</label>
                        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                </p>
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">Description</label>
                        <textarea />
                </p>
                <p className="flex flex-col gap-1 my-4">
                    <label className="text-sm font-bold uppercase text-stone-500">Due Date </label>
                        <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" />
                </p>
            </div>    
        </div>
    )
}