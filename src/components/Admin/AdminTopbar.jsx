import React from 'react';
import { ModeToggle } from '../mode-toggle';
import { UserCheck } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AdminTopbar = () => {
    const Move=useNavigate();
    const handleHome=()=>{
        Move('/');
    }
    return (
        <div className='h-[6vh] w-full flex justify-center items-center'>
            <div className='w-[95%] h-full flex items-center justify-end gap-8 px-1'>
                <ModeToggle />
    <UserCheck />
    <button  onClick={handleHome} >
    <LogOut/>

    </button>
    
            </div>
            <hr></hr>
        </div>
    );
}

export default AdminTopbar;
