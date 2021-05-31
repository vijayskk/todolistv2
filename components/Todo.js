import React from 'react'
import TextField from '@material-ui/core/TextField';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import { useState } from 'react'
import DoneOutlineIcon from '@material-ui/icons/DoneOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



function Todo() {
    const [previewtitle, setPreviewtitle] = useState("type something")
    const [previewtext, setPreviewtext] = useState("type something")
    const [color, setcolor] = useState("orange")
    const [toDos, settoDos] = useState([])
    return (
        <div className="totaltodo">
            <div className="previewback">
                <div className=" preview" style={{ backgroundColor: color }}>
                    <h1 className="previewhead">{previewtitle}</h1>
                    <div className="previewtext"><p >{previewtext}</p></div>
                </div>
            </div>
            <div className="todo-form">
                <form noValidate autoComplete="off">
                    <h1 className="formhead">What should I remember?</h1>
                    <input className="forminput" type="text" placeholder="Title" onChange={(e) => setPreviewtitle(e.target.value)} />
                    <textarea className="forminput textarea" type="text" placeholder="Text" onChange={(et) => setPreviewtext(et.target.value)} />
                    <input className="forminput colorpick" type="color" placeholder="Title" onChange={(e) => setcolor(e.target.value)} />
                    <div className="addbtn">
                        <IconButton style={{ float: "right", paddingRight: "20px", paddingTop: "20px", width: "50px" }} onClick={() => {
                        settoDos([{ id: Date.now(), title: previewtitle, color: color, text: previewtext, status: "Active" }, ...toDos])
                        }} ><AddBoxIcon /></IconButton>
                    </div>
                </form>
            </div>

            <center><div className="saveditem">
                {
                    toDos.map((obj) => {
                        if (obj.status === "Active") {
                            return (
                                <div className="previewback savednote">
                                    <div className=" preview savednoteup" style={{ backgroundColor: obj.color }}>
                                        <h1 className="previewhead">{obj.title}</h1>
                                        <div className="previewtext"><p >{obj.text}</p></div>
                                        <IconButton value="Done" style={{ float: "right", paddingRight: "20px", marginTop: "200px", width: "50px" }} onClick={(e) => {
                                            settoDos(toDos.filter(obj2 => {
                                                if (obj2.id === obj.id) {
                                                    obj2.status = "Done"
                                                }
                                                return obj2
                                            }))
                                        }}><DoneOutlineIcon /></IconButton>
                                        <IconButton value="Finished" style={{ float: "right", paddingRight: "20px", marginTop: "200px", width: "50px" }} onClick={(e) => {
                                            settoDos(toDos.filter(obj2 => {
                                                if (obj2.id === obj.id) {
                                                    obj2.status = e.target.value
                                                }
                                                return obj2
                                            }))
                                        }} ><DeleteForeverIcon /></IconButton>
                                    </div>
                                </div>
                            )
                        }
                        if (obj.status === "Done") {
                            return (
                                <div className="previewback doneback">
                                    <div className=" preview " style={{ backgroundColor: "#3a3a3a47" }}>
                                        <h1 className="previewhead donetext">{obj.title}</h1>
                                        <div className="previewtext donetext"><p >{obj.text}</p></div>

                                        <IconButton value="Finished" style={{ float: "right", paddingRight: "20px", marginTop: "200px", width: "50px" }} onClick={(e) => {
                                            settoDos(toDos.filter(obj2 => {
                                                if (obj2.id === obj.id) {
                                                    obj2.status = e.target.value
                                                }
                                                return obj2
                                            }))
                                        }} ><DeleteForeverIcon /></IconButton>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div></center>
        </div>
    )
}

export default Todo
