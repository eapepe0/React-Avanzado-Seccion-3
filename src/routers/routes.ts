import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

//* como queremos que se vean las rutas
interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; //* un componente es una funcion que regresa un elemento JSX
}

//* LAZY LOAD

const Lazy1 = lazy(() => import("../01-lazyload/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../01-lazyload/pages/LazyPage2"));
const Lazy3 = lazy(() => import("../01-lazyload/pages/LazyPage3"));

export const routes: Route[] = [
  //* ponemos la interface Route
  {
    to: "/lazy1", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy1", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: Lazy1, //* El lazyLoad que se cargara
    name: "Lazy-1", //* nombre que visualmente querramos ver
  },
  {
    to: "/lazy2", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy2", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: Lazy2, //* El lazyLoad que se cargara
    name: "Lazy-2",
  },
  {
    to: "/lazy3", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy3", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: Lazy3, //* El lazyLoad que se cargara
    name: "Lazy-3",
  },
];
