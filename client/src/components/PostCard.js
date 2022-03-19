import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { UpvoteButton, DownvoteButton } from "./VoteButtons";
import { notify } from "../reducers/notificationReducer";
import EditDeleteMenu from "./EditDeleteMenu";
import getEditedThumbail from "../utils/cloudinaryTransform";
import { trimLink, prettifyLink, fixUrl } from "../utils/formatUrl";
import ReactHtmlParser from "react-html-parser";
import TimeAgo from "timeago-react";
import getErrorMsg from "../utils/getErrorMsg";

import {
  Paper,
  Typography,
  useMediaQuery,
  CardMedia,
  Link,
  Button,
} from "@material-ui/core";
import { useCardStyles } from "../styles/muiStyles";
import { useUserPostCardStyles } from "../styles/muiStyles";
import { useTheme } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import LinkIcon from "@material-ui/icons/Link";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import CommentIcon from "@material-ui/icons/Comment";

const PostCard = ({ post, toggleUpvote, toggleDownvote }) => {
  const {
    id,
    title,
    postType,
    textSubmission,
    linkSubmission,
    imageSubmission,
    subreddit,
    author,
    upvotedBy,
    downvotedBy,
    pointsCount,
    commentCount,
    createdAt,
    updatedAt,
  } = post;

  const classes = useUserPostCardStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();
  const { user, darkMode } = useSelector((state) => state);

  const isUpvoted = user && upvotedBy.includes(user.id);
  const isDownvoted = user && downvotedBy.includes(user.id);

  const handleUpvoteToggle = async () => {
    try {
      if (isUpvoted) {
        const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
        dispatch(toggleUpvote(id, updatedUpvotedBy, downvotedBy));
      } else {
        const updatedUpvotedBy = [...upvotedBy, user.id];
        const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
        dispatch(toggleUpvote(id, updatedUpvotedBy, updatedDownvotedBy));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), "error"));
    }
  };

  const handleDownvoteToggle = async () => {
    try {
      if (isDownvoted) {
        const updatedDownvotedBy = downvotedBy.filter((d) => d !== user.id);
        dispatch(toggleDownvote(id, updatedDownvotedBy, upvotedBy));
      } else {
        const updatedDownvotedBy = [...downvotedBy, user.id];
        const updatedUpvotedBy = upvotedBy.filter((u) => u !== user.id);
        dispatch(toggleDownvote(id, updatedDownvotedBy, updatedUpvotedBy));
      }
    } catch (err) {
      dispatch(notify(getErrorMsg(err), "error"));
    }
  };

  const trimmedText =
    textSubmission &&
    (textSubmission.length < 100
      ? textSubmission
      : textSubmission.slice(0, 100).concat("...."));

  const linkToShow =
    postType === "Link"
      ? linkSubmission
      : postType === "Image"
      ? imageSubmission.imageLink
      : "";

  const formattedLink = trimLink(prettifyLink(linkToShow), 30);

  return (
    <Paper variant="outlined" className={classes.mainPaper}>
      <div className={classes.votesWrapper}>
        <UpvoteButton
          user={user}
          body={post}
          handleUpvote={handleUpvoteToggle}
          size={isMobile ? "small" : "medium"}
        />
        <Typography
          variant="body1"
          style={{
            color: isUpvoted
              ? "#FF8b60"
              : isDownvoted
              ? "#9494FF"
              : darkMode
              ? "#e4e4e4"
              : "#333",
            fontWeight: 600,
          }}
        >
          {pointsCount}
        </Typography>
        <DownvoteButton
          user={user}
          body={post}
          handleDownvote={handleDownvoteToggle}
          size={isMobile ? "small" : "medium"}
        />
      </div>
      <div
        className={classes.postInfo}
        component={RouterLink}
        to={`/comments/${id}`}
      >
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
        <Typography variant="subtitle2">
          <Typography variant="caption" className={classes.userAndDate}>
            Posted by
            <Link component={RouterLink} to={`/u/${author?.username}`}>
              {` ${author?.username} `}
            </Link>
            • <TimeAgo datetime={new Date(createdAt)} />
            {createdAt !== updatedAt && (
              <em>
                {" • edited"} <TimeAgo datetime={new Date(updatedAt)} />
              </em>
            )}{" "}
            •{" "}
            <Link component={RouterLink} to={`/r/${subreddit?.subredditName}`}>
              {`f/${subreddit?.subredditName} `}
            </Link>
          </Typography>
        </Typography>
        {postType === "Text" ? (
          <Typography variant="body1">
            {ReactHtmlParser(trimmedText)}
          </Typography>
        ) : postType === "Image" ? (
          <a
            href={imageSubmission.imageLink}
            alt={title}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.imagePost}
          >
            <img
              alt={title}
              src={imageSubmission.imageLink}
              className={classes.image}
            />
          </a>
        ) : (
          <Link href={fixUrl(linkSubmission)}>
            {formattedLink} <OpenInNewIcon fontSize="inherit" />
          </Link>
        )}
        <div>
          <Button
            //color="primary"
            size="small"
            startIcon={<CommentIcon />}
            className={classes.commentsBtn}
            component={RouterLink}
            to={`/comments/${id}`}
          >
            {commentCount} Comments
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default PostCard;
