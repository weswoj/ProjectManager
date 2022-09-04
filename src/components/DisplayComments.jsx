function DisplayComments({ comment }) {

  let minutes = comment.time[1]
  let minutesText = ""
  if (minutes < 10) {
    minutesText = "0" + minutes
  } else {
    minutesText = minutes
  }

  return (
    <>
      <div>
        <table className="commentTable">
          <tbody>
            <tr>
              <th>Autor</th>
              <th>Data </th>
              <th>Godzina</th>
              <th>Komentarz</th>
            </tr>
            <tr>
              <td>{comment.author}</td>
              <td>{comment.date[0] + "-" + comment.date[1] + "-" + comment.date[2]}</td>
              <td>{comment.time[0] + ":" + minutesText}</td>
              <td>{comment.text}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );

}

export default DisplayComments;
