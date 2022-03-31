import React, {component} from "react";
import './BlogPost.css';

class BlogPost extends Component{
    render(){
        return(
            <div class="post-artikel">
                <h2>List of Article</h2>
                <div class="artikel">
                    <div class="gambar-artikel">
                        <img src="" alt="gambar tumbhnail artikel" />
                    </div>
                    <div class="konten-artikel">
                        <div class="judul-artikel">Article Title</div>
                        <p class="isi-artikel">Content of Article</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;