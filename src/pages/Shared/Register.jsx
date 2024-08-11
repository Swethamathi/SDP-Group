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
import RetroGrid from '@/components/magicui/retro-grid';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userError, setUserError] = useState('');

  const [adminName, setAdminName] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  const [showSuccess, setShowSuccess] = useState(false);

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleUserRegister = async () => {
    if (!userName) {
      setUserError('Name is required.');
      return;
    }
    if (!isValidEmail(userEmail)) {
      setUserError('Please enter a valid email.');
      return;
    }
    if (!isValidPassword(userPassword)) {
      setUserError('Password must be at least 6 characters.');
      return;
    }

    setUserError('');
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
    if (!adminName) {
      setAdminError('Name is required.');
      return;
    }
    if (!isValidEmail(adminEmail)) {
      setAdminError('Please enter a valid email.');
      return;
    }
    if (!isValidPassword(adminPassword)) {
      setAdminError('Password must be at least 6 characters.');
      return;
    }

    setAdminError('');
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
    <div className="h-full w-full flex justify-center items-center relative">
      <Tabs defaultValue="user" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="user">
          <Card>
            <CardHeader>
              <CardTitle>User Register</CardTitle>
              <CardDescription>
                Register a new user account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="user-name">Name</Label>
                <Input
                  id="user-name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="user-email">Email</Label>
                <Input
                  id="user-email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="user-password">Password</Label>
                <Input
                  id="user-password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Enter a new password"
                  type="password"
                  required
                />
              </div>
              {userError && <p className="text-red-500 text-sm">{userError}</p>}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-user" />
                <Label htmlFor="terms-user">Accept terms and conditions</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUserRegister}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin Register</CardTitle>
              <CardDescription>
                Register a new admin account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="admin-name">Name</Label>
                <Input
                  id="admin-name"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="admin-email">Email</Label>
                <Input
                  id="admin-email"
                  value={adminEmail}
                  onChange={(e) => setAdminEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter a new password"
                  type="password"
                  required
                />
              </div>
              {adminError && <p className="text-red-500 text-sm">{adminError}</p>}
              <div className="flex items-center space-x-2">
                <Checkbox id="terms-admin" />
                <Label htmlFor="terms-admin">Accept terms and conditions</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAdminRegister}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Success Pop-up */}
      {showSuccess && (
        <div className="absolute top-4 right-4 font-semibold px-4 py-2 bg-green-500 text-white rounded shadow-lg">
          Registration successful!
        </div>
      )}
      <RetroGrid />
    </div>
  );
};

export default Register;
