import styles from "./Output.module.css";
import {executeCode} from "../../api";
import {useState} from "react";
import classNames from "classnames";

export const Output = ({editorRef, language}) => {
    const [output, setOutput] = useState(null);
    const [isError, setIsError] = useState(false);

    // func for button "Run Code"
    const runCode = async() => {
        const sourceCode = editorRef.current.getValue();

        if(!sourceCode) return;

        try {
            const { run: result } = await executeCode(language, sourceCode);

            // for splitting the code-lines
            setOutput(result.output.split("\n"));

            result.stderr ? setIsError(true) : setIsError(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.outputWrap}>
            <div>Output</div>
            <button onClick={runCode}>Run Code</button>
            <div className={classNames(styles.output, {
                [styles.error]: isError === true
            })}>
                {output
                    ? output.map((line, i) => <div key={i}>{line}</div>)
                    : 'Click "Run Code" to see the output here'}
            </div>
        </div>
    )
};
