import React, { Component } from 'react';
import { Container, Header, Tittle, BemVindo } from './style';

/**
 * Na aula de hoje aprendi a usar styled components.
 * 
 * Preciso instalar o styled-components
 * 
 * Crio um style.js ao invés de um style.css
 * 
 * Ao migrar de style.css para style.js, todo seletor 
 * do style.css será um component no style.js.
 * E claro, preciso exportar todos esses components.
 * 
 * importo os components que representam os seletores 
 * do style.js no component que eu quiser usar.
 * 
 * Uso os componentes que representam os seletores ao invés
 * de usar os seletores.
 * 
 * vantagens dele: é um estilo escopado. Não dá conflito com
 * estilos de outros components
 * 
 * Aprendi também a usar configurações de estilos dinâmicas via
 * props, como foi aplicado no component <BemVindo/>
 * 
 */
class App extends Component{ 
    
    render(){
        return(
            <Container>
                <Header>
                    <Tittle>Meu Header</Tittle>
                </Header>

                <BemVindo cor="red" tamanho={50}>Bem vindo ao sistema!</BemVindo>
            </Container>
        );
    }
}

export default App;