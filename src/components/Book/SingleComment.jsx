import './book.css'

export const SingleComment = ({ comment, rate, author }) => {
  return (
    <div className="comment-cont">
      <p>Author: {author}</p>
      <p>Comment: {comment}</p>
      <p>Rate: {rate}</p>
    </div>
  );
};
