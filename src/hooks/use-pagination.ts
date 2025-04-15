import { useState } from 'react';

export function usePagination<T>(data: T[], itemsPerPage: number) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const MIN_PAGE = 1;

    function getCurrentData() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        return data.slice(start, end);
    }

    function nextPage() {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }

    function prevPage() {
        setCurrentPage((prev) => Math.max(prev - 1, MIN_PAGE));
    }

    function setPagePaginated(page: number) {
        const pageNumber = Math.max(MIN_PAGE, page);
        setCurrentPage(Math.min(pageNumber, totalPages));
    }

    return { getCurrentData, totalPages, currentPage, nextPage, prevPage, setPagePaginated };
}
