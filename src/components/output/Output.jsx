import styles from "./Output.module.css";
import {executeCode} from "../../api";
import {useState} from "react";
import classNames from "classnames";

export const Output = ({editorRef, language}) => {
    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // func for button "Run Code"
    const runCode = async() => {
        const sourceCode = editorRef.current.getValue();

        if(!sourceCode) return;

        try {
            setIsLoading(true);

            const { run: result } = await executeCode(language, sourceCode);

            // for splitting the code-lines
            setOutput(result.output.split("\n"));

            result.stderr ? setIsError(true) : setIsError(false);

        } catch (error) {

            const errorMessage = error.message || "Unable to run code";

            setOutput(errorMessage.split("\n"));
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.outputWrap}>
            <div className={styles.buttonWrap}>
                <button onClick={runCode} className={styles.button}>
                    Run Code
                </button>

                {Boolean(isLoading) && <div className={styles.spinnerWrap}>
                    <div className={styles.spinner}></div>
                </div>}
            </div>

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
