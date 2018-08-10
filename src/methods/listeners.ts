import { data } from './listeners-data';

export function listeners(request) {
    const offset = request.query.offset || 0;
    const limit = request.query.limit || 30;
    return data.filter((listener) => {
        if (request.query.search && request.query.search.length) {
            return listener.handle.toLowerCase().indexOf(request.query.search.toLowerCase()) !== -1;
        } else {
            return true;
        }
    }).splice(offset, limit);
};