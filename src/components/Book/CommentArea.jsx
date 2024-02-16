import { AddComment } from "./AddComment.jsx";
import { CommentList } from "./CommentList.jsx";

export const CommentArea = ({ asin }) => {
  return (
    <>
      <CommentList asin={asin} />
      <AddComment asin={asin}/>
    </>
  );
};
