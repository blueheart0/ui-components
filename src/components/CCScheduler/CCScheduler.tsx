import React from "react";
import { CCSchedulerProps, SchedulerView } from "./types";
import { CCSchedulerHeader, CCSchedulerWeekView } from "./components";
import styled from "@emotion/styled";

const LScheduler = styled(`div`, { label: "LScheduler" })(() => {
  return {
    display: "grid",
    gridTemplateColumns: "1fr",
    width: "100%",
    gridRowGap: 16,
    height: "100%"
  };
});

const CCScheduler: React.FC<CCSchedulerProps> = (props: CCSchedulerProps) => {
  const {
    date,
    onChangeDate,
    onChangeView,
    view = SchedulerView.Week,
    step = 10
  } = props;
  return (
    <LScheduler>
      <CCSchedulerHeader
        date={date}
        view={view}
        onChangeDate={e => onChangeDate?.(e)}
        onChangeView={e => onChangeView?.(e)}
      />
      <CCSchedulerWeekView date={date} step={step} />
    </LScheduler>
  );
};
export default CCScheduler;
