/* eslint-disable */
import { AspidaClient, dataToURLString } from 'aspida'
import { Methods as Methods0 } from './agencies'
import { Methods as Methods1 } from './agencies/_agencyId@string'
import { Methods as Methods2 } from './agencies/_agencyId@string/requests/_requestId@string'
import { Methods as Methods3 } from './properties'
import { Methods as Methods4 } from './properties/_propertyId@string'
import { Methods as Methods5 } from './users/_userId@string'
import { Methods as Methods6 } from './users/indes'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'undefined' : baseURL).replace(/\/$/, '')
  const PATH0 = '/agencies'
  const PATH1 = '/requests'
  const PATH2 = '/properties'
  const PATH3 = '/users'
  const PATH4 = '/users/indes'
  const GET = 'GET'
  const PUT = 'PUT'
  const DELETE = 'DELETE'

  return {
    agencies: {
      _agencyId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          requests: {
            _requestId: (val3: string) => {
              const prefix3 = `${prefix1}${PATH1}/${val3}`

              return {
                put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
                  fetch<Methods2['put']['resBody']>(prefix, prefix3, PUT, option).json(),
                $put: (option: { body: Methods2['put']['reqBody'], config?: T }) =>
                  fetch<Methods2['put']['resBody']>(prefix, prefix3, PUT, option).json().then(r => r.body),
                delete: (option?: { config?: T }) =>
                  fetch<Methods2['delete']['resBody']>(prefix, prefix3, DELETE, option).json(),
                $delete: (option?: { config?: T }) =>
                  fetch<Methods2['delete']['resBody']>(prefix, prefix3, DELETE, option).json().then(r => r.body),
                $path: () => `${prefix}${prefix3}`
              }
            }
          },
          get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
            fetch<Methods1['put']['resBody']>(prefix, prefix1, PUT, option).json(),
          $put: (option: { body: Methods1['put']['reqBody'], config?: T }) =>
            fetch<Methods1['put']['resBody']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    properties: {
      _propertyId: (val1: string) => {
        const prefix1 = `${PATH2}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods4['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
            fetch<Methods4['put']['resBody']>(prefix, prefix1, PUT, option).json(),
          $put: (option: { body: Methods4['put']['reqBody'], config?: T }) =>
            fetch<Methods4['put']['resBody']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          delete: (option?: { config?: T }) =>
            fetch<Methods4['delete']['resBody']>(prefix, prefix1, DELETE, option).json(),
          $delete: (option?: { config?: T }) =>
            fetch<Methods4['delete']['resBody']>(prefix, prefix1, DELETE, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option?: { query?: Methods3['get']['query'], config?: T }) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    users: {
      _userId: (val1: string) => {
        const prefix1 = `${PATH3}/${val1}`

        return {
          get: (option?: { config?: T }) =>
            fetch<Methods5['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { config?: T }) =>
            fetch<Methods5['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          put: (option: { body: Methods5['put']['reqBody'], config?: T }) =>
            fetch<Methods5['put']['resBody']>(prefix, prefix1, PUT, option).json(),
          $put: (option: { body: Methods5['put']['reqBody'], config?: T }) =>
            fetch<Methods5['put']['resBody']>(prefix, prefix1, PUT, option).json().then(r => r.body),
          $path: () => `${prefix}${prefix1}`
        }
      },
      indes: {
        get: (option?: { query?: Methods6['get']['query'], config?: T }) =>
          fetch<Methods6['get']['resBody']>(prefix, PATH4, GET, option).json(),
        $get: (option?: { query?: Methods6['get']['query'], config?: T }) =>
          fetch<Methods6['get']['resBody']>(prefix, PATH4, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get'; query: Methods6['get']['query'] }) =>
          `${prefix}${PATH4}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
