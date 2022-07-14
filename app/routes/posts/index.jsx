import { Link, useLoaderData } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const loader = async () => {
  const data = {
    posts: await db.post.findMany({
      select: { id: true, title: true, body: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
  };

  return data;
};

function PostItem() {
  const { posts } = useLoaderData();

  return (
    <div className="post-container-outer">
      <div className="post-container-title">
        <h1 className="post-container-title-text">Trending Tech News</h1>
        <Link to="/posts/new">
          <button className="post-btn">New Post</button>
        </Link>
      </div>
      <div className="news-section">
        {posts.map((item) => (
          <div key={item.id} className="news-container">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <p>created At : {item.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostItem;
