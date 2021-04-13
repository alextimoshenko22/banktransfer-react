import React from 'react'
import 'antd/dist/antd.css'
import { Input, Form, Button } from 'antd'

const CardsForm = (props) => {
    const [form] = Form.useForm()
    const onSubmit = (value) => {
        props.addTransfer(value.sum, value.name, value.lastName, value.cardNumberOfYourClient, Date.now(), value.yourCardNumber)
        form.resetFields()
    }
    return <Form form={form} onFinish={onSubmit}>
        <span>Имя:</span>
        <Form.Item name="name" rules={[{ required: true, message: "" },]}>
            <Input type="text" allowClear autoFocus={true} placeholder="ALEX" style={{ width: "15%" }} />
        </Form.Item>

        <span>Фамилия:</span>
        <Form.Item name="lastName" rules={[{ required: true, message: "" }]}>
            <Input type="text" allowClear placeholder="TIMOSHENKO" style={{ width: "15%" }} />
        </Form.Item>

        <span>Номер карты отправителя:</span>
        <Form.Item name="yourCardNumber" rules={[{ required: true, message: "" },]}>
            <Input allowClear placeholder="0000 0000 0000 0000" style={{ width: "18%" }} />
        </Form.Item>

        <span>Номер карты получателя:</span>
        <Form.Item name="cardNumberOfYourClient" rules={[{ required: true, message: "",  maxlength: 16 },]}>
            <Input allowClear placeholder="0000 0000 0000 0000" style={{ width: "18%" }} />
        </Form.Item>
        
        <span>Сумма:</span>
        <Form.Item name="sum" rules={[{ required: true, message: "", },]}>
            <Input allowClear placeholder="0 РУБ" style={{ width: "10%" }} />
        </Form.Item>

        <Button type="primary" htmlType="submit">Отправить</Button>
    </Form>
}

export default CardsForm