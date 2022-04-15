import { useMemo, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Path } from "utils/enum";
import { getUrl } from "./util";

export function useQuery() {
    const { search } = useLocation();
    const query = {};

    for (const [key, value] of new URLSearchParams(search)) {
        Object.defineProperty(query, key, {
            value,
            writable: false,
        });
    }

    return query
}

export function useGoPage(path: Path, query?: any) {
    const history = useHistory();
    const url = getUrl(path, query);

    return useCallback(() => history.push(url), [path, query]);
}