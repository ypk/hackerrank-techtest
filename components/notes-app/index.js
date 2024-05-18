import React from "react";
import "./index.css";

function NotesApp() {

    return (
        <div className="layout-column align-items-center justify-content-start">
            <section className="layout-row align-items-center justify-content-center mt-30">
                <div>
                    <label htmlFor="noteTitle">Note Title:</label>
                    <input id="noteTitle" name="title" type="text" className="large mx-8" placeholder="Note Title" />
                </div>
                <div>
                    <label htmlFor="noteStatus">Note Status:</label>
                    <input id="noteStatus" name="status" type="text" className="large mx-8" placeholder="Note Status" />
                </div>
                <div>
                    <button data-testid="submit-button">Add Note</button>
                </div>
            </section>
            <div className="mt-50">
                <ul className="tabs">
                    <li className="tab-item slide-up-fade-in active">All</li>
                    <li className="tab-item slide-up-fade-in">Active</li>
                    <li className="tab-item slide-up-fade-in ">Completed</li>
                </ul>
            </div>
            <div className="card w-40 pb-8">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
        </div>
    );
}

export default NotesApp;
