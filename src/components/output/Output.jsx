import styles from "./Output.module.css";

export const Output = ({editorRef, language}) => {

    // func for button "Run Code"
    // const runCode = async() => {
    //     const sourceCode = editorRef.current.getValue();
    //
    //     if(!sourceCode) return;
    //
    //     try {
    //
    //     } catch (error) {
    //
    //     }
    // }

    return (
        <div className={styles.outputWrap}>
            <div>Output</div>
            <button>Run Code</button>
            <div className={styles.output}>test</div>
        </div>
    )
};
