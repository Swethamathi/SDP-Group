import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Register = () => {
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide the toast after 3 seconds
  };

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Card className="w-1/4">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl">Register Now</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="roll">Rollnumber</Label>
              <Input id="roll" type="text" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="fableminds.ai@gmail.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="" />
            </div>
            <CardFooter>
              <Button type="submit" className="w-full">Create account</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      {showToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded shadow-lg">
          Account created successfully!
        </div>
      )}
    </div>
  );
};

export default Register;
