import React from "react"

const tutorials = [
    {id:1,title:"Learn React" , description : "Learn React By this tutorial with Code With Harry"},
    {id:2,title:"Learn Tailwind" , description : "Learn Tailwind By this tutorial with Andrew Ng"}
]

export default function Tutorials(){
    return(
        <>
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tutorials.map((tutorial)=>(
                <div key={tutorial.id} className="bg-slate-200 shadow rounded p-4">
                    <h2 className="text-lg font-bold">{tutorial.title}</h2>
                    <p className="text-gray-600">{tutorial.description}</p>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded">
                        Read More
                    </button>
                </div>
            ))}
        </div>   
        </>
    )
}