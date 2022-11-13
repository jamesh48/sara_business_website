import dotenv from 'dotenv';
import { GetStaticPropsReturnVals } from './apiTypes';
dotenv.config({ path: './.env' });

type GetStaticProps = () => Promise<GetStaticPropsReturnVals>;

export const getStaticProps: GetStaticProps = async () => {
  const igAccessToken = process.env.ACCESS_TOKEN;
  if (!igAccessToken) {
    return { props: { igAccessToken: 'not defined' } };
  }
  return {
    props: { igAccessToken },
  };
};
