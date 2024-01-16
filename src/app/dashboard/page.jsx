'use client'
import { useRouter } from "next/navigation";

const Dashboard = () => {
    const router = useRouter();
    const handleClick = () => {
        router.push('/')
    }
    return ( 
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleClick}>Home</button>
        </div>
    );
}

export default Dashboard;