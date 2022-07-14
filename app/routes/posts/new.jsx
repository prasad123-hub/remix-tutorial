import { redirect } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { db } from "~/utils/db.server";

export const action = async ({ request }) => {
  const form = await request.formData();
  console.log(form);
  const title = form.get("title");
  const body = form.get("body");

  const fields = { title, body };
  console.log(fields);
  const post = await db.post.create({ data: fields });
  return redirect("/posts");
};

function New() {
  return (
    <>
      <div className="post-container-title post-container-outer">
        <h1 className="post-container-title-text">Create News</h1>
        <Link to="/posts">
          <button className="post-btn">Back</button>
        </Link>
      </div>

      <div className="form">
        <form method="POST">
          <div>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" name="title" id="title" />
          </div>

          <div>
            <label htmlFor="body">Body</label>
            <br />
            <textarea name="body" id="body" cols="76" rows="10"></textarea>
          </div>

          <button>Add Post</button>
        </form>
      </div>
    </>
  );
}

export default New;
