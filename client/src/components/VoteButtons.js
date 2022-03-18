import React from "react";
import AuthFormModal from "./AuthFormModal";
import { ReactComponent as Upvote } from "../svg/glow_1.svg";
import { Checkbox } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { SvgIcon } from "@material-ui/core";

export const UpvoteButton = ({ user, body, handleUpvote, size }) => {
  return user ? (
    <Checkbox
      checked={body.upvotedBy.includes(user.id)}
      icon={
        <SvgIcon style={{ color: "#ffffff" }}>
          <Upvote />
        </SvgIcon>
      }
      checkedIcon={
        <SvgIcon style={{ color: "#fed514" }}>
          <Upvote />
        </SvgIcon>
      }
      onChange={handleUpvote}
      size={size || "small"}
    />
  ) : (
    <AuthFormModal type="upvote" />
  );
};

export const DownvoteButton = ({ user, body, handleDownvote, size }) => {
  const mystyle = {
    color: "#ffffff",
    transform: "rotate(180deg)",
  };
  const mystyle1 = {
    color: "#fed514",
    transform: "rotate(180deg)",
  };
  return user ? (
    <Checkbox
      checked={body.downvotedBy.includes(user.id)}
      icon={
        <SvgIcon style={mystyle}>
          <Upvote />
        </SvgIcon>
      }
      checkedIcon={
        <SvgIcon style={mystyle1}>
          <Upvote />
        </SvgIcon>
      }
      onChange={handleDownvote}
      size={size || "small"}
    />
  ) : (
    <AuthFormModal type="downvote" />
  );
};
