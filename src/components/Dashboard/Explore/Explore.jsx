import React from "react";
import "./explore.scss";
import Dashboard from "../Dashboard";
import Post from "../Feed/Post/Post";

const Explore = props => {
  const [query, setQuery] = React.useState("");

  // just a post mock
  const [post, setPost] = React.useState({
    user_name: "anjalbam12",
    education: {
      university_name: "Tribhuwan University",
      faculty_name: "Electronics Engineering",
      semester: "III",
    },
    caption: "This is an example post just for placeholder purposes.",
    file: null,
    post_slug: "new-post",
  });

  const [education, setEducation] = React.useState({
    university: 1,
    semester: "II",
    faculty: 1,
  });

  const handleChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(query);
  };

  const handleEducationChange = event => {
    const { name, value } = event.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleEducationSubmit = event => {
    event.preventDefault();
    console.log({ education });
  };

  return (
    <Dashboard>
      <div className="explore-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="explore-header">
            <div className="explore-title">
              <h2>Search for various posts here.</h2>
            </div>
            <div className="search-bar-wrapper">
              <div className="search-bar">
                <input
                  type="text"
                  name="query"
                  id="query"
                  onChange={handleChange}
                  placeholder="Search Here..."
                />
              </div>
              <button className="submit-btn" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>

        <div className="education-wrapper">
          <div className="title">
            <h2>Or use our smart post filter...</h2>
          </div>
          <form
            className="education-form-wrapper"
            onSubmit={handleEducationSubmit}>
            <div className="education-field-wrapper">
              <div>
                <select
                  title="University"
                  name="university"
                  value={education.university}
                  onChange={handleEducationChange}>
                  <option value={1}>Tribhuwan University</option>
                  <option value={2}>Purbanchal University</option>
                  <option value={3}>Pokhara University</option>
                </select>
              </div>
              <div>
                <select
                  title="Faculty"
                  name="faculty"
                  value={education.faculty}
                  onChange={handleEducationChange}>
                  <option value={1}>Bachelor in engineering</option>
                  <option value={2}>Chartered Accountancy</option>
                  <option value={3}>Bachelor in Business Administration</option>
                </select>
              </div>
              <div>
                <select
                  title="Semester"
                  name="semester"
                  value={education.semester}
                  onChange={handleEducationChange}>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                </select>
              </div>
            </div>
            <button type="submit">Filter</button>
          </form>
        </div>

        <div>
          <Post post={post} />
        </div>
      </div>
    </Dashboard>
  );
};

export default Explore;
