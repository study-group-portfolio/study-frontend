import HTTP from 'api/http';

export function getAlarmList() {
    return HTTP.get("/api/alarm");
}