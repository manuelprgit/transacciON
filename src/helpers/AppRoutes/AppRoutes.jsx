
import { useRoutes } from "react-router-dom";

import { Home } from '../../Pages/Home/Home'
import { Billing } from '../../Pages/Billing/Billing'
import { Inventory } from "../../Pages/Inventory/Inventory";
import { CustomManagement } from "../../Pages/CustomManagement/CustomManagement";
import { AccountsReceivable } from "../../Pages/AccountsReceivable/AccountsReceivable";
import { Invoice } from "../../Pages/Invoice/Invoice";
import { MasterInventory } from "../../Pages/MasterInventory/MasterInventory";
import { InputOutputProducts } from "../../Pages/InputOutputProducts/InputOutputProducts";
import { PageNotFound } from "../../Pages/PageNotFound/PageNotFound";
import { ProductManagement } from "../../Pages/ProductManagement/ProductManagement";

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/facturacion', element: <Billing /> },
        { path: '/inventario', element: <Inventory /> },
        { path: '/gestion-clientes', element: <CustomManagement /> },
        { path: '/cuentas-cobrar', element: <AccountsReceivable /> },
        { path: '/*', element: <PageNotFound /> },

        //Opciones de Facturacion
        { path: '/invoice', element: <Invoice /> },

        //Opciones de Inventario
        { path: '/control-inventario', element: <MasterInventory /> },
        { path: '/entrada-salida-mercancias', element: <InputOutputProducts /> },
        { path: '/mantenimiento-productos', element: <ProductManagement /> },
    ]);

    return routes;
}

export { AppRoutes }