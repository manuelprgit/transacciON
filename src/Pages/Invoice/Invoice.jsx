import { CiReceipt } from "react-icons/ci"
import { ArticleTable } from "../../components/ArticleTable/ArticleTable"
import { InputSearch } from "../../components/InputSearch/InputSearch"
import { ModuleHeader } from "../../components/ModuleHeader/ModuleHeader"
import { PaymentContent } from "../../components/PaymentContent/PaymentContent"
import { UserInfoDetail } from "../../components/UserInfoDetail/UserInfoDetail"

export const Invoice = () => {
    return (
        <>
            <ModuleHeader icon={<CiReceipt />} title="Creación de Facturas" />
            <div className="flex w-full gap-2 justify-evenly">
                <div className="w-2/3">
                    <InputSearch />
                    <UserInfoDetail
                        code="150" fullName="Dariel Salas Martinez" due={25001}
                    />
                    <ArticleTable />
                </div>
                <PaymentContent />
            </div>
        </>
    )
}
