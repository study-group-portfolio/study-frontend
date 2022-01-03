export function getImgStyle(img: string) {
    return {
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };
}