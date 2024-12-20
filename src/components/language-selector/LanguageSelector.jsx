import { LANGUAGE_VERSIONS } from "../../constants";
import styles from "./LanguageSelector.module.css";

const languages = Object.entries(LANGUAGE_VERSIONS);

export const LanguageSelector = ({ language, onSelect }) => {
    return (
        <div className={styles.selectWrap}>
            <select
                className={styles.select}
                onChange={(language) => onSelect(language)}>
                {languages.map(([lang, version]) => (
                    <option
                        className={styles.option}
                        key={lang}
                        value={lang}

                    >{lang} {version}</option>
                ))}
            </select>
        </div>
    );
};
