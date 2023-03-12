import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

//* como queremos que se vean las rutas
interface Route {
  to: string;
  path: string;
  name: string;
  Component: () => JSX.Element; //* un componente es una funcion que regresa un elemento JSX
}
export const routes: Route[] = [
  //* ponemos la interface Route
  {
    to: "/lazy-1", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy1", //* es igual al path de <Route>
    Component: LazyPage1, //* el componente que renderizara
    name: "Lazy-1", //* nombre que visualmente querramos ver
  },
  {
    to: "/lazy-2", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy2", //* es igual al path de <Route>
    Component: LazyPage2, //* el componente que renderizara
    name: "Lazy-2",
  },
  {
    to: "/lazy-3", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy3", //* es igual al path de <Route>
    Component: LazyPage3, //* el componente que renderizara
    name: "Lazy-3",
  },
];
