import React, { useEffect, useState } from "react";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '80%',

//   },
//   heading: {
//     fontSize: theme.typography.pxToRem(15),
//     fontWeight: theme.typography.fontWeightRegular,
//   },
// }))

export default function PostsPage() {
  const [value, setValue] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((res2) => setValue(res2));
  }, []);

  return (
    <PostWrapper>
      {value.map((item) => {
        return (
          <div className="postdiv" key={item.id}>
            <Accordion className="post">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className="title">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.body}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </PostWrapper>
  );
}

const PostWrapper = styled.div`
  margin-top: 54px;
  .postdiv {
    margin-top: 5px;
    width: 90%;
    text-transform: capitalize;
  }
  .post:hover {
    background-color: lightgreen;
  }
  .title {
    font-weight: bold;
  }
`;
