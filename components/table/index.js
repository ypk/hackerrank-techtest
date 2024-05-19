// Table.js
import React from "react";

const Table = ({ notes }) => {
    return (
        <div className="card w-40 pt-30 pb-8">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {notes.map((note, index) => (
                        <tr key={index}>
                            <td>{note.title}</td>
                            <td>{note.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
