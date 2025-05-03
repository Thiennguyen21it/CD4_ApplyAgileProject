import React from "react"
import Navigation from "../components/Navigate"
import Footer from "../components/Footer"

interface IProps {
    children: React.ReactElement
}
export default function PageLayout({ children }: IProps) {
    return <div className="min-h-screen flex flex-col">
        <Navigation />
        {children}
        <Footer />
    </div>
}