import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    background: var(--colorPrimary);
`;
export const Wrapper = styled.div`
    color: #ffff;
    padding: var(--padding);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`;
export const Section = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: ${({ logo }) => logo && "pointer"};
    .active{
        color: #02e4de;
    }
`
export const Logo = styled.img`
    /* & path{
        fill: #fff;
    } */
`
export const Link = styled(NavLink)`
    text-decoration: none;
    padding: 0 32px;
    color: #ffff;

`
