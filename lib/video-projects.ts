type VideoProjectInfo = {
  id: string;
  title: string;
  description: string;
  label: string;
};

export type VideoProject = VideoProjectInfo & (
  | { kind?: "file"; src: string }
  | { kind: "instagram"; url: string }
);

export const videoProjects: VideoProject[] = [];
