import React from 'react';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

export default function Editor({ currentNote, updateNote }) {
    return (
        <MDEditor
            value={currentNote.body}
            onChange={updateNote}
            previewOptions={{
                rehypePlugins: [[rehypeSanitize]],
            }}
            height={1200}
        />
    );
}
