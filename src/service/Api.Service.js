import axios from 'axios'

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {
    q: 'music',
    part: 'snippet,id',
    regionCode: 'US',
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'x-rapidapi-key': 'bc96fa5316msheb7f3f438fbc6fep1fe953jsne37b890ff855',
    'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
  }
}

export const ApiService = {
  async fetching (url, params = {}) {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      ...options,
      params: { ...options.params, ...params }
    })
    return response.data
  }
}
