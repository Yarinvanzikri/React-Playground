import Comment from './Comment/Comment.js'
export default function CommentList(){
   return (<div>
             <Comment weather='Hot' author={'Yarin'}/>
             <Comment weather='Cold' author={'Moshe'}/>
             <Comment weather='Tempered' author={'Gil'}/>
          </div>
   )
}