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
    to: "/lazy1", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy1", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: LazyPage1, //* el componente que renderizara , tiene que tener la C mayuscula , el componente siempre se debe crear con mayuscula
    name: "Lazy-1", //* nombre que visualmente querramos ver
  },
  {
    to: "/lazy2", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy2", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: LazyPage2, //* el componente que renderizara , tiene que tener la C mayuscula , el componente siempre se debe crear con mayuscula
    name: "Lazy-2",
  },
  {
    to: "/lazy3", //* esto tiene que coincidir con el to del <NavLink/>
    path: "lazy3", //* es igual al path de <Route>  tanto path como to tienen que coincidir
    Component: LazyPage3, //* el componente que renderizara , tiene que tener la C mayuscula , el componente siempre se debe crear con mayuscula
    name: "Lazy-3",
  },
];
