import axios from 'axios';

const url = 'http://localhost:5000/api/posts/';

class PostService {
    // GET Post

    static getPosts() {
        return new Promise((resolve, reject) => {
            axios.get(url).then((res) => {
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.created)
                    }))
                );
            })
            .catch ((err) => {
                reject(err);
            })
        });
    }

    // CREATE Post
    static insertPost(text) {
        return axios.post(url, {
            text
        });
    }

    // Delete Post
    static deletePost(id){
        return axios.delete(`${url}${id}`);
    }
}

export default PostService;