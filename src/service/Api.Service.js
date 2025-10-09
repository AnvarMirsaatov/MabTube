import axios from 'axios'

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
const BASE_URL = 'http://localhost:4000'

const HEADERS = {
  'x-rapidapi-key': 'b78e7e0a79mshbe338596405a5bep1455eajsn007c79202670',
  'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
}

export const ApiService = {
  async fetching(url, params = {}) {
    try {
      const response = await axios.get(`${BASE_URL}/${url}`, {
        headers: HEADERS,
        params: {
          part: 'snippet,id',
          regionCode: 'US',
          maxResults: '50',
          order: 'date',
          ...params
        }
      })
      return response.data
    } catch (error) {
      console.error('API error:', error)
      throw error
    }
  }
}
