import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ProjectContext from "../../context/ProjectContext";
import DisplayProject from "../DisplayProject";
function AddCommentPage({ handleAddComment }) {
  const { selectedProject, loggedUser, addSelectedProject } =
    useContext(ProjectContext);
  const [commentText, setCommentText] = useState("");
  const [commentObject, setCommentObject] = useState({});
  const [message, setMessage] = useState("");
  const [commentValid, setCommentValid] = useState(false);

  useEffect(() => {
    checkComment();
  });

  const checkComment = () => {
    if (commentText.trim().length < 10) {
      setMessage("Komentarz powinien składać się przynajmniej z 10 znaków");
    } else {
      setMessage("");
      setCommentValid(true);
    }
  };
  const handleComment = (e) => {
    let Value = e.currentTarget.value;
    setCommentText(Value);
    let ValueObject = { text: Value };
    setCommentObject((object) => ({
      ...object,
      ...ValueObject,
    }));
  };

  const setComment = () => {
    let dateInfo = new Date();
    let additionalInfo = {
      date: [
        dateInfo.getFullYear(),
        dateInfo.getMonth() + 1,
        dateInfo.getDate(),
      ],
      time: [dateInfo.getHours(), dateInfo.getMinutes()],
      author: loggedUser.name + " " + loggedUser.surname,
    };
    let comment = commentObject;
    comment = {
      ...commentObject,
      ...additionalInfo,
    };
    let commentList;
    if (selectedProject.comments === undefined) {
      commentList = [];
    } else {
      commentList = selectedProject.comments;
    }


    commentList.unshift({
      text: comment.text,
      author: comment.author,
      date: comment.date,
      time: comment.time,
      id: uuidv4(),
    });

    selectedProject.comments = commentList
    addSelectedProject(selectedProject)
    handleAddComment(selectedProject)
  };

  return (
    <>
      <h3>Dodaj komentarz do projektu</h3>
      <DisplayProject project={selectedProject} />
      <input type="text" onChange={handleComment} value={commentText}></input>
      <div>{message}</div>
      <div>
        <Link to="/projectList">Powrót</Link>
        {commentValid ? (
          <Link to="/projectDetails" onClick={setComment}>
            Zatwierdź Komentarz
          </Link>
        ) : (
          <Link to="/addComment">Zatwierdź Komentarz</Link>
        )}
      </div>
    </>
  );
}

export default AddCommentPage;
