import Image from "next/image";
import styles from "../styles/ContactAbout.module.css";
import BlogImage from "../styles/blog.svg";

const BlogCard = ({ blog }) => {
  return (
    <div className={styles.blogCard}>
      <div className={styles.blogIcons}>
        <Image src={BlogImage} alt="blog" />
      </div>
      <span className={styles.title}> {blog.title}</span>
      <div className={styles.textBlog}>{blog.text}</div>
    </div>
  );
};

export default BlogCard;
