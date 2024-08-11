import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import RetroGrid from '@/components/magicui/retro-grid';

const Register = () => {
  const navigate = useNavigate();

  // User registration state
  const [userName, setUserName] = useState('');
  const [userUsername, setUserUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userConfirmPassword, setUserConfirmPassword] = useState('');
  const [userError, setUserError] = useState('');

  // Admin registration state
  const [adminName, setAdminName] = useState('');
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [adminConfirmPassword, setAdminConfirmPassword] = useState('');
  const [adminError, setAdminError] = useState('');

  // State for success pop-up
  const [showSuccess, setShowSuccess] = useState(false);

  // Helper functions for validation
  const validateUserForm = () => {
    if (!userName || !userUsername || !userPassword || !userConfirmPassword) {
      return 'All fields are required.';
    }
    if (userPassword !== userConfirmPassword) {
      return 'Passwords do not match.';
    }
    return '';
  };

  const validateAdminForm = () => {
    if (!adminName || !adminUsername || !adminPassword || !adminConfirmPassword) {
      return 'All fields are required.';
    }
    if (adminPassword !== adminConfirmPassword) {
      return 'Passwords do not match.';
    }
    return '';
  };

  const handleUserRegister = () => {
    const error = validateUserForm();
    if (error) {
      setUserError(error);
      return;
    }
    setUserError('');
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      navigate('/user/dashboard');
    }, 2000);
  };

  const handleAdminRegister = () => {
    const error = validateAdminForm();
    if (error) {
      setAdminError(error);
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
                  placeholder="Enter a new password"
                  type="password"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="user-confirm-password">Confirm Password</Label>
                <Input
                  id="user-confirm-password"
                  value={userConfirmPassword}
                  onChange={(e) => setUserConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
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
              <Button onClick={handleUserRegister}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="password">
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
                  placeholder="Enter a new password"
                  type="password"
                  required
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="admin-confirm-password">Confirm Password</Label>
                <Input
                  id="admin-confirm-password"
                  value={adminConfirmPassword}
                  onChange={(e) => setAdminConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
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
              <Button onClick={handleAdminRegister}>Register</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Success Pop-up */}
      {showSuccess && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 font-semibold px-4 py-0 rounded shadow-lg mt-4">
          Registration successful!
        </div>
      )}
       <RetroGrid/>
    </div>
  );
};

export default Register;
