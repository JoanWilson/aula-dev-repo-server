import bcrypt from 'bcryptjs/dist/bcrypt';

export const createPasswordHash = async (password) => {
    const salt = await bcrypt.genSalt(10)
    bcrypt.hash(password, salt);
}