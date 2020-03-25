export default function({ $axios }, inject) {
  const api = $axios.create({
    baseURL: process.env.apiUrl
  })

  inject('api', api)
}
