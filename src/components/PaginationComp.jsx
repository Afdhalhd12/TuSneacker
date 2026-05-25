import { Pagination } from "flowbite-react";


export default function PaginationComp({ currentPage, onPageChange, }) {
    return (
        <div className="flex overflow-x-auto sm:justify-center">
            <Pagination
                layout="pagination"
                currentPage={currentPage}
                totalPages={10}
                onPageChange={onPageChange}
                previousLabel="Previous"
                nextLabel="Next"
                showIcons
                theme={{
                    pages: {
                        selector: {
                            active:
                                "bg-[#D4F931] text-white",
                        },
                    },
                }}
            />
        </div>
    )
}