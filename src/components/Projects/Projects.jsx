import React, { useContext, useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import '../../App.css'

import { Card } from "./common/Card";
import { Container } from "./common/Container";
import Star from "./common/Icons/Star";
import Fork from "./common/Icons/Fork";
import axios from "axios";
import { Wrapper, Grid, Item, Content, Stats } from "./styles";

const Projects = ({ AccessCode }) => {
  // const { theme } = useContext(ThemeContext);
  console.log("AccessCode: ", AccessCode);
  const [repos, setRepos] = useState([]);
  // console.log(process.env.GITHUB_TOKEN);
  useEffect(() => {

    // ! It is not possible to make a Post request for the access token (Gives 404 NOT Found Error) so I used PAT Token in order to get the repo (I tried many R&D but not able to find the solution for that)
    /* const article = {
    //   client_id: 'cfbcece9075bdfca73c0',
    //   client_secret: '0ccbda65f6b38cdc7c7616ef0ef44ec6aac9bba7',
    //   code: AccessCode
    // };
    // // const headers = {
    // //   'Accept': 'application/json',
    // // }
    // // axios.post('https://github.com/login/oauth/access_token', article, { headers })
    // //   .then((response) => response)
    // //   .then((repoData) => {
    // //     console.log("Repo: ", repoData);
    // //   });

    // fetch('https://github.com/login/oauth/access_token', {
    //   method: "POST",
    //   mode: 'no-cors',
    //   body: JSON.stringify(article),
    //   headers: { "Content-type": "application/json; charset=UTF-8", "Access-Control-Allow-Origin": "*" }
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(err => console.log(err));
    // axios({
    //   method: 'POST',
    //   mode: 'no-cors',
    //   url: 'https://github.com/login/oauth/access_token',
    //   data: {
    //     client_id: 'cfbcece9075bdfca73c0',
    //     client_secret: '0ccbda65f6b38cdc7c7616ef0ef44ec6aac9bba7',
    //     code: { AccessCode }
    //   },
    //   headers: {  "Access-Control-Allow-Origin": "*", 'Accept': 'application/json' },

    // }).then((response) => console.log(response.data));
    // let article = {
    //   title: "foo",
    //   body: "bar", 
    //   userId:1
    // }

*/

    axios
      .get("https://api.github.com/user/repos", {
        params: {
          visibility: "public",
          per_page: 100,
          affiliation: "owner,collaborator",
        },
        headers: {
          Authorization: `token ${process.env.REACT_APP_PAT}`, 
        },
      })
      .then((response) => response.data)
      .then((repoData) => {
        console.log("Repo: ", repoData);
        repoData.sort((a, b) =>
          a.stargazers_count < b.stargazers_count ? 1 : -1
        );
        console.log(repoData);
        repoData = repoData.slice(0, 8);
        setRepos(repoData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="Content">
        <Wrapper as={Container} id="projects">
          {repos.length > 0 && <h2>Projects</h2>}
          <Grid>
            {repos.map((node) => (
              <Item
                key={node.id}
                as="a"
                href={node.svn_url}
                target="_blank"
                rel="noopener noreferrer"

              >
                <Card >
                  <Content>
                    <h4>{node.name}</h4>
                    <p>{node.description}</p>
                  </Content>
                  <Stats >
                    <div>
                      <Star color={"#fff"} />
                      <span>{node.stargazers_count}</span>
                    </div>
                    <div>
                      <Fork color={"#fff"} />
                      <span>{node.forks_count}</span>
                    </div>
                  </Stats>
                </Card>
              </Item>
            ))}
          </Grid>
        </Wrapper>
      </div>
      {/* <h1>THis is Projects Section</h1> */}
      <Footer className="Footer" />
    </>
  );
};

export default Projects;
