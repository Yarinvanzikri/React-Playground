import CommentList from './CommentList/CommentList.js'
export default function Article(props) {
    return( <article>
                 <h1>{props.title}</h1>
                 <div>{props.content}</div>
                  <CommentList />;
             </article>
)}