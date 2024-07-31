import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        // Add your Google sign-in logic here
    };

    const handleSignUpRedirect = () => {
        navigate('/register'); // Change '/signup' to your actual signup route
    };

    return (
        <div className='h-full w-full flex flex-col justify-center items-center opacity-85 gap-4'>
            <Card className="w-full sm:w-1/2 md:w-1/4" style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                background: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white
                borderRadius: '12px', // Rounded corners
                border: '1px solid rgba(255, 255, 255, 0.3)', // Optional subtle border
                paddingTop: '2rem', // Adjust padding to reduce gap
                paddingBottom: '1.5rem', // Adjust bottom padding as needed
            }}>
                <CardHeader className="space-y-1 justify-center items-center ">
                    <CardTitle className="text-2xl font-extrabold">- L O G I N -</CardTitle>
                    <CardDescription>
                        Enter your email and password to login
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="user@everisk.ai" aria-label="Email" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="******" aria-label="Password" required />
                    </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                    <Button
                        className="w-full bg-gradient-to-r from-green-400 to-violet-300 focus:outline-none rounded transition duration-100"
                    >
                        Login
                    </Button>
                </CardFooter>
            </Card>
            <div className="flex flex-col items-center mt-4 w-full">
                <Label className="mb-2">Not with us yet?</Label>
                <Button
                    className="w-40 bg-gradient-to-r from-blue-400 to-purple-300 text-white focus:outline-none rounded transition duration-150 hover:from-blue-500 hover:to-purple-400"
                    onClick={handleSignUpRedirect}
                >
                    Sign Up
                </Button>
            </div>
        </div>
    );
};

export default Login;
