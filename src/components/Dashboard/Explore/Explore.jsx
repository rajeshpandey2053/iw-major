import React, { useEffect } from "react";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";
import "./explore.scss";
import Dashboard from "../Dashboard";
import Post from "../Feed/Post/Post";
import {
  fetchPostsForExplore,
  appendExplorePosts,
} from "../../../redux/actions/exploreAction";

const Explore = (props) => {
  const {
    fetchPostsForExplore,
    posts,
    nextLink,
    appendExplorePosts,
    loading,
    profile,
  } = props;
  const initialParams = {
    university: "",
    faculty: "",
    semester: "",
  };

  const [education, setEducation] = React.useState(initialParams);

  useEffect(() => {
    console.log("Iamrunning");
    if (posts.length === 0) {
      fetchPostsForExplore(education);
    }
  }, []);

  const [query, setQuery] = React.useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(query);
    fetchPostsForExplore({ search: query });
  };

  const handleEducationChange = (event) => {
    const { name, value } = event.target;
    setEducation({
      ...education,
      [name]: value,
    });
  };

  const handleEducationSubmit = (event) => {
    event.preventDefault();
    console.log({ education });
    fetchPostsForExplore(education);
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
            onSubmit={handleEducationSubmit}
          >
            <div className="education-field-wrapper">
              <div>
                <select
                  title="University"
                  name="university"
                  value={education.university}
                  onChange={handleEducationChange}
                >
                  <option value={""}>-</option>
                  {profile.university.map((uni) => (
                    <option value={uni.id}>{uni.university_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  title="Faculty"
                  name="faculty"
                  value={education.faculty}
                  onChange={handleEducationChange}
                >
                  <option value={""}>-</option>
                  {profile.faculty.map((fac) => (
                    <option value={fac.id}>{fac.faculty_name}</option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  title="Semester"
                  name="semester"
                  value={education.semester}
                  onChange={handleEducationChange}
                >
                  <option value={""}>-</option>
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
          {posts &&
            posts.map((post) => <Post post={post} key={post?.post_slug} />)}
        </div>

        <div className="see-more-wrapper">
          {loading ? (
            <CircularProgress />
          ) : nextLink ? (
            <button
              onClick={() => {
                // console.log({ nextLink });
                appendExplorePosts(nextLink, education);
              }}
            >
              See More
            </button>
          ) : (
            "Oops! You've viewed all the posts."
          )}
        </div>
      </div>
    </Dashboard>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.explore.posts,
    nextLink: state.explore.nextLink,
    loading: state.explore.loading,
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsForExplore: (params) => dispatch(fetchPostsForExplore(params)),
    appendExplorePosts: (nextLink, params) =>
      dispatch(appendExplorePosts(nextLink, params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
