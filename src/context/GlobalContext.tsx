import { createContext } from "react";

export interface GlobalFunction {
    unicodeToHex: (unicode: string) => string;
    hexToUnicode: (hex: string) => string;
}

export const GlobalContext = createContext<GlobalFunction | null>(null);

export function GlobalProvider(props: { children: JSX.Element }) {
    const unicodeToHex = (str: string) => {
        let hexString = "";
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i);
            const hexValue = ("0000" + charCode.toString(16)).slice(-4);
            hexString += "0x" + hexValue + " ";
        }
        return hexString.trim();
    };

    const hexToUnicode = (hex: string) => {
        const hexArray = hex.split(" ");
        let str = "";

        for (let i = 0; i < hexArray.length; i++) {
            const hexValue = hexArray[i].replace("0x", "");
            const charCode = parseInt(hexValue, 16);
            str += String.fromCharCode(charCode);
        }

        return str;
    };

    return (
        <GlobalContext.Provider value={{
            unicodeToHex,
            hexToUnicode
        }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
