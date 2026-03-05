type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    if (totalPages <= 1) return null; // No pagination needed for 1 or fewer pages    
    return (
        <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1} // page numbers start from 1
                    onClick={() => onPageChange(i + 1)}
                    className={`px-3 py-1 cursor-pointer rounded ${
                        currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-700 text-gray-200"
                    } hover:bg-blue-400 transition`}
                >
                    {i + 1}
                </button>
            ))}
        </div>
    );
};

export default Pagination;