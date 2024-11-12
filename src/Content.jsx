import Emplees from "./Emplees";
export default function Content({
  employees,
  selectedTeam,
  handleEmployeeCardClick,
  handleTeamSelectionChange,
}) {
  return (
    <Emplees
      employees={employees}
      selectedTeam={selectedTeam}
      handleEmployeeCardClick={handleEmployeeCardClick}
      handleTeamSelectionChange={handleTeamSelectionChange}
    />
  );
}
