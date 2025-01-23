import React from 'react'
import { formatMoney } from '../../helpers/formatterNumber'

export const UserInfoDetail = ({ code, fullName, due }) => {
    return (
        <div className="flex gap-2 m-2 justify-evenly">
            <p>Codigo: <span className="font-semibold">{code}</span></p>
            <p>Nombre: <span className="font-semibold">{fullName}</span></p>
            <p>Pendiente de pago: <span className="font-semibold">${formatMoney(due)}</span></p>
        </div>
    )
}
