import { FaCommentDots, FaEye } from "react-icons/fa";

function BlogCardVoluntario({ category, title, desc, author, avatar, comments, views }) {
  return (
    <div className="blog-card">
      <p className="blog-category">{category}</p>
      <h3 className="blog-title">{title}</h3>
      <p className="blog-desc">{desc}</p>
      <div className="blog-footer">
        <div className="blog-author">
          <img src={avatar} alt={author} className="blog-avatar" />
          <span>{author}</span>
        </div>
        <div className="blog-stats">
          <span className="blog-stat">
            <FaCommentDots /> {comments}
          </span>
          <span className="blog-stat">
            <FaEye /> {views}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogCardVoluntario;
