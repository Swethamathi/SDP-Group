import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Edit, Plus, TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const AdminUsers = () => {
  const [open, setOpen] = useState(false);

  const users = [
    {
      invoice: 'INV001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      mobile: '123-456-7890',
    },
    {
      invoice: 'INV002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobile: '987-654-3210',
    },
    {
      invoice: 'INV003',
      name: 'Robert Johnson',
      email: 'robert.johnson@example.com',
      mobile: '555-555-5555',
    },
    {
      invoice: 'INV004',
      name: 'Emily Davis',
      email: 'emily.davis@example.com',
      mobile: '111-222-3333',
    },
    {
      invoice: 'INV005',
      name: 'Michael Wilson',
      email: 'michael.wilson@example.com',
      mobile: '444-444-4444',
    },
    {
      invoice: 'INV006',
      name: 'Sarah Brown',
      email: 'sarah.brown@example.com',
      mobile: '666-777-8888',
    },
    {
      invoice: 'INV007',
      name: 'David Taylor',
      email: 'david.taylor@example.com',
      mobile: '999-999-9999',
    },
  ];

  return (
    <div className='m-1 p-4'>
      <Card className='shadow-sm shadow-primary'>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Users</CardTitle>
          <Button onClick={() => setOpen(!open)}>
            <Plus className='h-10 w-10 mr-2' />
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-[100px]'>Invoice</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile Number</TableHead>
                <TableHead className='flex justify-center'>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.invoice}>
                  <TableCell className='font-medium'>{user.invoice}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.mobile}</TableCell>
                  <TableCell>
                    <span className='w-full h-full flex justify-center items-center gap-3'>
                      <Edit className='h-8 w-8 p-1 text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-background rounded-md' />
                      <TrashIcon className='h-8 w-8 p-1 text-red-500 cursor-pointer hover:bg-red-500 hover:text-background rounded-md' />
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Add User</SheetTitle>
          </SheetHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='name' className='text-right'>
                Name
              </Label>
              <Input id='name' className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input id='username' className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='email' className='text-right'>
                Email
              </Label>
              <Input id='email' className='col-span-3' />
            </div>
            <div className='flex flex-col items-start gap-4'>
              <Label htmlFor='password' className='text-right'>
                Password
              </Label>
              <Input id='password' className='col-span-3' />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <SheetClose asChild>
              <Button className='w-1/2 outline bg-red-400/90 hover:bg-red-400'>Cancel</Button>
            </SheetClose>
            <Button type='submit' className='w-1/2'>Save changes</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default AdminUsers;
