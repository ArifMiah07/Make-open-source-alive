import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Canvas = () => {
  const [notes, setNotes] = useState([]);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [editingNote, setEditingNote] = useState(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get('http://localhost:5000/notes');
    setNotes(response.data);
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    if (!newNoteContent) return;

    const newNote = { content: newNoteContent, x: 50, y: 50 }; // x and y are still required for the backend
    const response = await axios.post('http://localhost:5000/notes', newNote);
    setNotes([...notes, response.data]);
    setNewNoteContent('');
  };

  const handleDeleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    setNotes(notes.filter(note => note._id !== id));
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
    setEditContent(note.content);
  };

  const handleUpdateNote = async (e) => {
    e.preventDefault();
    if (!editContent) return;

    const updatedNote = { ...editingNote, content: editContent };
    const response = await axios.put(`http://localhost:5000/notes/${editingNote._id}`, updatedNote);
    setNotes(notes.map(note => note._id === editingNote._id ? response.data : note));
    setEditingNote(null);
    setEditContent('');
  };

  return (
    <div className="h-screen  flex flex-col items-center">
      <form onSubmit={handleAddNote} className="my-4">
        <textarea
          type="text"
          rows={"4"}
          value={newNoteContent}
          onChange={(e) => setNewNoteContent(e.target.value)}
          placeholder="Enter note content"
          className="border p-2 mr-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Add Note</button>
      </form>
      {editingNote && (
        <form onSubmit={handleUpdateNote} className="my-4">
          <textarea
            type="text"
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            placeholder="Edit note content"
            className="border p-2 mr-2 w-full"
          />
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Update Note</button>
          <button
            type="button"
            onClick={() => setEditingNote(null)}
            className="bg-red-500 text-white py-2 px-4 rounded ml-2"
          >
            Cancel
          </button>
        </form>
      )}
      <div className="flex flex-col items-start p-4 border border-gray-400 w-1/2 max-h-96 overflow-y-scroll">
        {notes.map(note => (
          <div key={note._id} className=" w-full border border-red-500 flex-wrap bg-yellow-100 p-5 m-2 rounded shadow flex justify-between items-center ">
            <p className=" flex flex-wrap">{note.content}</p>
            <div className="flex">
              <button
                onClick={() => handleEditNote(note)}
                className="bg-green-500 text-white py-1 px-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteNote(note._id)}
                className="bg-red-500 text-white py-1 px-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
