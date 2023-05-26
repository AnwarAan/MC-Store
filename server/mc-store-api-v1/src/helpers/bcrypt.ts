import bcrypt from 'bcrypt';

const hash = async (plainText: string) => {
  const saltRound = 10;
  const result = await bcrypt.hash(plainText, saltRound);
  return result;
};

const compare = async (plainText: string, hash: string) => {
  const result = await bcrypt.compare(plainText, hash);
  return result;
};

export default { hash, compare };
