type PostFilterProps = {
    searchQuery: string;
    onSearchChange: (query: string) => void;
};

const PostFilter = ({ searchQuery, onSearchChange }: PostFilterProps) => {
    return (
        <div className="mb-6">
            <input
                type="text"
                placeholder="Search posts..."
                className="w-full p-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
            />
        </div>
    );
};

export default PostFilter;