import { LANGUAGE_VERSIONS } from "../../constants";

const languages = Object.entries(LANGUAGE_VERSIONS);

export const LanguageSelector = ({ language, onSelect }) => {
    return (
        <div>
            <div>Choose language:</div>
            <select onChange={(language) => onSelect(language)}>
                {languages.map(([lang, version]) => (
                    <option
                        key={lang}
                        value={lang}

                    >{lang} {version}</option>
                ))}
            </select>
        </div>
    );
};
