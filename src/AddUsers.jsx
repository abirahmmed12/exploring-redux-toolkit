import React from 'react';
import { UserAddOutlined  } from '@ant-design/icons';
import { Button } from 'antd';
import { MdDeleteForever } from "react-icons/md";
const AddUsers = () => {
    return (
       <>
        <div>
             <Button className='bg-indigo-50 mt-5 hover:bg-green-500'
          type=""
          icon={<UserAddOutlined />}
         
         
        >
          Add User
        </Button>
        </div>
        <div>
            <ul className=''>
                <li>Abir Ahmed <MdDeleteForever></MdDeleteForever> </li>
                <hr />
                <h1>Soaib Ahmed  <MdDeleteForever></MdDeleteForever></h1>
                <hr />
                <h1>Ih Badhon  <MdDeleteForever></MdDeleteForever></h1>
            </ul>
        </div>
       </>
    );
};

export default AddUsers;