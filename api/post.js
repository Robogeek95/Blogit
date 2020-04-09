import GhostContentAPI from '@tryghost/content-api'
// import { enviroment } from '../enviroment'

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '4d995a15281eae2cd03518d1be',
  version: "v2"
})

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags, authors"
    })
    .catch((err) => {
      console.log(err);
    }
    )
}
