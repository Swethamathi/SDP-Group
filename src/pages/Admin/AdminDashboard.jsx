import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DollarSign, ShoppingBag, User, Users } from 'lucide-react'
const AdminDashboard = () => {
    return (
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
           Readers
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">100</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">99</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                       Books
                    </CardTitle>
                    <ShoppingBag className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1000</div>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Counts
                    </CardTitle>
                    <DollarSign className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">1010</div>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminDashboard