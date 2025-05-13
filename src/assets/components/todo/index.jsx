import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/conter-js';
import { getdata } from '../../redux/todo-slice';
import Card from './../../components/card/index';

const Todo = () => {
  const { count } = useSelector((state) => state.conterslice);
  const { data } = useSelector((state) => state.todoslice);
  const dispatch = useDispatch();
  
  const [form] = Form.useForm();

  const sumbit = (values) => {
      const newTodo = { text: values.todo };
    dispatch(getdata(newTodo)); 
    form.resetFields(); 
  };

  useEffect(() => {
    console.log("Yangi data:", data); 
  }, [data]);

  return (
    <div className='text-[red] cursor-pointer'>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>-</Button>

      <div className='w-[50%] m-auto mt-5'>
        <Form
          form={form} 
          onFinish={sumbit}
          className='flex items-center gap-5'
        >
          <Form.Item
            name="todo"
            className='w-full'
            rules={[{ required: true, message: "Maydonni to‘ldiring" }]}
          >
            <Input placeholder='Text...' />
          </Form.Item>
          <Button className='koko mt-[-22px]' htmlType='submit' type='primary'>Qo‘shmoq</Button>
        </Form>

        {data.map((value) => (<Card key={value.id} {...value} />))}
      </div>
    </div>
  );
};

export default Todo;
