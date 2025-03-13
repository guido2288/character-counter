export const count = (s) => {
    const obj = {};

    for( const char of s ) {
        obj[char] = (obj[char] || 0) + 1;
    }  

    return Object.entries(obj)
}