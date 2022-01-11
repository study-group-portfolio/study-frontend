import { useHistory } from 'react-router-dom';

export function getImgStyle(img: string) {
    return {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
}

export function goPage(path: string, query?: any) {
    let queryString = '';

    if (query) {
        for (const key in query) {
            queryString += `${key}=${query[key]}&`
        }
    }

    const url = `${path}?${queryString}`;
    const history = useHistory();

    history.push(url);
}