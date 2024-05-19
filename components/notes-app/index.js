import React, { useState } from "react";
import TextField from "../text-field";
import Table from "../table";
import TabPanel from "../tab-panel";
import "./index.css";

function NotesApp() {
    const [note, setNote] = useState({ title: "", status: "" });
    const [error, setError] = useState({ title: "", status: "" });
    const [notes, setNotes] = useState([]);
    const [selectedTab, setSelectedTab] = useState("all");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNote({
            ...note,
            [name]: value,
        });
        setError({
            ...error,
            [name]: "",
        });
    };

    const handleAddNote = () => {
        let errors = {};
        if (!note.title.trim()) {
            errors = { ...errors, title: "Note Title is required" };
        }
        if (!note.status.trim()) {
            errors = { ...errors, status: "Note Status is required" };
        }

        if (!note.title.trim() || !note.status.trim()) {
            setError(errors);
            return;
        }

        setNotes([...notes, note]);

        setNote({
            title: "",
            status: "",
        });
    };


    const filterNotesByStatus = (status) => {
        if (status === "all") {
            return notes;
        }
        return notes.filter((note) => note.status === status);
    };

    return (
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <TextField
                    id="noteTitle"
                    name="title"
                    label="Note Title"
                    value={note.title}
                    error={error.title}
                    onChange={handleInputChange}
                />
                <TextField
                    id="noteStatus"
                    name="status"
                    label="Note Status"
                    value={note.status}
                    error={error.status}
                    onChange={handleInputChange}
                />
                <div>
                    <button data-testid="submit-button" onClick={handleAddNote}>
                        Add Note
                    </button>
                </div>
            </section>
            <TabPanel selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <Table notes={filterNotesByStatus(selectedTab)} />
        </div>
    );
}

export default NotesApp;
