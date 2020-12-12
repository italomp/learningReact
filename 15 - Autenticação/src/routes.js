import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Painel from './pages/Painel';
import Auth from './auth';

/**
 * Se Auth retornar true, PrivateRoute irá direcionar o usuário
 * para o Component, caso contrário ele redireciona o usuário
 * para o caminho em <Redirect/>
 * 
 * Componente - qualquer component que estiver no atributo component da
 * tag JSX <PrivateRouteQ>.
 * 
 * Redirect - component que redirecionará o usuário para uma página especifica,
 * no nosso caso a home, caso Auth retorne false.
 * 
 * @param objetoLiteral component representa o component que foi passado no
 * atributo component da tag JSX <PrivateRoute/> .
 * Esse component foi renomeado para Component, com C maiúsculo.
 * 
 * ...rest - são todos os atributo que podem vir na tag JSX <PrivateRoute/>.
 * 
 * props - são todas as props que podem vir com o component.
 */
const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={ props => (
        Auth() ? (
            <Component {...props} />
            ) : (
                //state serve para a página atual não sumir da pilha do hitórico
                //de navegação.
                <Redirect to={{pathname: "/", state: {from: props.location}}}/>
            )
    )}/>
);


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PrivateRoute exat path="/painel" component={Painel}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;