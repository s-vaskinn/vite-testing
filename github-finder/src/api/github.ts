export const fetchGithubUser = async (username: string) => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`);
    if (!res.ok) {
        throw new Error("User not found");
    }
    const data = await res.json();
    return data;
};

export const searchGithubUser = async (query: string) => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/search/users?q=${query}`);
    if (!res.ok) {
        throw new Error("User not found");
    }
    const data = await res.json();
    return data.items;
};

// Check if following a user on github
export const checkIfFollowingUser = async (username: string) => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/user/following/${username}`, {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
        }
    });
    if (res.status === 204) {
        return true; // 204 means user is followed 
    } else if (res.status === 404) {
        return false; // Not following
    } else {
        const errorData = await res.json().catch(() => null); 
        throw new Error(errorData || "Failed to check follow status");
    }
};

// Follow a user on github
export const followUser = async (username: string) => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/user/following/${username}`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
        }
    });
    if (res.status === 204) {
        return true; // Successfully followed
    } else {
        const errorData = await res.json(); 
        throw new Error(errorData || "Failed to follow user");
    }
    return true;
};

// Unfollow a user on github
export const unfollowUser = async (username: string) => {
    const res = await fetch(`${import.meta.env.VITE_GITHUB_API_URL}/user/following/${username}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            Accept: "application/vnd.github.v3+json",
            "Content-Type": "application/json",
        }
    });
    if (res.status === 204) {
        return true; // Successfully unfollowed
    } else {
        const errorData = await res.json(); 
        throw new Error(errorData || "Failed to unfollow user");
    }
    return true;
};