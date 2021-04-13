import React from 'react'
import s from './TableStyle.module.css'
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { NavLink } from 'react-router-dom'

const HistoryTable = (props) => {
    const onCopyClick = (transfer) => {
        console.log(transfer)
    }
    return <table className={s.mainTable}>
        <tbody>
            <tr>
                <th>Сумма</th>
                <th>ФИО</th>
                <th>Номер карты отправителя</th>
                <th>Номер карты получателя</th>
                <th>Дата</th>
                <th colSpan="2">Действия</th>
            </tr>
            {
                props.transfers.map(t => {
                    return (
                        <tr key={t.transferId}>
                            <td>{t.sum}</td>
                            <td>{t.name} {t.lastName}</td>
                            <td>{t.cardNumber}</td>
                            <td>{t.clientCard}</td>
                            <td>{t.date}</td>
                            <td><DeleteOutlined onClick={() => props.deleteTransfer(t.transferId)} style={{ color: '#40a9ff', margin: '5px' }} /></td>
                            <td>
                                <NavLink to={"/cards"}>
                                    <Button onClick={() => {onCopyClick(t)}} style={{ color: '#40a9ff', margin: '5px' }}>Копировать</Button>
                                </NavLink>
                            </td>
                        </tr>
                    ) 
                })
            }
        </tbody>
    </table>

}

export default HistoryTable