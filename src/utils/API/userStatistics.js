import { request } from './request'

export function getUserTopAlbums() {
  return request(
    {
      url: 'https://api.spotify.com/v1/me/top/tracks',
      method: 'GET',
    },
    'application/json',
    `Bearer ${localStorage.getItem('accessToken')}`,
  )
}

export function getUserTopArtists() {
  return request(
    {
      url: 'https://api.spotify.com/v1/me/top/artists',
      method: 'GET',
    },
    'application/json',
    `Bearer ${localStorage.getItem('accessToken')}`,
  )
}