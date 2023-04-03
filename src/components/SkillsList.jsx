import React, { useEffect, useState } from "react";
import { SKILL_LIST } from "../consts";

export default function SkillsList({ attrList }) {
  const list = SKILL_LIST.map((skill, ind) => {
    return {
      ...skill,
      id: ind,
      points: 0,
      modifierPoints: attrList.filter(
        (attr) => attr.name === skill.attributeModifier
      )[0].modifier,
    };
  });
  const [skillsList, setSkillsList] = useState(list);
  const [pointsSpent, setPointsSpent] = useState(
    skillsList.reduce((a, b) => a + b.points, 0)
  );
  const [maxPoints, setMaxPoints] = useState(0);

  useEffect(() => {
    for (const attr of attrList) {
      if (attr.name === "Intelligence") {
        setMaxPoints(10 + 4 * attr.modifier);
        break;
      }
    }
  }, [attrList]);

  const updatePoint = (id, updateWith) => {
    setSkillsList(
      skillsList.map((skill) => {
        skill.modifierPoints = attrList.filter(
          (attr) => attr.name === skill.attributeModifier
        )[0].modifier;
        if (skill.id === id) {
          return {
            ...skill,
            points: skill.points + updateWith,
          };
        }
        return skill;
      })
    );
    setPointsSpent((prevPoints) => prevPoints + updateWith);
  };

  return (
    <div>
      <span style={{ display: "block", fontWeight: "bold" }}>
        Points Spent: {pointsSpent}, Max Points: {maxPoints}
      </span>
      {skillsList.map((skill) => {
        return (
          <span style={{ display: "block" }} key={skill.id}>
            {skill.name} - {skill.points},
            <button
              disabled={pointsSpent >= maxPoints}
              onClick={() => updatePoint(skill.id, 1)}
            >
              +
            </button>
            <button
              disabled={skill.points <= 0}
              onClick={() => updatePoint(skill.id, -1)}
            >
              -
            </button>{" "}
            | modifier ({skill.attributeModifier}): {skill.modifierPoints}
          </span>
        );
      })}
    </div>
  );
}
