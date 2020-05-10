import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { Context as AppContext } from "../components/context/app/context";
import {
  toggleEditLog,
  deleteLog,
  toggleViewLog,
} from "../components/context/app/actions";
import MWC from "../components/layout/MWC";
import PageBanner from "../components/composed/PageBanner";
import NotebookIcon from "../components/svg/icon/NotebookIcon";
import LogItem from "../components/li/LogItem";

const Container = styled.div``;

const LogsMWC = styled(MWC)`
  padding: 30px 0;
  display: grid;
  justify-items: center;
`;

const LogsView = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  gap: 10px;
`;

const Log = () => {
  const theme = useContext(ThemeContext);
  const appCtx = useContext(AppContext);

  return (
    <Container>
      <PageBanner
        color={theme.colors.fill.brand.salmon}
        svgCtr={NotebookIcon}
        message="Personal Log"
      />
      <LogsMWC>
        <LogsView>
          {appCtx.state.logs.map((log) => (
            <LogItem
              log={log}
              key={log.id}
              onClick={() => {
                appCtx.dispatch(toggleViewLog(log.id));
              }}
              editfn={() => appCtx.dispatch(toggleEditLog(log.id))}
              deletefn={() => appCtx.dispatch(deleteLog(log.id))}
            />
          ))}
        </LogsView>
      </LogsMWC>
    </Container>
  );
};

export default Log;
