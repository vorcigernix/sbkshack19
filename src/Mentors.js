import { Box } from "grommet";
import React from "react";
import { createClient } from "contentful";
import MentorItem from "./components/MentorItem";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class Mentors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "mentors"
      })
      .then(response => {
        this.setState({ data: response.items });
      })
      .catch(console.error);
  }

  render() {
    return (
      <Box direction="row-responsive">
        {this.state.data.map(pplItem => (
          <Box
            key={
              pplItem.sys.id
                ? pplItem.sys.id
                : Math.floor(Math.random() * 1000000)
            }
            direction="row-responsive"
            basis="1/4"
          >
            <MentorItem list={pplItem} />
          </Box>
        ))}
      </Box>
    );
  }
}

export default Mentors;
