import React from 'react'
import NumberTicker from "@/components/magicui/number-ticker";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Podcast, BookOpenText , Users } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const UserDashboard = () => {
    const move=useNavigate();
    const users=()=>{
        move('/admin/users')

    }
    return (
        <>
        <br></br>
            <hr/>
        <br></br>
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary' onClick={users}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={969} />
    </p>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary' onClick={users}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Active Users
                    </CardTitle>
                    <Users className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={669} />
                </p>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Stories
                    </CardTitle>
                    <BookOpenText  className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={1897} />
                </p>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary'>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Podcasts
                    </CardTitle>
                      <Podcast  className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                <NumberTicker value={169} />
                </p>
                </CardContent>
            </Card>
        </div>
        </>
    )
}

export default UserDashboard;