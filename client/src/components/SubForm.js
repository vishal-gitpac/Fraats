import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewSub } from "../reducers/subReducer";
import { notify } from "../reducers/notificationReducer";
import AlertMessage from "./AlertMessage";
// import * as yup from "yup";
import getErrorMsg from "../utils/getErrorMsg";
import { TextField } from "@material-ui/core";

import { useSubredditFormStyles } from "../styles/muiStyles";
import { Button, Typography } from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import AddIcon from "@material-ui/icons/Add";

// const validationSchema = yup.object({
//   subredditName: yup
//     .string()
//     .required("Required")
//     .max(20, "Must be at most 20 characters")
//     .min(3, "Must be at least 3 characters")
//     .matches(
//       /^[a-zA-Z0-9-_]*$/,
//       "Only alphanumeric characters allowed, no spaces/symbols"
//     ),
//   description: yup
//     .string()
//     .required("Required")
//     .max(100, "Must be at most 100 characters")
//     .min(3, "Must be at least 3 characters"),
// });

const SubForm = () => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const classes = useSubredditFormStyles();
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [data, setData] = useState({
    subredditName: "",
    description: "",
  });

  // const handleCreateSub = async (values, { setSubmitting }) => {
  //   try {
  //     setSubmitting(true);
  //     dispatch(addNewSub(values));
  //     dispatch(
  //       notify(`New subreddish created: r/${values.subredditName}`, "success")
  //     );
  //     // history.push(`/r/${values.subredditName}`);
  //   } catch (err) {
  //     dispatch(notify(getErrorMsg(err), "error"));
  //   }
  //   setSubmitting(false);
  // };

  return (
    <div className={classes.formWrapper}>
      <div className={classes.input}>
        <Typography
          className={classes.inputIconText}
          color="primary"
          variant="h5"
        >
          r/
        </Typography>
        <TextField
          name="subfraatName"
          type="text"
          placeholder="Enter name"
          label="Subfraat Name"
          required
          fullWidth
          value={data.subredditName}
          onChange={(e) => {
            setData({ ...data, subredditName: e.target.value });
          }}
        />
      </div>
      <div className={classes.descInput}>
        <InfoIcon className={classes.inputIcon} color="primary" />
        <TextField
          name="description"
          type="text"
          placeholder="Enter description"
          label="Description"
          required
          fullWidth
          variant="outlined"
          multiline
          rows={2}
          maxRows={Infinity}
          value={data.description}
          onChange={(e) => {
            setData({ ...data, description: e.target.value });
          }}
        />
      </div>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        className={classes.submitButton}
        disabled={isSubmitting}
        startIcon={<AddIcon />}
        onClick={async () => {
          if (data.subredditName.trim() === "") {
            return dispatch(notify("Subredit name required", "error"));
          }
          if (data.description.trim() === "") {
            return dispatch(notify("Description is required", "error"));
          }

          try {
            setIsSubmitting(true);
            await dispatch(addNewSub(data));
            dispatch(
              notify(
                `New subreddish created: r/${data.subredditName}`,
                "success"
              )
            );
            history.push(`/r/${data.subredditName}`);
          } catch (err) {
            console.error(err);
            console.error(err.message);
            dispatch(notify(getErrorMsg(err), "error"));
          }
          setIsSubmitting(false);
        }}
      >
        {isSubmitting ? "Creating" : "Create SubFraat"}
      </Button>
      <AlertMessage
        error={error}
        severity="error"
        clearError={() => setError(null)}
      />
    </div>
  );
};

export default SubForm;
