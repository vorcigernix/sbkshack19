import React, { Component } from "react";
import { Heading, Box, Text, ResponsiveContext, Button } from "grommet";
import { Link } from "@reach/router";
import { Menu as MenuIcon, Launch as LaunchIcon } from "grommet-icons";

const StyledLink = props => (
  <Link style={{ textDecoration: "none", fontWeight: 600 }} {...props} />
);

const LinkPane = props => (
  <Box {...props}>
    <StyledLink to="/mentors">
      <Text color="white"> Mentors </Text>
    </StyledLink>
    <StyledLink to="/schedule">
      <Text color="white"> Schedule </Text>
    </StyledLink>
    <StyledLink to="/rules">
      <Text color="white"> Rules </Text>
    </StyledLink>
    <StyledLink to="/venue">
      <Text color="white"> Venue </Text>
    </StyledLink>
  </Box>
);

class Nav extends Component {
  state = {
    sidebar: false,
    toggleSidebar: this.toggleSidebar
  };

  toggleSidebar = () => {
    this.setState(state => ({
      sidebar: state.sidebar === false ? true : false
    }));
  };

  render() {
    const { sidebar } = this.state;
    return (
      <ResponsiveContext.Consumer>
        {size => {
          if (size === "medium" || size === "large" || size === "xlarge") {
            return (
              <Box
                round="small"
                margin={{
                  top: "small",
                  bottom: "medium",
                  left: "small",
                  right: "small"
                }}
                justify="between"
                direction="row"
                align="start"
                pad="medium"
                background="radial-gradient(circle at 80%, #F44336, #9C27B0 100%)"
                elevation="medium"
                height="small"
              >
                <Heading level={1} margin="none" color="white">
                  <StyledLink to="/">
                    <LaunchIcon size="large" color="white" />
                  </StyledLink>
                  Love Code
                </Heading>
                <LinkPane direction="row" gap="medium" />
              </Box>
            );
          } else {
            return (
              <Box>
                {sidebar === false ? (
                  <Box
                    round="small"
                    margin="small"
                    justify="between"
                    direction="row"
                    align="start"
                    pad="medium"
                    background="linear-gradient(102.77deg, #F44336 , #E91E63, #9C27B0)"
                    elevation="medium"
                    height="xsmall"
                  >
                    <Button
                      icon={<MenuIcon color="white" />}
                      onClick={this.toggleSidebar}
                    />

                    <StyledLink to="/">
                      <LaunchIcon size="large" color="white" />
                    </StyledLink>
                  </Box>
                ) : (
                  <Box
                    fill="vertical"
                    animation="fadeIn"
                    round="small"
                    margin="small"
                    justify="between"
                    background="linear-gradient(102.77deg, #F44336 , #E91E63, #9C27B0)"
                    elevation="medium"
                    align="start"
                    pad="medium"
                  >
                    <Button
                      icon={<MenuIcon color="sbkstomato" />}
                      onClick={this.toggleSidebar}
                    />
                    <LinkPane gap="large" margin="large" />
                  </Box>
                )}
              </Box>
            );
          }
        }}
      </ResponsiveContext.Consumer>
    );
  }
}

export default Nav;
