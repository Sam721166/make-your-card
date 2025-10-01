import { useState, useRef } from "react"
import Code from "./code"
import html2canvas from "html2canvas"

import style from "./input.module.css"

export function Input(){


    const [isSubmit, setIsSubmit] = useState(false)

    const [name, setName] = useState("")
    const [title, setTitle] = useState("")
    const [email, setEmail] = useState("")
    const [x, setX] = useState("")
    
    const fileInputRef = useRef(null)

    const [newName, setNewName] = useState()
    const [newTitle, setNewTitle] = useState()
    const [newEmail, setNewEmail] = useState()
    const [newX, setNewX] = useState()

    const cardRef = useRef(null)

    function onSubmit(e){
        e.preventDefault()

        setNewName(name)
        setNewTitle(title)
        setNewEmail(email)
        setNewX(x)


        setName("")
        setTitle("")
        setEmail("")
        setX("")

        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }

        setIsSubmit(true)
    }

    // for image Upload
    const handleDownload = async () =>{
        if (!cardRef.current) return
        const canvas = await html2canvas(cardRef.current)
        const dataUrl = canvas.toDataURL("image/png")

        // Create a link and download
        const link = document.createElement("a")
        link.href = dataUrl
        link.download = "card.png"
        link.click()
    }


    return(
        <>
        <div className={style.hero}>
            <div className={style.left}>
                <div>

                </div>
                <form className={style.main} onSubmit={onSubmit}>

                    <h1 className={style.header}>Make your card</h1>

                    <input 
                        required 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name" 
                    />

                    <input 
                        required 
                        type="text" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        placeholder="Enter your title" 
                    />
                    <input 
                        required 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" 
                    />
                    <input 
                        required 
                        type="text" 
                        value={x} 
                        onChange={(e) => setX(e.target.value)} 
                        placeholder="Enter your X username" 
                    />

                    

                    <button type="submit">Submit</button>

                </form>
            </div>
            

            <div className={style.right}>
                {isSubmit ? (
                    <div className={style.cardMain}>
                        <div ref={cardRef}>
                            <Code 
                                newName={newName}
                                newTitle={newTitle}
                                newEmail={newEmail}
                                newX={newX}
                            />
                        </div>
                        <button onClick={handleDownload}>Download Card</button>
                    </div>
                    
                    
                ) : (
                    <div className={style.noReasult}>
                        <h1>Fill the inputs</h1>
                    </div>
                )}
            </div>
            
        </div>
        </>
    )
}