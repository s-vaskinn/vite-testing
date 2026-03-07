import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";
import { Link } from "react-router";

type BlogPostDetailsPageProps = {
    loaderData: {
        postMeta: PostMeta;
        markdown: string;
    }
};

export async function loader({params, request}:Route.LoaderArgs): Promise<{ postMeta: PostMeta, markdown: string }> {
    const { slug } = params;
    const url = new URL(`/posts-meta.json`, request.url);
    const res = await fetch(url);
    if(!res.ok){
        throw new Response("Failed to load post details", {status: res.status});
    }
    
    const index = await res.json();

    const postMeta = index.find((post: PostMeta) => post.slug === slug);

    if(!postMeta){
        throw new Response("Post not found", {status: 404});
    }
    // Dynamically load the markdown content of the post
    const markdown = await import("../../posts/" + postMeta.slug + ".md?raw");
    
    return {
        postMeta,
        markdown: markdown.default
    }
}

const BlogPostDetailsPage = ( {loaderData}: BlogPostDetailsPageProps ) => {
    const { postMeta, markdown } = loaderData;
    
    return (
        <>
        <div className="max-w-3xl mx-auto px-6 py-12 bg-gray-900">
            <h1 className="text-white text-3xl font-bold mb-4">Blog Details Page</h1>
            <h2 className="text-white text-2xl font-semibold mb-2">{postMeta.title}</h2>
            <p className="text-gray-400 mb-6">{new Date(postMeta.date).toDateString()}</p>
            <div className="max-w-none mb-12 prose prose-invert">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
        <Link to="/blog" className="text-blue-500 hover:underline hover:cursor-pointer mt-4 block">
            Back to Blog List
        </Link>
        </>
    );
};

export default BlogPostDetailsPage;