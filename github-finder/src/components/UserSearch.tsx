import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "../api/github";
import UserCard from "./UserCard";
import RecentSearches from "./RecentSearches";


const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [submittedUsername, setSubmittedUsername] = useState("");
    const [recentUsers, setRecentUsers] = useState<string[]>([]);

    const { data, isLoading, error } = useQuery({
        queryKey: ["user", submittedUsername],
        queryFn: async () => fetchGithubUser(submittedUsername),
        enabled: !!submittedUsername,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        console.log("hello")
        e.preventDefault();
        const trimmed = username.trim();
        if (!trimmed) return;

        setSubmittedUsername(trimmed);
        setRecentUsers((prev) => {
            const updated = [trimmed, ...prev.filter((u) => u !== trimmed)];
            return updated.slice(0, 5);
        });
        console.log("hello 2")
    };

    return (
        <>
        <form onSubmit={handleSubmit} className="form">
            <input
            type="text"
            className="border p-2 rounded w-full mb-4"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button
            type="submit"
            >
            Search
            </button>
        </form>
        {isLoading && <p>Loading...</p>}
        {error && <p className="status error">{error.message}</p>}
        {data && <UserCard user={data} />}
        {<p> # recent users {recentUsers.length}</p>}
        {recentUsers.length > 0 && (
            <RecentSearches 
                users={recentUsers} 
                onSelect={(user) => {
                    setUsername(user);
                    setSubmittedUsername(user);
                    }
                } 
            />
        )}
        {<p> # recent users {recentUsers.length}</p>}  
        </>
        );
    };

export default UserSearch;