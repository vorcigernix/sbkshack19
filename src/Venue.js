import { Box, Paragraph } from "grommet";
import React from "react";
import { createClient } from "contentful";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    client
      .getEntries({
        content_type: "page",
        "fields.name": "Venue"
      })
      .then(response => {
        this.setState({ data: response.items[0].fields });
        console.log(response.items[0].fields);
      })
      .catch(console.error);
  }

  render() {
    return (
      <Box direction="row-responsive" fill wrap>
        {this.state.data.gallery && (
          <Box direction="row-responsive" justify="center" fill wrap>
            <Box
              basis="50vw"
              height="medium"
              round="xsmall"
              margin="small"
              elevation="small"
              background={{
                color: "almostwhite",
                image: "url(" + this.state.data.gallery[0].fields.file.url + ")"
              }}
            />
            <Box
              basis="45vw"
              height="medium"
              round="xsmall"
              margin="small"
              elevation="small"
              background={{
                color: "almostwhite",
                image: "url(" + this.state.data.gallery[1].fields.file.url + ")"
              }}
            />
            <Box
              basis="45vw"
              height="medium"
              round="xsmall"
              margin="small"
              elevation="small"
              pad="medium"
              background={{
                color: "white"
              }}
            >
              <Paragraph>
              {this.state.data.pageContent.content[0].content[0].value}
              </Paragraph>
            </Box>
            <Box
              basis="50vw"
              height="medium"
              round="xsmall"
              margin="small"
              elevation="small"
              background={{
                color: "almostwhite",
                image: "url(" + this.state.data.gallery[2].fields.file.url + ")"
              }}
            />
          </Box>
        )}
      </Box>
    );
  }
}

export default Home;
