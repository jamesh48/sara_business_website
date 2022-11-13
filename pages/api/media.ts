import dotenv from 'dotenv';
dotenv.config({ path: './.env' });
//
import axios, { AxiosResponse } from 'axios';

import type { NextApiRequest, NextApiResponse } from 'next';

type IGIdCaptionEntry = { id: string; caption?: string };

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<IGIdCaptionEntry[]>
) => {
  try {
    const igAccessToken = process.env.ACCESS_TOKEN;
    const response = (await axios({
      url: 'https://graph.instagram.com/me/media',
      params: { fields: 'id,caption', access_token: igAccessToken },
    })) as AxiosResponse<{ data: IGIdCaptionEntry[] }>;

    const hashtaggedEntries = response.data.data.reduce<IGIdCaptionEntry[]>(
      (reducedEntries, entry) => {
        if (entry.caption && entry.caption.indexOf('#tbt') !== -1) {
          reducedEntries.push(entry);
        }
        return reducedEntries;
      },
      []
    );
    res.status(200).json(hashtaggedEntries);
  } catch (err) {
    const typedErr = err as {
      response: { data: { error: { message: string } } };
    };
    console.info(typedErr.response.data.error.message);
    return res.status(500).json([]);
  }
};

export default handler;
