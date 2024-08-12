import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Shared/Home'
import Login from './pages/Shared/Login'
import Register from './pages/Shared/Register'
import UserLayout from './layout/UserLayout'
import UserDashboard from './pages/User/UserDashboard'
import AdminLayout from './layout/AdminLayout'
import AdminDashboard from './pages/Admin/AdminDashboard'
import NotFound from './pages/Shared/NotFound'
import HomeLayout from './layout/HomeLayout'
import AdminUser from './pages/Admin/AdminUser'
import AdminStories from './pages/Admin/AdminStories'
import UserStories from './pages/User/UserStories'
import AdminPodcasts from './pages/Admin/AdminPodcasts'
import UserPodcasts from './pages/User/UserPodcasts'
import UserSubscription from './pages/User/UserSubscription'
import UserProfileSettings from './pages/User/UserProfileSettings'
import UserFeedback from './pages/User/UserFeedback'
import AdminActivity from './pages/Admin/AdminActivity'



const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<HomeLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                    </Route>

                    <Route element={<AdminLayout />}>
                        <Route path='/admin/dashboard' element={<AdminDashboard />} />
                        <Route path='/admin/users' element={<AdminUser />} />
                        <Route path='/admin/stories' element={<AdminStories />} />
                        <Route path='/admin/podcasts' element={<AdminPodcasts />} />
                        <Route path='/admin/activities' element={<AdminActivity />} />
                    </Route>

                    <Route element={<UserLayout />}>
                        <Route path='/user/dashboard' element={<UserDashboard />} />
                        <Route path='/user/podcasts' element={<UserPodcasts />} />
                        <Route path='/user/stories' element={<UserStories />} />
                        <Route path='/user/subscription' element={<UserSubscription />} />
                        <Route path='/user/profile' element={<UserProfileSettings />} />
                        <Route path='/user/feedback' element={<UserFeedback />} />
                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App