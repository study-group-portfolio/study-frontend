import { useHistory } from 'react-router-dom';
import { Path } from 'utils/enum';

export function getImgStyle(img: string) {
    return {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
}

export function getUrl(path: Path, query?: any): string {
    let queryString = '';

    if (query) {
        for (const key in query) {
            queryString += `${key}=${query[key]}&`;
        }
    }

    const url = `${path}?${queryString}`;

    return url;
}