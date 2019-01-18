import React from "react";
import { Box, Heading, Text } from "grommet";

function getHour(date) {
  let hdate = new Date(date);
  return hdate.getHours();
}

function getMinute(date) {
  let mdate = new Date(date);
  return mdate.getMinutes();
}

const ScheduleItem = props => {
  return (
    <Box direction="row" align="baseline" margin="medium">
      <Box direction="row" width="xsmall" align="baseline">
        <Heading level="2" color="sbksorange">
          {getHour(props.list.fields.time)}
        </Heading>
        <Heading level="4" color="sbksorange">
          {getMinute(props.list.fields.time)}
        </Heading>
      </Box>
      <Box direction="column" align="baseline" alignContent="between">
        <Heading level="4" color="dark">
          {props.list.fields.name}
        </Heading>
        <Text size="small" color="dark">
          {props.list.fields.place}
        </Text>
      </Box>
    </Box>
  );
};

export default ScheduleItem;
