export enum envs {
  development,
  test,
  production
}

export const shared = {
  env: envs[envs[process.env.NODE_ENV]] || envs[envs.development]
};
