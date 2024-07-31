import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Separator } from "@/components/ui/separator";

const Register = () => {
  const handleGoogleSignIn = () => {
    // Add your Google sign-in logic here
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-4 opacity-90' style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
      <div className='flex-grow'></div> {/* Spacer */}
      <Card 
        className="w-full sm:w-2/6 max-h-[600px]" 
        style={{
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
          background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
          backdropFilter: 'blur(10px)', // Glass effect
          borderRadius: '12px', // Rounded corners
          border: '1px solid rgba(255, 255, 255, 0.3)', // Optional subtle border
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <CardHeader className="pt-4 px-6 space-y-2">
          <CardTitle className="text-4xl mb-2">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow p-6 grid gap-4 overflow-auto">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="roll">School ID</Label>
            <Input id="roll" type="text" placeholder="123456" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@cb.ai" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="******"/>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4 pb-4">
          <Button className="w-full max-w-sm bg-gradient-to-r from-green-400 to-violet-300 text-white focus:outline-none rounded transition duration-150 hover:from-green-500 hover:to-violet-400">
            Create account
          </Button>
          <Separator className="font-extrabold w-full max-w-sm" />
          <Button
            className="w-full max-w-sm flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition duration-150"
            onClick={handleGoogleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-lg" />
            Sign in with Google
          </Button>
        </CardFooter>
      </Card>
      <div className='flex-grow'></div> {/* Spacer */}
    </div>
  )
}

export default Register;
