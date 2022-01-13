import { useMemo, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Path } from "utils/enum";
import { getUrl } from "./util";

export function useQuery() {
    const { search } = useLocation();    
    return useMemo(() => new URLSearchParams(search), [search]);
}

export function useGoPage(path: Path, query?: any) {
    const history = useHistory();
    const url = getUrl(path, query);

    return useCallback(() => history.push(url), [path, query]);
}