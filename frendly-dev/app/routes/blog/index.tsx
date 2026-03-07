import { useState } from "react";
import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";
import PostCard from "~/components/PostCard";
import Pagination from "~/components/Pagination";
import PostFilter from "~/components/PostFilter";

export async function loader({request}:Route.LoaderArgs): Promise<{ posts: PostMeta[]}> {
    const url = new URL("/posts-meta.json", request.url);
    const res = await fetch(url);
    if(!res.ok){
        throw new Response("Failed to load posts meta", {status: res.status});
    }
    const data: PostMeta[] = await res.json();
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return { posts: data};
}

const BlogPage = ({ loaderData }:Route.ComponentProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 3;
    const { posts } = loaderData;
    const filteredPosts = loaderData.posts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    return (
        <div className="max-w-3xl mx-auto mt-10 px-6 py-6 bg-gray-900">
            <h2 className='text-3xl font-bold text-blue-500 mb-8 text-center'>Blog</h2>
            <PostFilter 
                searchQuery={searchQuery} 
                onSearchChange={(query) => {
                    setSearchQuery(query);
                    setCurrentPage(1);
                }} 
            />
            <div className="space-y-8">
                { currentPosts.length === 0 ? 
                    (<p className="text-gray-400 text-centered">No posts found</p>) : 
                    currentPosts.map(post => (
                        <PostCard key={post.slug} post={post} />
                    ))
                }
            </div>

            { totalPages > 1 && <div className="mt-6 flex justify-center">
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </div>}
        </div>
    )
}

export default BlogPage;