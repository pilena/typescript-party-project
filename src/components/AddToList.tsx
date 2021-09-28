import React, { useState } from "react";
import { IState as Props } from "../App"

interface IProps {
    people: Props["people"]
    setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

const AddToList:React.FC<IProps> = ( {people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "", 
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input, 
            [e.target.name]: e.target.value
        })
    }

    const handleClick =(e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if( !input.name || !input.age || !input.img ) {
            return 
        }

        setPeople ([
            ...people, 
            {
                name: input.name, 
                age: parseInt(input.age), 
                url: input.img, 
                note: input.note
            }
        ])

        setInput ({
            name: "",
            age: "",
            note: "", 
            img: ""
        })
    }
    return (
        <div >
            <form className="AddToList">
                <input type="text" placeholder="Name" value={input.name} name="name" onChange={handleChange} className="AddToList-input"/>
                <input type="text" placeholder="Age" value={input.age} name="age" onChange={handleChange} className="AddToList-input"/>
                <input type="text" placeholder="Image Url" value={input.img} name="img" onChange={handleChange} className="AddToList-input"/>
                <textarea placeholder="Note" value={input.note} name="note" onChange={handleChange} className="AddToList-input"/> 

                <button className="AddToList-btn" onClick={handleClick}> 
                    Add to List 
                </button>
            </form>
        </div>
    )
}

export default AddToList
