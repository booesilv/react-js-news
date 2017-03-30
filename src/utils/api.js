import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */

/* NEWS: https://newsapi.org/ */

export const NEWS_API_KEY = 'b1d5327138604948b97ba290d0cfa5fd'

export const ENDPOINTS = {

    NEWS_API_URL: 'https://newsapi.org/v1/articles',
    SOURCE_API_URL: 'https://newsapi.org/v1/sources'

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}