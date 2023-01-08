// Modules and Dependencies
import React, { Fragment } from 'react';
import {
    PencilSquareIcon,
    PlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { Dialog, Transition } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Sidebar(props) {
    const noteElements = props.notes.map((note, index) => (
        <div key={note.id}>
            <button
                type="button"
                className={classNames(
                    note.id === props.currentNote.id
                        ? 'bg-primary-light text-base-dark'
                        : 'text-gray-300 hover:bg-base-light hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
                onClick={() => props.setCurrentNoteId(note.id)}
            >
                <PencilSquareIcon
                    className={classNames(
                        note.id === props.currentNote.id
                            ? 'text-base-dark'
                            : 'text-white group-hover:text-gray-300',
                        'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                />
                <h4 className="flex-1 font-bold">Note {index + 1}</h4>
            </button>
        </div>
    ));

    return (
        <>
            <Transition.Root show={props.sidebarOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-40 md:hidden"
                    onClose={props.setSidebarOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-base-dark pt-5 pb-4">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-300"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-300"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                                        <button
                                            type="button"
                                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white hover:ring-2 hover:ring-inset focus:ring-white"
                                            onClick={() =>
                                                props.setSidebarOpen(false)
                                            }
                                        >
                                            <span className="sr-only">
                                                Close sidebar
                                            </span>
                                            <XMarkIcon
                                                className="h-6 w-6 text-white"
                                                aria-hidden="true"
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className="flex flex-shrink-0 items-center px-4">
                                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                        Notes
                                    </h1>
                                </div>
                                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                    <nav className="space-y-1 px-2">
                                        {noteElements}
                                    </nav>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                        <div className="w-14 flex-shrink-0" aria-hidden="true">
                            {/* Dummy element to force sidebar to shrink to fit close icon */}
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <div className="flex min-h-0 flex-1 flex-col bg-base-dark">
                    <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
                        <div className="flex flex-shrink-0 justify-around items-center px-4">
                            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Notes
                            </h1>
                            <button
                                type="button"
                                className="bg-primary rounded-md text-base-dark p-1 hover:bg-primary-dark sm:p-3"
                                onClick={props.newNote}
                            >
                                <PlusIcon className="flex-shrink-0 h-3 w-3 sm:h-6 sm:w-6" />
                            </button>
                        </div>
                        <nav
                            className="mt-5 flex-1 space-y-1 bg-base-dark px-2"
                            aria-label="Sidebar"
                        >
                            {noteElements}
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
