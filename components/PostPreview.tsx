import Link from "next/link";
import getPostMetaData from "./getPostMetadata";
import { PostMetadata } from "./postMetadata";

const PostPreview=(props: PostMetadata)=>{
    
 return (
    <div className="border border-slate-200 p-4 rounded-md shadow-md bg-white">
      <Link href={`/posts/${props.slug}`}>
      <h2 className="font-bold text-violet-600 hover:underline">{props.title}</h2>
      </Link>
      <p className=" text-slate-400">{props.subtitle}</p>
      <p className="text-sm text-slate-400">{props.date}</p>
    </div>
 )
}

export default PostPreview;