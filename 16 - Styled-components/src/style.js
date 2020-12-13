import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`;

export const Header = styled.header`
    width: 100%;
    height: 70px;
    background-color: brown;
    justify-content: center;
    align-items: center;
    display: flex;
`;

export const Tittle = styled.a`
    font-size: 35px;
    color: white;
`;

/**
 * Poderia fazer asssim também:
 * 
 * export const Header = styled.header`
 *   width: 100%;
 *   height: 70px;
 *   background-color: brown;
 *   justify-content: center;
 *   align-items: center;
 *   display: flex;
 * 
 * a {                  Acessando uma propriedade do component Tittle. O seletor <a>
 *  font-size: 35px;
 *  color: white;
 * }
 * `;
 */

/**
 * Component com configurações dinâncicas
 * recebidas via props.
 */
export const BemVindo = styled.h1`
    font-size: ${props => `${props.tamanho}px`};
    color: ${props => props.cor}
`;