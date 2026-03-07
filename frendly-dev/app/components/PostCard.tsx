import type { PostMeta } from "~/types";
import { Link } from "react-router";

const PostCard = ({ post }: { post: PostMeta }) => {
    return (
        <article className="mb-4 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-2xl font-semibold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 mb-4">{new Date(post.date).toDateString()}</p>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-400 text-sm hover:underline hover:cursor-pointer">Read more</Link>
        </article>
    );
};

export default PostCard;