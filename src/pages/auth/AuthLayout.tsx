import { Outlet } from "react-router-dom"

const AuthLayout = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-dvh">
                <div className="hidden lg:block max-h-screen">
                    <img src="./assets/images/Rabiu_Ali_of_Kano_Pillars.jpg" alt="Rabiu_Ali_of_Kano_Pillars" className="w-full h-full object-cover object-center pointer-events-none" />
                </div>
                <Outlet />
            </div>
        </>
    )
}

export default AuthLayout