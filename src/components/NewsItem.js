import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";

const NewsItem = props => {
  return (
    <Box margin="small" background="white" round="xsmall" elevation="small">
      {props.news.fields ? (
        <Box>
          <Box
            height="7rem"
            overflow="hidden"
          >
            <Heading
              level="3"
              margin={{
                top: "medium",
                bottom: "small",
                left: "medium",
                right: "medium"
              }}
              color="sbksorange"
              responsive={false}
            >
              {props.news.fields.title}
            </Heading>
            {props.news.fields.subtitle && (
              <Text
                size="small"
                weight="bold"
                color="rhino"
                margin={{
                  top: "small",
                  bottom: "small",
                  left: "medium",
                  right: "medium"
                }}
              >
                {props.news.fields.subtitle}
              </Text>
            )}
          </Box>

          <Box height="medium">
            <Box
              fill
              overflow="hidden"
              background="white"
              round={{ size: "xsmall", corner: "bottom" }}
            >
              <Paragraph margin="medium">
                {props.news.fields.description}
              </Paragraph>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};

export default NewsItem;
