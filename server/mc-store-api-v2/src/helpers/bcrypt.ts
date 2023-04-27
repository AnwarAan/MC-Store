import bcrypt from "bcrypt";

const hashingPassword = async (plainText: string) => {
  const saltRound = 10;
  const result = await bcrypt.hash(plainText, saltRound);
  return result;
};

const comparePassword = async (password: string, hash: string) => {
  const result = await bcrypt.compare(password, hash);
  return result;
};

export default { hashingPassword, comparePassword };
