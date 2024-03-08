// react component for the form to add a new authorization request to the table of requests in the app

import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Select } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import e from 'cors';

const FormComponent = ({ handleFormSubmit }) => {
    const [form] = Form.useForm();
    const [formLayout, setFormLayout] = useState('horizontal');
    const [formValues, setFormValues] = useState({});
    
    const onFormLayoutChange = ({ layout }) => {
        setFormLayout(layout);
    };
    
    const onFormSubmit = () => {
        handleFormSubmit(formValues);
        form.resetFields();
    };
    
    const onFormChange = (changedValues, allValues) => {
        setFormValues(allValues);
    };
    
    return (
        <Form
        form={form}
        layout={formLayout}
        initialValues={{ layout: formLayout }}
        onValuesChange={onFormChange}
        onFinish={onFormSubmit}
        >
        <Form.Item label="Auth Request No" name="authRequestNo">
            <Input />
        </Form.Item>
        <Form.Item label="Status" name="status">
            <Select>
            <Select.Option value="Pending">Pending</Select.Option>
            <Select.Option value="Approved">Approved</Select.Option>
            <Select.Option value="Denied">Denied</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Patient" name="patient">
            <Input />
        </Form.Item>
        <Form.Item label="Service" name="service">
            <Input />
        </Form.Item>
        <Form.Item label="Auth Type" name="authType">
            <Select>
            <Select.Option value="Regular">Regular</Select.Option>
            <Select.Option value="Urgent">Urgent</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="Created Date" name="createdDate">
            <DatePicker />
        </Form.Item>
        <Form.Item label="Add Authorization Request">
            <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
            Add
            </Button>
        </Form.Item>
        </Form>
    );
}

export default FormComponent;