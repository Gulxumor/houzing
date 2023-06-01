import styled from 'styled-components';
import { ReactComponent as search } from '../../assets/icons/search.svg';
import { ReactComponent as advanced } from '../../assets/icons/advanced.svg';
import { ReactComponent as houses } from '../../assets/icons/houses.svg';

export const Container = styled.div`
    display: flex;
    padding: var(--padding);
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 20px;
`;


export const Icons = styled.div``

Icons.Search = styled(search)`
    margin-right: 8px;
`
Icons.Advanced = styled(advanced)`
    margin-right: 8px;
`
Icons.Houses = styled(houses)`
    margin-right: 8px;
`