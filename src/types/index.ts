export type ProjectCategory = 'all' | 'android' | 'flutter' | 'ai' | '3d' | 'travel';

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  platform: 'Android' | 'Web' | 'Flutter / Android';
  platformType: 'android' | 'web' | 'flutter';
  category: ProjectCategory;
  shortDescription: string;
  fullDescription: string;
  updatedDate: string;
  createdDate: string;
  iconName: string;
  accentColor: string;
  bgGradient: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  keyFeatures: string[];
  architecture: {
    frontend: string;
    backendOrStorage: string;
    stateManagement: string;
    specialTech: string;
  };
  demoType: 'notes' | 'inspection' | 'schedule' | 'email' | 'digitaltwin' | 'portfolio' | 'camping';
}
