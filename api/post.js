import GhostContentAPI from '@tryghost/content-api'
// import { enviroment } from '../enviroment'

const api = new GhostContentAPI({
  url: '',
  key: '',

})


export async function posts() {
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
