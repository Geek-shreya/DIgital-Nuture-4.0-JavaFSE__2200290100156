import { useState } from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const [tab, setTab] = useState("books");
  const tabs = ["books", "blogs", "courses"];

  return (
    <div className="App">
      <h1>Blogger App</h1>

      {tabs.map((t) => (
        <button key={t} onClick={() => setTab(t)}>
          {t}
        </button>
      ))}

      {tab === "books" && <BookDetails />}
      {tab === "blogs" ? <BlogDetails /> : null}
      {tab === "courses" && <CourseDetails />}

      {tab !== "books" && tab !== "blogs" && tab !== "courses" && (
        <p>Select above</p>
      )}
    </div>
  );
}

export default App;
