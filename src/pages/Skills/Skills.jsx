import { skillsList } from "./SkillsList";

export const Skills = () => {
  return (
    <div>
      <div
        className="bg-[#F0F0F0] border-solid border-2 border-custom:[#F0F0F0]
     p-12 my-20 mx-20 rounded-lg">
        <h1 className="text-[#000000] text-3xl font-bold">Skills:</h1>
        <div className="grid grid-cols-1 py-7 gap-4 md:grid-cols-3 md:gap:0">
          {skillsList.map((skill, index) =>(
            <div key={index}
            className="bg-[#fff] p-5 text-center border-solid
             border-1 border-custom:[#ccc] rounded-lg mx-auto skill">
            <h2 className="p-3.5 text-[#F25836] font-bold">{skill.title}</h2>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

