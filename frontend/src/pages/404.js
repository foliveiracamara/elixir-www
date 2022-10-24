import { useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer404 from "../pages/ErrorPage/Footer404"

export default function NotFound() {

    return (
        <>
            <Link href="/">
                <Header />
            </Link>
            <Footer404 />
        </>
    );
}

