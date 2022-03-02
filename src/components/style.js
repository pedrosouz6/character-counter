import Style from "styled-components";

import { Colors } from "../style/style";

const {
    background,
    sub_background,
    header,
    color
} = Colors.default;

export const Main = Style.main `
    width: 100%;
    min-height: 100vh;
    max-height: auto;
    background-color: rgb(23, 36, 61);
    color: ${color};
    display: flex;
    justify-content: center;
    align-items: center;

    section {
        width: 600px;
        height: auto;
        position: relative;
        background-color: ${sub_background}; 
        border-radius: 3px;
        padding: 60px 10px 10px 10px;
    }

    header {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px 3px 0 0;
        background-color: ${header};
        padding: 0 10px;
    }

    header h1 {
        font-size: 20pt;
        font-weight: 500;
    }

    textarea {
        width: 100%;
        height: 200px;
        background: ${header};
        margin: 10px 0;
        resize: vertical;
        border: 1px solid ${background};
        padding: 4px;
        border-radius: 3px;
    }

    footer {
        display: flex;
        flex-wrap: wrap;
        gap: .5rem 1rem;
        margin-bottom: 5px;
    } 

`