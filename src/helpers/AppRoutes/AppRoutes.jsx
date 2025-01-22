
import { useRoutes } from "react-router-dom";

import { Home } from '../../Pages/Home/Home'
import { Billing } from '../../Pages/Billing/Billing'
import { Inventory } from "../../Pages/Inventory/Inventory";
import { CustomManagement } from "../../Pages/CustomManagement/CustomManagement";
import { AccountsReceivable } from "../../Pages/AccountsReceivable/AccountsReceivable";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/facturacion', element: <Billing /> },
        { path: '/inventario', element: <Inventory /> },
        { path: '/gestion-clientes', element: <CustomManagement /> },
        { path: '/cuentas-cobrar', element: <AccountsReceivable /> },
    ]);

    return routes;
}

export { AppRoutes }