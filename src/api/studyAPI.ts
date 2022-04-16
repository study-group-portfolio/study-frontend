import HTTP from 'api/http';

export function getStudyList(page: number, size: number) {
    return HTTP.get("/api/study", {
        params: {
            page,
            size
        }
    })
}

export function getPositionList() {
    return HTTP.get("/api/resource/position");
}

export function getSkillList(positionName: string) {
    return HTTP.get(`/api/resource/skill/${positionName}`);
}