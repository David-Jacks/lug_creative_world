import React, { useEffect, useMemo, useState } from "react";
import { GiCancel } from "react-icons/gi";
import "./PublishModal.css";
import { sendPostData, updateArticle } from "../../../api";
import Loading from "../loadingmodal/loading";

const PublishModal = (props) => {
  const [descPhoto, setPhoto] = useState(null);
  const [load, setLoad] = useState(false);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0];
    setPhoto(selectedPhoto);
    setIsPhotoSelected(true);
  };
  const {
    title,
    body,
    description,
    // author,
    timeTakenToReadPost,
    categories,
    authorId,
  } = props.transfer1;

  const formData = {
    title,
    body,
    description,
    // author,
    timeTakenToReadPost,
    categories,
    authorId,
    descPhoto,
    comments: {},
    likes: {}
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!descPhoto) {
      alert("Please you need to Illustrate with an image... Add Photo!!!");
    } else {
      // Collect form data and pass it to the onProceed function
      if (title && body && description) {
        setLoad(true);
        // if the user is updating the post control enters here
        if (props.transfer2.isUpdate) {
          const ans = await updateArticle(props.transfer2.id, formData);
          if (ans) {
            alert("updated successfully");
            props.onClose();
            setLoad(false);
          }
        }// if the user posting an article control enters here
        else {
          const ans = await sendPostData(formData);
          if (ans) {
            alert("posted successfully");
            props.onClose();
            setLoad(false);
          }else{
            alert("error posting");
            props.onClose();
            setLoad(false);
          }
        }

        props.onClose();
        setLoad(false);
      }
    }
  };

  if (load) {
    return (
      <div className="publish-modal">
        <Loading />;
      </div>
    );
  }
  return (
    <div className="publish-modal">
      <div className="modal-content">
        <div className="publish-top">
          <h4>{props.author} is publishing</h4>
          <button className="cancel-button" onClick={props.onClose}>
            <GiCancel />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <textarea
              className="area"
              value={description}
              onChange={props.handleDescChange}
              required
              placeholder="Make your post a magnet for readers! Just drop in a quick, captivating description (up to 50 Words) to draw them into your world effortlessly."
            />
          </label>

          <label>
            <select
              className="box"
              value={categories}
              onChange={props.handleCatChange}
              required
            >
              <option value="">Pick Category</option>
              <option value="Student Business">Student Business</option>
              <option value="Case Study">Case Study</option>
              <option value="Lifestyle">Lifestyle</option>
              <option value="Health and wellness">Health and wellness</option>
              <option value="Research Proposal">Research Proposal</option>
              <option value="Comedy">Comedy</option>
              <option value="Love and Relationships">
                Love and Relationships
              </option>
              <option value="Creative Writing">Creative Writing</option>
              <option value="Science and Technology">
                Science and Technology
              </option>
              <option value="Announcements">Announcements</option>
              <option value="Academics">Academics</option>
              <option value="Sports and Entertainment">
                Sports and Entertainment
              </option>
            </select>
          </label>
          <label>
            <select
              className="box"
              value={timeTakenToReadPost}
              onChange={props.handleTimeTaken}
              required
            >
              <option value="">Specify Reading Time</option>
              <option value="4">Less Than 4 min</option>
              <option value="7">Less Than 7 min</option>
              <option value="10">Less Than 10 min</option>
              <option value="2">More Than 2 min</option>
              <option value="5">More Than 5 min</option>
              <option value="8">More Than 8 min</option>
              <option value="12">More Than 10 min</option>
            </select>
          </label>

          <div className="articlePhotoHandle">
            <label className="file-input-label">
              <h4>{isPhotoSelected ? "Update Photo" : "Add Photo"}</h4>
              <input
                type="file"
                name="file"
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>
            {descPhoto && (
              <img
                src={URL.createObjectURL(descPhoto)}
                alt="Selected"
                className="articlePhotoPreview"
              />
            )}
          </div>

          <div className="proceed-button-container">
            <button type="submit" className="proceed-button">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PublishModal;
