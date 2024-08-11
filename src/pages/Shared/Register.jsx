import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userError, setUserError] = useState('');
  const [userTermsAccepted, setUserTermsAccepted] = useState(false);

  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [adminTermsAccepted, setAdminTermsAccepted] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  const validateUserForm = () => {
    return userName && userEmail && userPassword && userTermsAccepted;
  };

  const validateAdminForm = () => {
    return adminName && adminEmail && adminPassword && adminTermsAccepted;
  };

  const handleUserRegister = async () => {
    if (!validateUserForm()) {
      setUserError('Please fill in all fields and accept the terms and conditions');
      return;
    }
    try {
      const response = await axios.post('http://localhost:7777/api/auth/register', {
        name: userName,
        email: userEmail,
        password: userPassword,
        role: 'USER'
      });
      console.log("User registered", response.data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/user/dashboard');
      }, 2000);
    } catch (error) {
      console.error("There was an error registering the user", error);
      setUserError('Registration failed');
    }
  };

  const handleAdminRegister = async () => {
    if (!validateAdminForm()) {
      setAdminError('Please fill in all fields and accept the terms and conditions');
      return;
    }
    try {
      const response = await axios.post('http://localhost:7777/api/auth/register', {
        name: adminName,
        email: adminEmail,
        password: adminPassword,
        role: 'ADMIN'
      });
      console.log("Admin registered", response.data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/admin/dashboard');
      }, 2000);
    } catch (error) {
      console.error("There was an error registering the admin", error);
      setAdminError('Registration failed');
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center bg-gray-100 relative">
      <Tabs defaultValue="user" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-gray-200 text-gray-800 rounded-lg overflow-hidden">
          <TabsTrigger value="user" className="py-2 text-center cursor-pointer hover:bg-gray-300">User</TabsTrigger>
          <TabsTrigger value="admin" className="py-2 text-center cursor-pointer hover:bg-gray-300">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="user">
          <Card className="bg-white shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-800">User Register</CardTitle>
              <CardDescription className="text-gray-600">
                Register a new user account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="user-name" className="text-gray-800">Name</Label>
                <Input
                  id="user-name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-3 rounded-md w-full focus:bg-white focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-email" className="text-gray-800">Email</Label>
                <Input
                  id="user-email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-3 rounded-md w-full focus:bg-white focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="user-password" className="text-gray-800">Password</Label>
                <Input
                  id="user-password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Enter a new password"
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-3 rounded-md w-full focus:bg-white focus:outline-none"
                />
              </div>
              {userError && <p className="text-red-500 text-sm">{userError}</p>}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms-user"
                  className="accent-gray-800"
                  checked={userTermsAccepted}
                  onCheckedChange={() => setUserTermsAccepted(!userTermsAccepted)}
                />
                <Label htmlFor="terms-user" className="text-gray-800">Accept terms and conditions</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUserRegister} className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="admin">
          <Card className="bg-white shadow-md rounded-lg">
            <CardHeader>
              <CardTitle className="text-gray-800">Admin Register</CardTitle>
              <CardDescription className="text-gray-600">
                Register a new admin account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="admin-name" className="text-gray-800">Name</Label>
                <Input
                  id="admin-name"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  placeholder="Enter your name"
                  className="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-3 rounded-md w-full focus:bg-white focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-email" className="text-gray-800">Email</Label>
                <Input
                  id="admin-email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-3 rounded-md w-full focus:bg-white focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="admin-password" className="text-gray-800">Password</Label>
                <Input
                  id="admin-password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter a new password"
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-800 py-2 px-3 rounded-md w-full focus:bg-white focus:outline-none"
                />
              </div>
              {adminError && <p className="text-red-500 text-sm">{adminError}</p>}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms-admin"
                  className="accent-gray-800"
                  checked={adminTermsAccepted}
                  onCheckedChange={() => setAdminTermsAccepted(!adminTermsAccepted)}
                />
                <Label htmlFor="terms-admin" className="text-gray-800">Accept terms and conditions</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAdminRegister} className="bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-900">Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {showSuccess && (
        <div className="absolute top-4 right-4 font-semibold px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg">
          Registration successful!
        </div>
      )}
    </div>
  );
};

export default Register;
