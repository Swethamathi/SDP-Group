import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { DollarSign, ShoppingBag, User, Users } from 'lucide-react';
import { Line } from 'react-chartjs-2'; // Example chart library
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from '@/components/ui/button';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
    // Example data for chart
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'No. of users',
                data: [4000, 3000, 5000, 4000, 6000, 7000],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                fill: true,
            },
        ],
    };

    return (
        <div className="p-4">
            <div className="flex flex-wrap gap-4 mb-8">
                <Card className='w-full sm:w-1/2 md:w-1/4 border border-primary bg-gradient-to-r from-green-400 to-white-500'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Users
                        </CardTitle>
                        <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10,000</div>
                    </CardContent>
                </Card>
                <Card className='w-full sm:w-1/2 md:w-1/4 border border-primary bg-gradient-to-r from-green-400 to-white-500'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Active Users
                        </CardTitle>
                        <Users className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">9,999</div>
                    </CardContent>
                </Card>
                <Card className='w-full sm:w-1/2 md:w-1/4 border border-primary bg-gradient-to-r from-green-400 to-white-500'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Total Orders
                        </CardTitle>
                        <ShoppingBag className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">10,000</div>
                    </CardContent>
                </Card>
                {/* <Card className='w-full sm:w-1/2 md:w-1/4 border border-primary bg-gradient-to-r from-green-400 to-white-500'>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                            Revenue
                        </CardTitle>
                        <DollarSign className="h-6 w-6 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$1,000,000</div>
                    </CardContent>
                </Card> */}
            </div>

            <div className="flex flex-col gap-4">
                <Card className="border border-primary">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Users Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Line  data={data} />
                    </CardContent>
                </Card>

                {/* <Card className="border border-primary bg-gradient-to-r from-yellow-400 to-yellow-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Recent Activities</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="mb-2">User John Doe registered</li>
                            <li className="mb-2">Order #12345 shipped</li>
                            <li className="mb-2">Revenue report updated</li>
                            <li className="mb-2">New feature deployed</li>
                        </ul>
                    </CardContent>
                </Card> */}
                
                {/* <Card className="border border-primary bg-gradient-to-r from-red-400 to-red-200">
                    <CardHeader>
                        <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Button className="w-full mb-2 bg-blue-50 hover:bg-blue-600">
                            View All Users
                        </Button>
                        <Button className="w-full mb-2 bg-green-500 hover:bg-green-600">
                            Manage Orders
                        </Button>
                        <Button className="w-full mb-2 bg-yellow-500 hover:bg-yellow-600">
                            Generate Reports
                        </Button>
                    </CardContent>
                </Card> */}
            </div>
        </div>
    );
};

export default AdminDashboard;
