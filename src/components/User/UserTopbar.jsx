import React from 'react';
import { ModeToggle } from '../mode-toggle';
import { User } from 'lucide-react';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const UserTopbar = () => {
    const Move=useNavigate();
    const handleHome=()=>{
        Move('/');
    }
    return (
        <div className='h-[6vh] w-full flex justify-center items-center'>
            <div className='w-[95%] h-full flex items-center justify-end gap-8 px-0'>
                <ModeToggle />
                    <User />
                    <button  onClick={handleHome} >
    <LogOut/>

    </button>
            </div>
        </div>
    );
}

export default UserTopbar;
