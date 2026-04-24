import { ProjectExperience } from "../types";

let data: ProjectExperience[] | null = null;
const CDN_URL =
  "https://cdn.jsdelivr.net/gh/dtduong30/rich-content@master/projects.json";

export async function loadProjects() {
  try {
    const res = await fetch(CDN_URL);

    if (!res.ok) throw new Error("Failed to load projects");

    const json: ProjectExperience[] = await res.json();
    data = json;

    if (!data) return [];

    return data;
  } catch (err) {
    console.warn("Projects data failed to load", err);
  }
}
