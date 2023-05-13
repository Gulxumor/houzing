import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import { ReactComponent as logoImg } from '../../assets/images/logo.png';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
`
export const Main = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    background:var(--colorPrimary);
`

export const Wrapper = styled.div`
    max-width:1440px;
    width: 100%;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:#ffff;
    padding:var(--padding);
    height:64px;
`

export const Section = styled.div`
    display:flex;
    align-items:center;
    gap:12px;
    cursor:${({ logo }) => logo && "pointer"};

    .active{
        color: red;
    }

`
export const Link = styled(NavLink)`
    text-decoration:none;
    padding: 0 32px;
    color: #fff;
`

export const Logo = styled("img")`
    width:30px;
    & path{
        fill:#fff;
    }
`