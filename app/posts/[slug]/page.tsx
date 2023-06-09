import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from "gray-matter";


const getPostContent=(slug:any)=>{
    const folder=`posts/`;
    const file=`${folder}${slug}.md`;
    const content= fs.readFileSync(file,"utf-8");
    const matterResult=matter(content);
    return matterResult;
};

const PostPage=(props:any)=>{
    const slug= props.params.slug;
    const post= getPostContent(slug);
    return(
        <div>
            <h1>{post.data.title}</h1>
            <Markdown>{post.content}</Markdown>
        </div>
        
    )
};
export default PostPage;