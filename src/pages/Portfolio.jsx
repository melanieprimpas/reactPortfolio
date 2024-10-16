const styles = {
  surfReport: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/0/06/Cabo_San_Lucas_Los_Arcos_3.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    border: "5px solid #91F2F1"
  },
  runBuddy: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/b/b2/AT_-_Franconia_Ridge.JPG")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    border: "5px solid #91F2F1"
  },

  ledWall: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Positano_Sunset.JPG/1920px-Positano_Sunset.JPG")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    border: "5px solid #91F2F1"
  },
  reactCalc: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Pascaline-CnAM_823-1-IMG_1506-black.jpg/1920px-Pascaline-CnAM_823-1-IMG_1506-black.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    border: "5px solid #91F2F1"
  },
  pastelPuzzles: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Close_up_of_Hand_Cut_Jigsaw_Puzzle.JPG/1920px-Close_up_of_Hand_Cut_Jigsaw_Puzzle.JPG")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    border: "5px solid #91F2F1"
  },

  stormTracker: {
    backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Dreamy_Twilight.jpg/1920px-Dreamy_Twilight.jpg")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '250px',
    border: "5px solid #91F2F1"
  },
  column: {
    position: "relative",
    height: "250px",
  },
  section: {
    backgroundColor: "#91F2F1",
    position: "absolute",
    bottom: "0",
    left: "0",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  a: {
    display: "block",
    color: "#000000"
  }

}

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="container text-center">
        <div className="row">
          <div className="col m-3" style={{ ...styles.surfReport, ...styles.column }}>
            <section style={styles.section}>
              <h3 style={styles.a}>Surf Report</h3>
              <a href="https://melanieprimpas.github.io/surfReport" style={styles.a}>Link to Deployed Application</a>
              <a href="https://github.com/melanieprimpas/surfReport" style={styles.a}>Link to Github Repository</a>
            </section>
          </div>
          <div className="col m-3" style={{ ...styles.runBuddy, ...styles.column }}>
            <section style={styles.section}>
              <h3 style={styles.a}>Run Buddy</h3>
              <a href="https://melanieprimpas.github.io/runBuddy/" style={styles.a}>Link to Deployed Application</a>
              <a href="https://github.com/melanieprimpas/runBuddy" style={styles.a}>Link to Github Repository</a>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col m-3" style={{ ...styles.ledWall, ...styles.column }}>
            <section style={styles.section}>
              <h3 style={styles.a}>Led Wall</h3>
              <a href="https://melanieprimpas.github.io/ledWall/" style={styles.a}>Link to Deployed Application</a>
              <a href="https://github.com/melanieprimpas/ledWall" style={styles.a}>Link to Github Repository</a>
            </section>

          </div>
          <div className="col m-3" style={{ ...styles.reactCalc, ...styles.column }}>
            <section style={styles.section}>
              <h3 style={styles.a}>React Calculator</h3>
              <a href="https://melanieprimpas.github.io/ReactCalc/" style={styles.a}>Link to Deployed Application</a>
              <a href="https://github.com/melanieprimpas/ReactCalc" style={styles.a}>Link to Github Repository</a>
            </section>
          </div>
        </div>
        <div className="row">
          <div className="col m-3" style={{ ...styles.pastelPuzzles, ...styles.column }}>
          <section style={styles.section}>
              <h3 style={styles.a}>Pastel Puzzles</h3>
              <a href="https://melanieprimpas.github.io/PastelPuzzles/" style={styles.a}>Link to Deployed Application</a>
              <a href="https://github.com/melanieprimpas/PastelPuzzles" style={styles.a}>Link to Github Repository</a>
            </section>
          </div>
          <div className="col m-3" style={{ ...styles.stormTracker, ...styles.column }}>
            <section style={styles.section}>
              <h3 style={styles.a}>Storm Tracker</h3>
              <a href="https://melanieprimpas.github.io/StormTracker/" style={styles.a}>Link to Deployed Application</a>
              <a href="https://github.com/melanieprimpas/StormTracker" style={styles.a}>Link to Github Repository</a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

