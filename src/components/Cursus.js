import React from "react";
import "../styles/Cursus.css";
import messagesfr from "../messages/fr.json";
import messagesen from "../messages/en.json";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { FormattedMessage, useIntl } from "react-intl";
import { Container, Grid } from "@material-ui/core";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Cursus() {
  let cursus =
    useIntl().locale == "en"
      ? Object.values(messagesen.cursus)
      : Object.values(messagesfr.cursus);
  let scolaire =
    useIntl().locale == "en"
      ? Object.values(messagesen.scolaire)
      : Object.values(messagesfr.scolaire);

  return (
    <div id="cursus">
      <Container>
        <h1 class="title">
          <FormattedMessage id="cursus-title" />
        </h1>
        <VerticalTimeline>
          {cursus &&
            cursus.map((cur, i) => {
              return (
                <VerticalTimelineElement
                  className={"vertical-timeline-element--work"}
                  contentArrowStyle={{ borderRight: "7px solid  #618699" }}
                  date={cur.date}
                  iconStyle={{ background: "#618699", color: "#fff" }}
                  icon={<WorkIcon />}
                >
                  <div className={i === 0 && "current"}>
                    <Grid container spacing={1}>
                      <Grid xs={9} sm={10} item>
                        <h3 className="vertical-timeline-element-title">
                          {cur.title}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle">
                          {cur.place}
                        </h4>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                        <LazyLoadImage
                          style={{
                            borderRadius: "50%",
                            width: "100%"
                          }}
                          effect="blur"
                          src={cur.pic}
                        />
                      </Grid>
                    </Grid>

                    <ul style={{ textAlign: "left" }}>
                      {cur.desc.map(des => {
                        return <li>{des}</li>;
                      })}
                    </ul>
                  </div>
                </VerticalTimelineElement>
              );
            })}
          {scolaire &&
            scolaire.map((scol, i) => {
              return (
                <VerticalTimelineElement
                  className="vertical-timeline-element--education"
                  date={scol.date}
                  contentArrowStyle={{ borderRight: "7px solid  #C1524C" }}
                  iconStyle={{ background: "#C1524C", color: "#fff" }}
                  icon={<SchoolIcon />}
                >
                  <div className={i === 0 && "current-scol"}>
                    <Grid container spacing={1}>
                      <Grid xs={9} sm={10} item>
                        <h3 className="vertical-timeline-element-title">
                          {scol.title}
                        </h3>
                        <br></br>
                        <h4 className="vertical-timeline-element-subtitle">
                          {scol.place}
                        </h4>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                        <LazyLoadImage
                          style={{
                            borderRadius: "50%",
                            width: "100%"
                          }}
                          effect="blur"
                          src={scol.pic}
                        />
                      </Grid>
                    </Grid>
                  </div>
                </VerticalTimelineElement>
              );
            })}
        </VerticalTimeline>
      </Container>
    </div>
  );
}
