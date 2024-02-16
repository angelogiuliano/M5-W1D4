import { AddComment } from "./AddComment";
import { CommentList } from "./CommentList";

export const CommentArea = ({ asin }) => {
  let givenComment = {
    comment: "good",
    rate: "2",
    elementId: `${asin}`,
  };

  return (
    <>
      <CommentList asin={asin} />
      <AddComment asin={asin} givenComment={givenComment} />
    </>
  );
};
