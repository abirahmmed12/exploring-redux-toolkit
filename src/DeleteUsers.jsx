import React from 'react';
import { DeleteOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
const DeleteUsers = () => {
    return (
        <>
        <Button className='bg-indigo-50 mt-5 hover:bg-red-700'
          type=""
          icon={<DeleteOutlined />}
         
         
        >
         Dlete All User
        </Button>
        </>
    );
};

export default DeleteUsers;