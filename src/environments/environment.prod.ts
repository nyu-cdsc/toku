// import { Project } from '../STUDY-CONFIG.js';
import { run } from 'toku-parser'; // todo rename to parse

export const environment = {
  production: true,
  project: run('../study.yaml')
};
