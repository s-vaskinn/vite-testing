import { useQuery, useMutation } from "@tanstack/react-query";
import { checkIfFollowingUser, followUser, unfollowUser } from "../api/github";
import { FaGithubAlt } from "react-icons/fa";
import type { GithubUser } from "../types";
import { FaUserPlus, FaUserMinus } from "react-icons/fa";
import { toast } from "sonner";

const UserCard = ({ user }: { user: GithubUser }) => {
    // Query to check if user is followed
    const { data: isFollowing, refetch} = useQuery({
        queryKey: ["follow-status", user.login],
        queryFn: () => checkIfFollowingUser(user.login),
        enabled: !!user.login, // Only run if user.login is available
    })
    // Mutation to follow/unfollow user
    const followMutation = useMutation({
        mutationFn: () => followUser(user.login),
        onSuccess: () => {
            toast.success(`User followed successfully: ${user.login}`);
            refetch(); // Refetch the follow status after successful follow
        },
        onError: (error) => {
            toast.error(`Failed to follow user: ${user.login}`);
            console.error(`Failed to follow user: ${user.login}`, error);
        }
    });

    const unfollowMutation = useMutation({
        mutationFn: () => unfollowUser(user.login),
        onSuccess: () => {
            toast.success(`User unfollowed successfully: ${user.login}`);
            refetch(); // Refetch the follow status after successful unfollow
        },
        onError: (error) => {
            toast.error(`Failed to unfollow user: ${user.login}`);
            console.error(`Failed to unfollow user: ${user.login}`, error);
        }
    });
    
    const handleFollow = () => {
        if (isFollowing) {
            unfollowMutation.mutate();
        } else {
            followMutation.mutate();
        }
    };

    return (
            <div>
                <img src={user.avatar_url} alt={user.login} className="avatar"/>
                <h2>{user.name || user.login}</h2>
                <p className="bio">{user.bio}</p>
                <div className="user-card-buttons">
                    <button 
                        disabled={followMutation.isPending || unfollowMutation.isPending}
                        onClick={ handleFollow }
                        className={`follow-btn ${isFollowing ? "following" : ""}`}>
                        {isFollowing ? (
                            <>
                            <FaUserMinus className="follow-icon"/> Following
                            </>
                            ):(
                            <>
                            <FaUserPlus className="follow-icon"/> Follow user
                            </>
                            )
                        }
                    </button>
                    <a 
                        href={user.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="profile-link"
                    >
                        <FaGithubAlt /> View GitHub Profile
                    </a>
                </div>

            </div>
    );
};

export default UserCard;