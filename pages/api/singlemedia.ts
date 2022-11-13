import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
//
import axios, { AxiosResponse } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

type GetSingleMediaReturnVal = {
  id: string;
  media_type: string;
  media_url: string;
  username: string;
  timestamp: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<GetSingleMediaReturnVal>
) => {
  const response = (await axios({
    url: `https://graph.instagram.com/${req.query.photoId}`,
    params: {
      fields: 'id,media_type,media_url,username,timestamp',
      access_token: process.env.ACCESS_TOKEN,
    },
  })) as AxiosResponse<GetSingleMediaReturnVal>;
  res.status(200).json(response.data);
};

export default handler;
