import CompletedPrograms from "./CompletedPrograms";
import VolunteerProgramsCalling from "./VolunteerProgramsCalling";
import VolunteerProgramsRunning from "./VolunteerProgramsRunning";

const Activities = () => {
  return (
    <div className="p-4">
      <div className='flex justify-center items-center text-3xl font-bold mb-8 h-20'>Our Activities</div>
      <div className="space-y-6">
        <VolunteerProgramsCalling />
        <VolunteerProgramsRunning />
        <CompletedPrograms />
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Activities;
