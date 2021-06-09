import {css} from "styled-components";

export const mii = (color, size = '8px') => css`  // 公共css 命名为 mi 
    width: ${size};
    height: ${size};
    border-radius: 50%;
    background-color: ${color};
`;
