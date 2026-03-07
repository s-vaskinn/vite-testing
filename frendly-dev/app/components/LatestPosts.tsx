import { Link } from "react-router";
import type { PostMeta } from "~/types";

type LatestsPostsProps = {
    posts: PostMeta[];
    limit: number;
};

const LatestPosts = ({ posts, limit = 3 }: LatestsPostsProps) => {

    const sortedPosts = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const limitedPosts = sortedPosts.slice(0, limit);

    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
            <h2 className="text-3xl font-bold text-blue-500 mb-8 text-center">Latest Posts</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                { limitedPosts.map((post)=>(
                    <Link 
                        key={post.slug} 
                        to={`/blog/${post.slug}`} 
                        className="block p-6 border border-gray-700 rounded-lg bg-gray-800 hover:shadow-md transition"
                    >
                        <h3 className="text-gray-200 text-xl font-semibold mb-2">{post.title}</h3>
                        <p className="text-gray-200 mb-4">{post.description}</p>
                        <span className="text-sm text-gray-200">{new Date(post.date).toDateString()}</span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default LatestPosts;