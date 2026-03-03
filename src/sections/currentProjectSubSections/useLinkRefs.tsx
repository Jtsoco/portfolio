
import { currentProjectInfo } from "../../assets/carouselItemInfo/currentProjectInfo";
import React from "react";

export function useLinkRefs() {
  const refs: string[] = [];
  currentProjectInfo().imageSections.forEach((section) => {
    refs.push(section.id);
  });
  refs.push('api-overview');
  refs.push('roadmap');

  type SectionRefs = Record<string, React.RefObject<HTMLDivElement | null>>;

  const currentProjectRefs: SectionRefs = refs.reduce(
    (acc: SectionRefs, id: string) => {
      acc[id] = React.createRef<HTMLDivElement>();
      return acc;
    }, {} as SectionRefs);
    // take initial value of {}, accumulate is acc which is the initial value being added to as we go through the array, adding on refs and ids as we go

  return (
    currentProjectRefs
  )
}
