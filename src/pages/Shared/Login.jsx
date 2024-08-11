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
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  // State for user and admin credentials
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  // State for validation errors
  const [userError, setUserError] = useState('');
  const [adminError, setAdminError] = useState('');

  // State for login success pop-up
  const [showSuccess, setShowSuccess] = useState(false);

  const handleUserLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7777/api/auth/login', {
        email: userEmail,
        password: userPassword,
        role: 'USER'
      });
      console.log("User logged in", response.data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/user/dashboard');
      }, 2000);
    } catch (error) {
      console.error("User login failed", error);
      setUserError('Login failed');
    }
  };

  const handleAdminLogin = async () => {
    try {
      const response = await axios.post('http://localhost:7777/api/auth/login', {
        email: adminEmail,
        password: adminPassword,
        role: 'ADMIN'
      });
      console.log("Admin logged in", response.data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate('/admin/dashboard');
      }, 2000);
    } catch (error) {
      console.error("Admin login failed", error);
      setAdminError('Login failed');
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
              <CardTitle>User Login</CardTitle>
              <CardDescription>
                Log in to your user account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
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
                  placeholder="Enter your password"
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
              <Button onClick={handleUserLogin}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="admin">
          <Card>
            <CardHeader>
              <CardTitle>Admin Login</CardTitle>
              <CardDescription>
                Log in to your admin account
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
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
                  placeholder="Enter your password"
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
              <Button onClick={handleAdminLogin}>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {showSuccess && (
        <div className="absolute top-4 right-4 font-semibold px-4 py-2 bg-green-500 text-white rounded shadow-lg">
          Login successful!
        </div>
      )}
      <RetroGrid />
    </div>
  );
};

export default Login;
