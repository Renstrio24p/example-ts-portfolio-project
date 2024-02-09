import Home from "../../pages/home/Home.ts";
import NotFound from "../../pages/notfound/NotFound.ts";
import { TSRouter } from "./router.class.ts";

export default function Router(DOM: HTMLDivElement) {

const router = new TSRouter([
    {
      path: '/',
      element: ()=> Home(DOM),
      errorElement: ()=>{},
    },
    {
        path: '*',
        element: () => NotFound(DOM)
    }
  ]);
  router.navigate('');
}