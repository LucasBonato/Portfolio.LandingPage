import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Outlet } from "react-router"

export default function MainLayout() {
    return (
        <main className="relative min-h-screen">
            <Header />
            <Outlet/>
            <Footer />
        </main>
    )
}