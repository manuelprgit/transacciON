import { CiReceipt } from "react-icons/ci"
import { ArticleTable } from "../../components/ArticleTable/ArticleTable"
import { InputSearch } from "../../components/InputSearch/InputSearch"
import { ModuleHeader } from "../../components/ModuleHeader/ModuleHeader"
import { PaymentContent } from "../../components/PaymentContent/PaymentContent"

export const Invoice = () => {
    return (
        <>
            <ModuleHeader icon={<CiReceipt />} title="Creación de Facturas" />
            <div className="flex">
                <div className="w-2/3">
                    <InputSearch />
                    <ArticleTable />
                </div>
                <div>
                    <PaymentContent />
                </div>
            </div>
        </>
    )
}
