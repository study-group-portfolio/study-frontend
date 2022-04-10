import HTTP from 'api/http';

export function getStudyList(page: number, size: number) {
    return HTTP.get("/api/study", {
        params: {
            page,
            size
        }
    })
}