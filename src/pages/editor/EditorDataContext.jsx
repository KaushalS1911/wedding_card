import React, { createContext, useContext, useState } from 'react';

const EditorDataContext = createContext();

export const useEditorData = () => useContext(EditorDataContext);

export const EditorDataProvider = ({ children }) => {
    const [editorData, setEditorData] = useState(null);
    const [templetImage, setTempletImage] = useState(null);
    const [templateIndex, setTemplatetIndex] = useState(0);

    return (
        <EditorDataContext.Provider value={{ editorData, setEditorData, templetImage, setTempletImage ,templateIndex, setTemplatetIndex }}>
            {children}
        </EditorDataContext.Provider>
    );
};
