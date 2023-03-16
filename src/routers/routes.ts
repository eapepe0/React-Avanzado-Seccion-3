import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

//* como queremos que se vean las rutas
interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; //* un componente es una funcion que regresa un elemento JSX
}

//* LAZY LOAD

//* con el /* webpackChunkName: "LazyLayout" */ ponemos como queremos que se llame el chunk (pedazo) de aplicacion que se cargue
const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

export const routes: Route[] = [
  //* ponemos la interface Route
  //* la primer ruta , seria la que se ve por defecto

  {
    to: "/lazyload/",
    path: "/lazyload/*", //* todo lo que empieze con lazyload
    Component: LazyLayout, //* El componente perezoso lazyLoad que se cargara
    name: "Lazy-Layout", //* nombre que visualmente querramos ver
  },
  {
    to: "/no-lazy", //* esto tiene que coincidir con el to del <NavLink/>
    path: "no-lazy", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: NoLazy, //* El lazyLoad que se cargara
    name: "No-Lazy",
  },
];
