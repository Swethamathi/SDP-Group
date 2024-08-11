import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BookOpenText, FileText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = ({ totalStories, publishedStories, draftStories, totalCategories }) => {
    const navigate = useNavigate();

    const handleCardClick = (path) => {
        navigate(path);
    }

    return (
        <div className="flex flex-row p-4 gap-4">
            <Card className='w-1/4 border border-primary' onClick={() => handleCardClick('/user/stories')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Stories
                    </CardTitle>
                    <BookOpenText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                        {totalStories}
                    </p>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary' onClick={() => handleCardClick('/admin/stories/published')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Published Stories
                    </CardTitle>
                    <FileText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                        {publishedStories}
                    </p>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary' onClick={() => handleCardClick('/admin/stories/drafts')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Draft Stories
                    </CardTitle>
                    <FileText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                        {draftStories}
                    </p>
                </CardContent>
            </Card>
            <Card className='w-1/4 border border-primary' onClick={() => handleCardClick('/admin/categories')}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                        Total Categories
                    </CardTitle>
                    <BookOpenText className="h-6 w-6 text-primary" />
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black dark:text-white">
                        {totalCategories}
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

export default AdminDashboard;
