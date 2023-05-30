import styled from 'styled-components';

function getType({ type }) {
    switch (type) {
        case "dark":
            return {
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
            };
        case "light":
            return {
                background: "#fff",
                border: "1px solid #E6E9EC",
                color: "#0D263B",
            };
        case "primary":
            return {
                background: "#0061Df",
                border: "none",
                color: "#fff",
            };
        default:
            return {
                background: "#0061Df",
                border: "none",
                color: "#fff",
            };
    };
}


export const Container = styled.input`
    min-width:120px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    border: 1px solid #e6e9ec;
    outline: none;
    height: ${({ height }) => height ? `${height}px` : "44px"};
    font-size: ${({ fs }) => fs ? `${fs}px` : "16px"};
    width: ${({ width }) => width ? `${width}px` : "100%"};
    /* ${getType} */
    
`;
