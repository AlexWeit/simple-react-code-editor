import { Editor } from "@monaco-editor/react";
import { useRef, useState } from "react";
import { LanguageSelector } from "../language-selector/LanguageSelector";
import { CODE_SNIPPETS } from "../../constants";
import styles from "./CodeEditor.module.css";
import {Output} from "../output/Output";

export const CodeEditor = () => {
    const editorRef = useRef(null);
    const [value, setValue] = useState("");
    const [language, setLanguage] = useState("javascript");

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setLanguage(language.target.value);
        setValue(CODE_SNIPPETS[language.target.value]); // load new language template
    };

    return (
        <div className={styles.codeEditorContainer}>
            <h1 className={styles.title}>Simple code editor</h1>
            <div className={styles.description}>Choose language, write your code and click "Run Code" button.</div>
            <div className={styles.editorWrap}>
                <LanguageSelector language={language} onSelect={onSelect} />
                <Editor
                    className={styles.editor}
                    height="45vh"
                    theme="vs-dark"
                    defaultLanguage={language}
                    defaultValue={CODE_SNIPPETS[language]}
                    value={value}
                    onChange={(value) => setValue(value)}
                    onMount={onMount}
                />

            </div>
            <Output editorRef={editorRef} language={language}/>
        </div>

    )
};
