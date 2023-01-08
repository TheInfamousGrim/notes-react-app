import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline';

// Components
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';

// Data
import { data } from './data';

function App() {
    const [notes, setNotes] = useState([]);
    const [currentNoteId, setCurrentNoteId] = useState(
        (notes[0] && notes[0].id) || ''
    );
    const [sidebarOpen, setSidebarOpen] = useState(false);

    function createNewNote() {
        const newNote = {
            id: nanoid(),
            body: "# Type your markdown note's title here",
        };
        setNotes((prevNotes) => [newNote, ...prevNotes]);
        setCurrentNoteId(newNote.id);
    }

    function updateNote(text) {
        setNotes((oldNotes) =>
            oldNotes.map((oldNote) =>
                oldNote.id === currentNoteId
                    ? { ...oldNote, body: text }
                    : oldNote
            )
        );
    }

    function findCurrentNote() {
        return notes.find((note) => note.id === currentNoteId) || notes[0];
    }

    return (
        <main className="bg-base-100">
            {notes.length > 0 ? (
                <>
                    <Sidebar
                        notes={notes}
                        currentNote={findCurrentNote()}
                        setCurrentNoteId={setCurrentNoteId}
                        newNote={createNewNote}
                        setSidebarOpen={setSidebarOpen}
                        sidebarOpen={sidebarOpen}
                    />

                    <div className="flex flex-col md:pl-64">
                        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-base-100 shadow">
                            <button
                                type="button"
                                className="px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden hover:bg-base-light"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <span className="sr-only">Open sidebar</span>
                                <Bars3BottomLeftIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="flex flex-1 justify-between px-4">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Markdown Editor
                                    </h1>
                                    {/* Profile dropdown */}
                                </div>
                            </div>
                        </div>
                        <main className="flex-1">
                            {currentNoteId && notes.length > 0 && (
                                <Editor
                                    currentNote={findCurrentNote()}
                                    updateNote={updateNote}
                                />
                            )}
                        </main>
                    </div>
                </>
            ) : (
                <div>
                    <div className="mx-auto max-w-2xl py-16 px-6 text-center sm:py-20 lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span className="block">You have no notes</span>
                        </h2>
                        <button
                            type="button"
                            className="mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-primary px-5 py-3 text-base font-medium text-white hover:bg-primary-dark sm:w-auto"
                            onClick={createNewNote}
                        >
                            Create One Now
                        </button>
                    </div>
                </div>
            )}
        </main>
    );
}

export default App;
