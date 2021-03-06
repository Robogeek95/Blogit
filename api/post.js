import GhostContentAPI from '@tryghost/content-api'
// import GhostAdminAPI from '@tryghost/admin-api'
// import { enviroment } from '../enviroment'
// import GhostContentAPI from '~/content-api';

const api = new GhostContentAPI({
  url: 'http://localhost:2368',
  key: '4d995a15281eae2cd03518d1be',
  version: "v2"
})

// const api = new GhostAdminAPI({
//   url: 'http://localhost:2368/',
//   key: '4d995a15281eae2cd03518d1be',
//   version: "v2"
// })

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags, authors"
    })
    .catch((err) => {
      console.log(err);
    })
};

export async function getPost(slug) {
  return await api.posts
    .read({
      slug: slug
    })
    .catch(err => console.log(err))
}
