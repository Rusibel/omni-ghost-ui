import { Route } from '../../../classes/Route';
import { routeComponents } from '../routeComponents';

interface IParams {
  id: number | string;
}

export const routeComponentsEdit = new Route<IParams>({
  path: `edit/:id`,
  url: (args) => `${routeComponents.url}/edit/${args.id}`,
  parent: routeComponents,
});
