import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchGithubUser } from "../api/github";
import UserCard from "./UserCard";


const UserSearch = () => {
    const [username, setUsername] = useState("");
    const [submittedUsername, setSubmittedUsername] = useState("");

    const { data, isLoading, error } = useQuery({
        queryKey: ["user", submittedUsername],
        queryFn: async () => fetchGithubUser(submittedUsername),
        enabled: !!submittedUsername,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedUsername(username);
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
            onClick={(e) => {
                e.preventDefault();
                setSubmittedUsername(username);
            }}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            >
            Search
            </button>
        </form>
        {isLoading && <p>Loading...</p>}
        {error && <p className="status error">{error.message}</p>}
        {data && <UserCard user={data} />}
        </>
        );
    };

export default UserSearch;