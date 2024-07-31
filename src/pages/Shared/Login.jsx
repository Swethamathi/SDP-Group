import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RetroGrid from "@/components/magicui/retro-grid";
import { Label } from '@/components/ui/label';
import { Checkbox } from "@/components/ui/checkbox"
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

const Login = () => {
  const navigate = useNavigate();

  // State for user credentials
  const [userUsername, setUserUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // State for validation errors
  const [userError, setUserError] = useState('');
  const [adminError, setAdminError] = useState('');

  // State for login success pop-up
  const [showSuccess, setShowSuccess] = useState(false);

  // Helper function to validate email format
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 6;
  };

  const handleUserLogin = () => {
    if (!isValidEmail(userUsername)) {
      setUserError('Please enter a valid email.');
      return;
    }

    if (!isValidPassword(userPassword)) {
      setUserError('Password must be at least 6 characters.');
      return;
    }

    setUserError('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/user/dashboard');
    }, 1000);
  };

  const handleAdminLogin = () => {
    if (!isValidEmail(adminUsername)) {
      setAdminError('Please enter a valid email.');
      return;
    }

    if (!isValidPassword(adminPassword)) {
      setAdminError('Password must be at least 6 characters.');
      return;
    }

    setAdminError('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/admin/dashboard');
    }, 2000);
  };

  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">User</TabsTrigger>
          <TabsTrigger value="password">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card >
            <CardHeader>
              <CardTitle>User Login</CardTitle>
              <CardDescription>
                Log in using your user credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="user-username">Username</Label>
                <Input
                  id="user-username"
                  value={userUsername}
                  onChange={(e) => setUserUsername(e.target.value)}
                  placeholder="Enter your username or email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="user-password">Password</Label>
                <Input
                  id="user-password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  placeholder="Enter your password"
                  type="password"
                  required
                />
              </div>
              {userError && <p className="text-red-500 text-sm">{userError}</p>}
              <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleUserLogin}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Log in using your admin credentials
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="admin-username">Username</Label>
                <Input
                  id="admin-username"
                  value={adminUsername}
                  onChange={(e) => setAdminUsername(e.target.value)}
                  placeholder="Enter your username or email"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="admin-password">Password</Label>
                <Input
                  id="admin-password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  placeholder="Enter your password"
                  type="password"
                  required
                />
              </div>
              {adminError && <p className="text-red-500 text-sm">{adminError}</p>}
          <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
            </CardContent>
            <CardFooter>
              <Button onClick={handleAdminLogin}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      {showSuccess && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 font-semibold  px-4 py-2 rounded shadow-lg mt-4">
          Login successful!
        </div>
      )}
      <RetroGrid/>
    </div>
  );
};

export default Login;
