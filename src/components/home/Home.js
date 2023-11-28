import { Grid } from "@mui/material";
import * as React from "react";

class Home extends React.Component {
  async backPage() {
    console.log("backPage");
  }

  async TestPage() {
    console.log("TestPage");
  }

  async main() {
    await this.backPage();
    await this.TestPage();
  }

  async submain() {
    await this.TestPage();
    await this.backPage();
  }

  render() {
    return (
      <div>
        <div id="footer" className="row mt-4">
          <Grid container spacing={2}>
            <Grid item xs={6} className="text-right">
              <a className="App-link color-red" href="/">
                <button type="button" onClick={() => this.main()}>
                  Click Me backPage
                </button>
              </a>
            </Grid>
            <Grid item xs={6} className="text-left">
              <a className="App-link color-red" href="/test-page">
                <button type="button" onClick={() => this.submain()}>
                  Click Me Test Page
                </button>
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
