export const SingleComment = ({ _id, comment, rate, elementId, author }) => {
  return (
    <div>
      <p>{_id}</p>
      <p>{comment}</p>
      <p>{rate}</p>
      <p>{elementId}</p>
      <p>{author}</p>
    </div>
  );
};
