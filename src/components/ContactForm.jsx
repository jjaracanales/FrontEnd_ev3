import { Form, Input, Button } from 'antd';

const { TextArea } = Input;

function ContactForm({ onSubmit }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSubmit(values); // Llama a la función onSubmit 
    form.resetFields(); // Limpia los campos del formulario
  };

  return (
    <Form
      layout="vertical"
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: 600, margin: '0 auto' }}
    >
      <Form.Item label="Nombre" name="nombre" rules={[{ required: true, message: 'Ingresa tu nombre' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Email" name="email" rules={[
        { required: true, message: 'Ingresa tu email' },
        { type: 'email', message: 'Correo inválido' }
      ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Mensaje" name="mensaje" rules={[{ required: true, message: 'Escribe tu mensaje' }]}>
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Enviar mensaje
        </Button>
      </Form.Item>
    </Form>
  );
}

export default ContactForm;
