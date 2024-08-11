import React, { useState } from 'react';
import { User as UserIcon, Trash as TrashIcon, Plus } from 'lucide-react'; // Import icons
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@radix-ui/react-tooltip';

const AdminUsers = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null); // State to handle selected user
  const [newUser, setNewUser] = useState({
    invoice: '',
    name: '',
    email: '',
    mobile: '',
    profilePic: '',
  }); // State to handle new user details
  const [editingUser, setEditingUser] = useState(null); // State to handle user editing
  const [visibleUsersCount, setVisibleUsersCount] = useState(8); // Number of visible users

  const [users, setUsers] = useState([
    {
      invoice: 'LIN001',
      name: 'John Doe',
      email: 'john.doe@example.com',
      mobile: '123-456-7890',
      profilePic: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      invoice: 'LIN002',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      mobile: '987-654-3210',
      profilePic: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    { invoice: 'LIN003', name: 'Robert Johnson', email: 'robert.johnson@example.com', mobile: '555-555-5555', profilePic: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { invoice: 'LIN004', name: 'Emily Davis', email: 'emily.davis@example.com', mobile: '111-222-3333', profilePic: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { invoice: 'LIN005', name: 'Michael Wilson', email: 'michael.wilson@example.com', mobile: '444-444-4444', profilePic: 'https://randomuser.me/api/portraits/men/5.jpg' },
    { invoice: 'LIN006', name: 'Sarah Brown', email: 'sarah.brown@example.com', mobile: '666-777-8888', profilePic: 'https://randomuser.me/api/portraits/women/6.jpg' },
    { invoice: 'LIN007', name: 'David Taylor', email: 'david.taylor@example.com', mobile: '999-999-9999', profilePic: 'https://randomuser.me/api/portraits/men/7.jpg' },
    { invoice: 'LIN008', name: 'Emma Williams', email: 'emma.williams@example.com', mobile: '111-111-1111', profilePic: 'https://randomuser.me/api/portraits/women/8.jpg' },
    { invoice: 'LIN009', name: 'Olivia Martinez', email: 'olivia.martinez@example.com', mobile: '222-222-2222', profilePic: 'https://randomuser.me/api/portraits/women/9.jpg' },
    { invoice: 'LIN010', name: 'Liam Brown', email: 'liam.brown@example.com', mobile: '333-333-3333', profilePic: 'https://randomuser.me/api/portraits/men/10.jpg' },
    { invoice: 'LIN011', name: 'Noah Miller', email: 'noah.miller@example.com', mobile: '444-444-4444', profilePic: 'https://randomuser.me/api/portraits/men/11.jpg' },
    { invoice: 'LIN012', name: 'Lucas Anderson', email: 'lucas.anderson@example.com', mobile: '555-555-5555', profilePic: 'https://randomuser.me/api/portraits/men/12.jpg' },
    { invoice: 'LIN013', name: 'Mia Wilson', email: 'mia.wilson@example.com', mobile: '666-666-6666', profilePic: 'https://randomuser.me/api/portraits/women/13.jpg' },
    { invoice: 'LIN014', name: 'Charlotte Johnson', email: 'charlotte.johnson@example.com', mobile: '777-777-7777', profilePic: 'https://randomuser.me/api/portraits/women/14.jpg' },
    { invoice: 'LIN015', name: 'Sophia Martinez', email: 'sophia.martinez@example.com', mobile: '888-888-8888', profilePic: 'https://randomuser.me/api/portraits/women/15.jpg' },
    { invoice: 'LIN016', name: 'James Taylor', email: 'james.taylor@example.com', mobile: '999-999-9999', profilePic: 'https://randomuser.me/api/portraits/men/16.jpg' },
    { invoice: 'LIN017', name: 'Ella Wilson', email: 'ella.wilson@example.com', mobile: '101-101-1010', profilePic: 'https://randomuser.me/api/portraits/women/17.jpg' },
    { invoice: 'LIN018', name: 'Aiden Brown', email: 'aiden.brown@example.com', mobile: '202-202-2020', profilePic: 'https://randomuser.me/api/portraits/men/18.jpg' },
    {
      invoice: 'LIN019',
      name: 'Arun Kumar',
      email: 'arun.kumar@example.com',
      mobile: '303-303-3030',
      profilePic: 'https://randomuser.me/api/portraits/men/19.jpg',
    },
    {
      invoice: 'LIN020',
      name: 'Vidya Rani',
      email: 'vidhya.rani@example.com',
      mobile: '404-404-4040',
      profilePic: 'https://randomuser.me/api/portraits/women/20.jpg',
    },
    {
      invoice: 'LIN021',
      name: 'Chandra Sundar',
      email: 'chandra.sundar@example.com',
      mobile: '505-505-5050',
      profilePic: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      invoice: 'LIN022',
      name: 'Vijay Ganesh',
      email: 'vijay.ganesh@example.com',
      mobile: '606-606-6060',
      profilePic: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      invoice: 'LIN023',
      name: 'Murugan Ravi',
      email: 'murugan.ravi@example.com',
      mobile: '707-707-7070',
      profilePic: 'https://randomuser.me/api/portraits/men/23.jpg',
    },
    {
      invoice: 'LIN024',
      name: 'Lakshmi Narayanan',
      email: 'lakshmi.narayanan@example.com',
      mobile: '808-808-8080',
      profilePic: 'https://randomuser.me/api/portraits/women/24.jpg',
    },
    {
      invoice: 'LIN025',
      name: 'Saravanan Subramanian',
      email: 'saravanan.subramanian@example.com',
      mobile: '909-909-9090',
      profilePic: 'https://randomuser.me/api/portraits/men/25.jpg',
    },
    {
      invoice: 'LIN026',
      name: 'Sujatha Rajesh',
      email: 'sujatha.rajesh@example.com',
      mobile: '010-010-0101',
      profilePic: 'https://randomuser.me/api/portraits/women/26.jpg',
    },
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddUser = () => {
    if (editingUser) {
      // Update existing user
      setUsers(
        users.map((user) =>
          user.invoice === editingUser.invoice ? newUser : user
        )
      );
      setEditingUser(null); // Reset editing state
    } else {
      // Add new user
      setUsers([...users, newUser]);
    }
    setNewUser({ invoice: '', name: '', email: '', mobile: '', profilePic: '' }); // Reset new user form
    setOpen(false); // Close the sheet
  };

  const handleEditUser = (user) => {
    setEditingUser(user);
    setNewUser(user);
    setOpen(true); // Open the sheet for editing
  };

  const handleDeleteUser = (invoice) => {
    setUsers(users.filter((user) => user.invoice !== invoice));
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleLoadMoreUsers = () => {
    setVisibleUsersCount((prevCount) => prevCount + 8);
  };

  return (
    <>
    <br></br>
            <hr/>
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold text-center mb-12">Manage Users</h1>
      <Button onClick={() => setOpen(true)} variant="default" className="mb-4">
        <Plus className="mr-2 h-4 w-4" /> Add New User
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.slice(0, visibleUsersCount).map((user) => (
          <Card key={user.invoice}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <img
                  src={user.profilePic}
                  alt={user.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p>
                    <strong>Invoice:</strong> {user.invoice}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Mobile:</strong> {user.mobile}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex space-x-2">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="outline"
                        onClick={() => handleEditUser(user)}
                      >
                        <UserIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Edit User</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="destructive"
                        onClick={() => handleDeleteUser(user.invoice)}
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Delete User</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleUsersCount < users.length && (
        <Button onClick={handleLoadMoreUsers} variant="outline" className="mt-4">
          Load More Users
        </Button>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>
              {editingUser ? 'Edit User' : 'Add New User'}
            </SheetTitle>
            <SheetClose />
          </SheetHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="invoice">Invoice</Label>
              <Input
                id="invoice"
                value={newUser.invoice}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="mobile">Mobile</Label>
              <Input
                id="mobile"
                value={newUser.mobile}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Label htmlFor="profilePic">Profile Picture URL</Label>
              <Input
                id="profilePic"
                value={newUser.profilePic}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <SheetFooter>
            <Button onClick={handleAddUser}>
              {editingUser ? 'Update User' : 'Add User'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
    </>
  );
};

export default AdminUsers;
