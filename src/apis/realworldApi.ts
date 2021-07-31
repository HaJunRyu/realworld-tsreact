import customAxios from './customAxios';

const login = async ({ email, password }: { email: string; password: string }) => {
  customAxios.post('users/login', {
    user: {
      email,
      password,
    },
  });
};

const registration = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  customAxios.post('users', {
    user: {
      username,
      email,
      password,
    },
  });
};

const getCurrntUser = async () => {
  customAxios.get('user');
};

const updateUser = ({ email, bio, image }: { email: string; bio: string; image: string }) => {
  customAxios.put('user', { user: { email, bio, image } });
};

const getArticles = async ({
  tag = '',
  author = '',
  favorited = '',
  limit,
  offset,
}: {
  tag?: string;
  author?: string;
  favorited?: string;
  limit: number;
  offset?: number;
}) => {
  const response = await customAxios.get(
    `articles?tag=${tag}&author=${author}&favorited=${favorited}&limit=${limit}&offset=${offset}`
  );
  return response.data;
};

const realworldApis = {
  getArticles,
};

export default realworldApis;
